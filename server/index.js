import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";
import UploadRoute from "./routes/UploadRoute.js";
import cors from 'cors';

dotenv.config();

const PORT = 5000;

const USERNAME = process.env.DB_USERNAME;

const PASSWORD = process.env.DB_PASSWORD;

const app = express();

//Middleware

//  app.use(express.json()); //for accepting json format
app.use(bodyParser.json({ limit: "30mb", extended: true })); //for accepting json format

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.use(cors()); //for accepting url hits


mongoose
  .connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@socialmania.ukpvf2a.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Database Connected Successfully \nHosted on http://localhost:${PORT} `
      )
    )
  )
  .catch((error) => {
    console.log(error);
  });


// to serve images inside public folder
app.use(express.static('public'));
app.use('/images', express.static('images'));



//routes

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);

