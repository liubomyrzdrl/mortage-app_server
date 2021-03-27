import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { PORT } from "./constants";
import cors from "cors";
import bankRouter from "./routes/bankRouter";

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
const uri =
  "mongodb+srv://mort2021:mort2021@cluster0.4v1kh.mongodb.net/mort?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", () => {
  throw new Error("unable to connect to database");
});

app.use("/", bankRouter);

app.listen(PORT, () => {
  console.log(`Server listen on post:${PORT}`);
});
