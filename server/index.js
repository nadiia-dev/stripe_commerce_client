import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createCheckout } from "./api/checkout.js";
import { webhook } from "./api/webhook.js";
import { paymentIntent } from "./api/paymentIntent.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(
  express.json({ verify: (req, res, buffer) => (req["rawBody"] = buffer) })
);
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/create-checkout-session", createCheckout);
app.post("/webhook", webhook);
app.post("/create-payment-intent", paymentIntent);

app.listen(port, () => console.log("server listening on port", port));
