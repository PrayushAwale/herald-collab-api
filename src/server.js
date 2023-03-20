import express from "express";
import morgan from "morgan";
import cors from "cors";
import { signUp } from "./handlers/user.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.post("/signup", signUp);

export default app;