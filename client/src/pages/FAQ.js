import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2 style={{ textAlign: "center" }}>FAQ</h2>
              <p>
                <strong>Q. What is Open Box Delivery?</strong>
              </p>
              <p>
                <strong>Ans:</strong>In Open Box Delivery, our Wishmaster will
                open the package in front of you at the time of delivery. Both
                outside as well as the brand packing is opened and shown to you.
                This ensures that you only receive what you ordered.
              </p>

              <p>
                <strong>Q. What if I miss my Flipkart order delivery?</strong>
              </p>
              <p>
                <strong>Ans:</strong>Do not worry, the delivery agent will try
                to deliver again on the next working day. You can also call the
                delivery agent to get the latest delivery update.
              </p>

              <p>
                <strong>
                  Q.The delivery of my order is delayed. What should I do?
                </strong>
              </p>
              <p>
                <strong>Ans:</strong>On the rare occasion that your order is
                delayed, please check your email & messages for updates. A new
                delivery timeframe will be shared with you and you can also
                track its status by visiting My Orders.
              </p>

              <p>
                <strong>
                  Q.Why do I see different prices for the same product?
                </strong>
              </p>
              <p>
                <strong>Ans:</strong>You could see different prices for the same
                product, as it could be listed by many Sellers.
              </p>

              <p>
                <strong>
                  Q.What is the return policy for cash on delivery?
                </strong>
              </p>
              <p>
                <strong>Ans:</strong>In case of cash on delivery, you will have
                to provide a bank account number for the refund. For
                replacement/exchange, you will be given an alternate product for
                the returned product.
              </p>

              <p>
                <strong>Q.How do I know my order has been confirmed?</strong>
              </p>
              <p>
                <strong>Ans:</strong>An e-mail & SMS will be sent once you've
                successfully placed your order. We'll also let you know as soon
                as the seller ships the item(s) to you along with the tracking
                number(s) for your shipment(s). You can track your orders from
                the 'My Orders' section on your Flipkart account.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
