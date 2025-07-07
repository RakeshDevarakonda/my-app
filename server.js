const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { Server } = require("socket.io");
const { MongoClient } = require("mongodb");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mongoURI = "mongodb://localhost:27017/binance";
const dbName = "binance";
const heroCollectionName = "servernumbers";
const coinsCollectionName = "coins";

app.prepare().then(async () => {
  const client = new MongoClient(mongoURI);
  await client.connect();
  const db = client.db(dbName);

  const heroCollection = db.collection(heroCollectionName);
  const coinsCollection = db.collection(coinsCollectionName);

  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const io = new Server(server);

  // 🟡 HeroNumber Change Stream
  const heroChangeStream = heroCollection.watch();
  heroChangeStream.on("change", async (change) => {
    console.log("HeroNumber Change Detected:", change);
    const doc = await heroCollection.findOne();
    if (doc) {
      io.emit("heroNumber", doc.number);
      console.log("Emitted heroNumber:", doc.number);
    }
  });

  // 🟢 Coins Change Stream
  const coinsChangeStream = coinsCollection.watch();
  coinsChangeStream.on("change", async (change) => {
    if (change.operationType === "update") {
      const updated = await coinsCollection.findOne({
        _id: change.documentKey._id,
      });
      io.emit("coinUpdateSingle", updated);
    }

    console.log("Coins Change Detected:", change);
    const allCoins = await coinsCollection.find({}).toArray();
    io.emit("coinUpdate", allCoins); 
    console.log("Sent coinUpdate to new client:", coinDocs);
  });

  io.on("connection", async (socket) => {
    console.log("✅ Client connected");

    // Send current heroNumber on connect
    const heroDoc = await heroCollection.findOne();
    if (heroDoc) {
      socket.emit("heroNumber", heroDoc.number);
    }

    // Send current coins on connect
    const coinDocs = await coinsCollection.find({}).toArray();
    socket.emit("coinUpdate", coinDocs);

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected");
    });
  });

  server.listen(3000, () => {
    console.log("> Server ready on http://localhost:3000");
  });
});
