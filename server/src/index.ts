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

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://jd-compiler-client.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://jd-compiler-client.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(204);
});



app.use("/compiler", CompilerRouter);
app.use("/user", UserRoutes);

dbConnect();

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
