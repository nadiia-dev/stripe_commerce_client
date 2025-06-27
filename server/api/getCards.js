import { getCustomer } from "../helpers/getCustomer.js";
import stripeApi from "../stripe.js";

export async function getCards(req, res) {
  console.log(req);
  const { currentUser } = req;

  const customer = await getCustomer(currentUser.uid);

  let cards;

  try {
    cards = await stripeApi.paymentMethods.list({
      customer: customer.id,
      type: "card",
    });
    res.status(200).json(cards.data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "an error occured, unable to get cards" });
  }
}
