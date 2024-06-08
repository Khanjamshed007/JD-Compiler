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
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Additional middleware to handle preflight requests
app.options("*", cors(corsOptions));

config();

app.use("/compiler", CompilerRouter);
app.use("/user", UserRoutes);

dbConnect();

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
