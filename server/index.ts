import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./src/lib/dbConnect";
import { CompilerRouter } from "./src/Routes/CompilerRoutes";
import { UserRoutes } from "./src/Routes/UserRoutes";
const app = express();


app.use(express.json());
app.use(cors());
config();

app.use("/compiler", CompilerRouter);
app.use("/user", UserRoutes);

dbConnect();

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
