import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPloicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h1 className="refund">Returns Policy</h1>
              <p>
                Returns is a scheme provided by respective sellers directly
                under this policy in terms of which the option of exchange,
                replacement and/ or refund is offered by the respective sellers
                to you. All products listed under a particular category may not
                have the same returns policy. For all products, the
                returns/replacement policy provided on the product page shall
                prevail over the general returns policy. Do refer the respective
                item's applicable return/replacement policy on the product page
                for any exceptions to this returns policy and the table below
              </p>
              <p>
                The return policy is divided into three parts; Do read all
                sections carefully to understand the conditions and cases under
                which returns will be accepted.
              </p>
              <table cellSpacing="0" cellPadding="0" className="refund_table">
                <tbody>
                  <tr>
                    <td>
                      <p style={{ fontWeight: "bold" }}>Category</p>
                    </td>
                    <td>
                      <p style={{ fontWeight: "bold" }}>
                        Returns Window, Actions Possible and Conditions (if any)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Lifestyle: Watch, T-Shirt, Footwear, Sari, Short, Dress,
                        Kid’s (Capri, Shorts & Tops), Men’s (Ethnic Wear, Shirt,
                        Formals, Jeans, Clothing Accessory), Women’s (Ethnic
                        Wear, Fabric, Blouse, Jean, Skirt, Trousers, Bra), Bags,
                        Raincoat, Sunglass, Belt, Frame, Backpack, Suitcase,
                        Luggage, etc...
                      </p>
                      <p>
                        Lifestyle: Jewellery, Footwear Accessories, Travel
                        Accessories, Watch Accessories, etc..
                      </p>
                    </td>
                    <td>
                      <p>10 days</p>
                      <p>Refund, Replacement or Exchange</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        Lifestyle: WinterWear(sweatshirt, jacket, sweater,
                        cardigan, kids_thermal, pullover, windcheater,
                        track_suit, thermal,shawl, track_top, glove, muffler,
                        scarf, blazer, uniform_sweatshirt, uniform_blazer,
                        kids_muffler, kids_mitten, shrug, poncho, sock,
                        uniform_sweater, cap, waistcoat, leg_warmer,
                        legging,elder_halloween_costume)
                      </p>
                    </td>
                    <td>
                      <p>3 days</p>
                      <p>Refund, Replacement or Exchange</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Mobile - Apple, Google, Motorola, Infinix, Redmi, MI,
                          Vivo, POCO, Realme, Samsung phones
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Electronics - Apple / Beats, Google, Realme, Samsung,
                          JBL & Infinity, Epson, HP, Dell, Canon, Dizo & MI
                          Products (Tablets, Laptops, Smart Watches)
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Large -Vu, LG, Godrej, Haier, IFB, Hindware , Glen,
                          Faber, AGARO, Voltas, BOSCH
                        </span>
                      </p>
                    </td>
                    <td>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          7 Days Service Center Replacement/Repair
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Replacement only
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Brand assistance for device related issues is subject
                          to brand warranty guidelines and service policies.
                          Please reach out to the nearest brand authorized
                          service centre for more detail
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Please note that Flipkart is an online marketplace and
                          the final decision on replacement of defective device
                          rests with the seller/brand
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          For any other issues with the product, you may contact
                          Flipkart - Flipkart’s 24×7 Customer Care
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td valign="middle">
                      <p>No Questions Asked</p>
                    </td>
                    <td valign="middle">
                      <p>10 days</p>
                      <p>Refund or replacement</p>
                      <p>
                        This policy enables easy product return requests for
                        customers through the Platform, subject to product
                        validations at the time of pick-up and fraud prevention
                        mechanisms.
                      </p>
                      <p>
                        This policy shall be applicable only if the product was
                        bought when this policy was applicable to the product.
                        If not, the policy provided
                        <a href="/refund-policy">here</a> shall apply to the
                        order. It is clarified that a customer may only be able
                        to seek a one-time replacement under this Policy,
                        subject to the other terms provided herein.
                      </p>
                      <p>
                        Exceptions to this policy: Following claims will be
                        covered under the policy provided{" "}
                        <a href="/refund-policy">here</a> and through
                        corresponding validation processes
                      </p>
                      <p>a.product undelivered</p>
                      <p>b. product/accessories missing</p>
                      <p>c. wrong product/accessories delivered</p>
                    </td>
                  </tr>
                  <tr>
                    <td valign="middle">
                      <p>No Returns categories</p>
                    </td>
                    <td valign="middle">
                      <p>
                        Some products in the above categories are not returnable
                        due to their nature or other reasons. For all products,
                        the policy on the product page shall prevail.
                      </p>
                      <p>
                        You can view the complete list of non-returnable
                        products <a href="/refund-policy">here</a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPloicy;
