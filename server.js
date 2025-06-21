const { createServer } = require("http");
const next = require("next");
const { Server } = require("socket.io");
const { MongoClient } = require("mongodb");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mongoURI = "mongodb://localhost:27017";
const dbName = "binance";
const collectionName = "servernumber";

app.prepare().then(async () => {
  const httpServer = createServer((req, res) => handle(req, res));
  const io = new Server(httpServer);

  const mongoClient = new MongoClient(mongoURI);
  await mongoClient.connect();
  const db = mongoClient.db(dbName);
  const collection = db.collection(collectionName);

  
  async function emitHeroNumber() {
    const doc = await collection.findOne();
    console.log(doc,"doc")
    if (doc) io.emit("heroNumber", doc.number);
  }

  io.on("connection", async (socket) => {
    console.log("✅ Client connected");
    
    await emitHeroNumber();
  });
  

  const changeStream = collection.watch();
  changeStream.on("change", emitHeroNumber);


  changeStream.on("change", (change) => {
  console.log("🔁 Change detected in MongoDB:", change);
  emitHeroNumber();
});


  httpServer.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
  });
});
