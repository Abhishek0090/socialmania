import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;

const PASSWORD = process.env.DB_PASSWORD;

const app = express();

//  app.use(express.json()); //for accepting json format
app.use(bodyParser.json({ limit: "30mb", extended: true })); //for accepting json format

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose
  .connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@socialmania.ukpvf2a.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => app.listen(5000, () => console.log("Database Connected Successfully")));


  app.get('/',(req,res)=>{
    res.status(200).json({message : "Wallah Habibi"})
  })