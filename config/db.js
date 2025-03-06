
import { MongoClient } from "mongodb";
import dotevn from "dotenv";
dotevn.config();

const url = process.env.DATABASE_URL;
const client = new MongoClient(url)

const connectDatabase = async () => {
    await client.connect();
};

export { connectDatabase, client };