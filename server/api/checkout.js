import stripeApi from "../stripe.js";

export const createCheckout = async (req, res) => {
  const domainUrl = process.env.CLIENT_URL;
  const { line_items, customer_email } = req.body;

  if (!line_items || !customer_email) {
    return res
      .status(400)
      .json({ error: "missing required session parameters" });
  }

  let session;

  try {
    session = await stripeApi.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      customer_email,
      success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainUrl}/canceled`,
      shipping_address_collection: { allowed_countries: ["GB", "US"] },
    });
    res.status(200).json({ sessionId: session.id });
  } catch (e) {
    console.log(error);
    res
      .status(400)
      .json({ error: "an error occured, unable to create session" });
  }
};
