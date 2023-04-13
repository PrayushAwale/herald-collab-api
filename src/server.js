import express from "express";
import morgan from "morgan";
import cors from "cors";
import { signIn, signUp } from "./handlers/user.js";
import router from "./route.js";
import { signInEmployee } from "./handlers/employeeAuth.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
// For admin
app.post("/signup", signUp);
app.post("/signin", signIn);
// For emloyee
app.post("/signinemployee", signInEmployee);

app.use("/order", router);
app.use("/employee", router);
app.use("/fooditem", router);

app.use("/file", router);

export default app;
