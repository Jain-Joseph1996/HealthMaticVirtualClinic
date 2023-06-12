import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import basket from "../images/about_us_basket.png";
import graph from "../images/about_us_graph.png";

const About = () => {
  return (
    <>
      <Meta title={"About Us"} />
      <Container class1="about-wrapper py-5 home-wrapper-2">
        <section className="">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12 d-flex justify-content-center main_heading">
                <h3>THE MERCH STORY</h3>
              </div>
              <div className="col-12 d-flex justify-content-center story">
                <p>
                  FabulousMarchStore is Canada's leading e-commerce marketplace
                  with over
                  <br />
                  80 million products across 80+ categories
                </p>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <img className="img-fluid" src={basket} alt="product" />
              </div>
              <div className="col-12 d-flex justify-content-center">
                <img className="img-fluid" src={graph} alt="product" />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default About;
