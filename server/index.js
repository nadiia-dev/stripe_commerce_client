import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createCheckout } from "./api/checkout.js";
import { webhook } from "./api/webhook.js";
import { paymentIntent } from "./api/paymentIntent.js";
import validateUser from "./auth/validateUser.js";
import { setupIntent } from "./api/seputIntent.js";
import { getCards } from "./api/getCards.js";
import { updatePaymentIntent } from "./api/updatePeymentIntent.js";
import decodeJWT from "./auth/decodeJWT.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(
  express.json({ verify: (req, res, buffer) => (req["rawBody"] = buffer) })
);
app.use(cors());
app.use(decodeJWT);

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/create-checkout-session", createCheckout);
app.post("/webhook", webhook);
app.post("/create-payment-intent", paymentIntent);
app.post("/save-payment-method", validateUser, setupIntent);
app.get("/get-payment-methods", validateUser, getCards);
app.put("/update-payment-intent", validateUser, updatePaymentIntent);

app.listen(port, () => console.log("server listening on port", port));
