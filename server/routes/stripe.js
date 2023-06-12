const express = require("express");
const Stripe = require("stripe");

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.cartState?.map((item) => {
    return {
      price_data: {
        currency: "CAD",
        product_data: {
          name: item?.productId?.title,
        },
        unit_amount: item?.productId?.price * 100,
      },
      quantity: item?.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/orders`,
    cancel_url: `${process.env.CLIENT_URL}/checkout`,
  });

  res.send({ url: session.url });
});
module.exports = router;
