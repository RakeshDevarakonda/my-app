// src/lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/binance";
const options = {};

let client;
let clientPromise;

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;

