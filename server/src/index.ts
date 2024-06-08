import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { CompilerRouter } from "./Routes/CompilerRoutes";
import { UserRoutes } from "./Routes/UserRoutes";
const app = express();

app.use(express.json());

const corsOptions = {
  origin: "https://jd-compiler-client.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  Credential: true,
};

app.use(cors(corsOptions));
config();

app.use("/compiler", CompilerRouter);
app.use("/user", UserRoutes);

dbConnect();

app.get("/", (req, res) => {
  res.json("hello buddy");
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
