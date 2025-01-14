import express from "express";
import { createDoc } from "./module/Movies.js";
import connectDb from "./db/connectDb.js";
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies';

connectDb(DATABASE_URL);

createDoc();

app.listen(port, console.log(`server works on ${port}`));