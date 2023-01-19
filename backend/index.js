import express from "express";
//const express = require ('express');
import morgan from "morgan";
// const morgan = require('morgan')
import cors from "cors";
// const cors = require('cors')
import path from "path";
import mongoose from "mongoose";
import router from "./routes/index";

//conexion
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);
const dbUrl =
  "mongodb+srv://solyluna:sofibalis12345@cluster0.0iaph02.mongodb.net/dbsistema";
mongoose
  .connect(dbUrl)
  .then((mongoose) => console.log("conectando a la BD"))
  .catch((err) => console.log(err));

const app = express();
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/api',router);
app.set("port", process.env.PORT || 3000);



app.listen(app.get("port"), () => {
  console.log("server on port " + app.get("port"));
});
