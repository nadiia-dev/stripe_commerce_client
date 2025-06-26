import stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripeApi = stripe(process.env.STRIPE_SECRET_KEY);

export default stripeApi;
