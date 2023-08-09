const express = require("express");
const Stripe = require("stripe");

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const line_items = [{
      price_data: {
        currency: "CAD",
        product_data: {
          name: req.body.checkoutState?.doctorInfo?.firstName + " " + req.body.checkoutState?.doctorInfo?.lastName,
        },
        unit_amount: req.body.checkoutState?.doctorInfo?.feePerCunsultation * 100,
      },
      quantity: 1,
    }];
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/appointments`,
    cancel_url: `${process.env.CLIENT_URL}/home`,
  });
  res.send({ url: session.url });


});
module.exports = router;
