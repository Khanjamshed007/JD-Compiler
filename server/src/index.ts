import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { CompilerRouter } from "./Routes/CompilerRoutes";
const app = express();


app.use(express.json());
app.use(cors());
config();

app.use("/compiler", CompilerRouter);

dbConnect();

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
