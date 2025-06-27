import { getCustomer } from "../helpers/getCustomer.js";
import stripeApi from "../stripe.js";

export async function updatePaymentIntent(req, res) {
  const {
    currentUser,
    body: { paymentIntentId },
  } = req;

  const customer = await getCustomer(currentUser.uid);
  let paymentIntent;

  try {
    paymentIntent = await stripeApi.paymentIntents.update(paymentIntentId, {
      customer: customer.id,
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "unable to update payment intent" });
  }
}
