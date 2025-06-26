import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createCheckout } from "./api/checkout.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/create-checkout-session", createCheckout);

app.listen(port, () => console.log("server listening on port", port));
