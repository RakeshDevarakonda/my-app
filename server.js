
const { createServer } = require("http");

const { parse } = require("url");
const next = require("next");
const { Server } = require("socket.io");
const { MongoClient } = require("mongodb");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mongoURI = "mongodb://localhost:27017/?replicaSet=rs0";
const dbName = "binance";
const collectionName = "servernumbers"; // ✅ UPDATED

app.prepare().then(async () => {
  const client = new MongoClient(mongoURI);
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const io = new Server(server);

  // ✅ Listen to any change in the collection
  const changeStream = collection.watch();
  changeStream.on("change", (change) => {
    console.log("Change detected:", change); // helpful for debugging
    collection.findOne().then((doc) => {
      if (doc) {
        io.emit("heroNumber", doc.number); // sending updated number to clients
        console.log("Emitted update to clients:", doc.number);
      }
    });
  });

  // ✅ On client connect, send current number
  io.on("connection", (socket) => {
    console.log("Client connected");

    collection.findOne().then((doc) => {
      if (doc) {
        socket.emit("heroNumber", doc.number);
        console.log("Sent current number to new client:", doc.number);
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  server.listen(3000, () => {
    console.log("> Server ready on http://localhost:3000");
  });
});
