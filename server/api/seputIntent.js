import { getCustomer } from "../helpers/getCustomer.js";
import stripeApi from "../stripe.js";

export async function setupIntent(req, res) {
  const { currentUser } = req;
  const customer = await getCustomer(currentUser.uid);
  let setupIntent;

  try {
    setupIntent = await stripeApi.setupIntents.create({
      customer: customer.id,
    });
    res.status(200).json(setupIntent);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "an error occured, unable to create setup intent" });
  }
}
