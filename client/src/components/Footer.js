import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <h2 className="mb-0 text-white">Sign Up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  6777 bretg crt,
                  <br />
                  Toronto,
                  <br />
                  Ontario
                </address>
                <a
                  href="tel: +1 47564756"
                  className="mt-4 d-block mb-2 text-white"
                >
                  +1 47564756
                </a>
                <a
                  href="mailto: hdfsg@gmail.com"
                  className="mt-4 d-block mb-2 text-white"
                >
                  hdfsg@gmail.com
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-l">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-l">
                  Return Policy
                </Link>
                <Link
                  to="/term-and-conditions"
                  className="text-white py-2 mb-l"
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/about" className="text-white py-2 mb-l">
                  About Us
                </Link>
                <Link to="/faq" className="text-white py-2 mb-l">
                  FAQ
                </Link>
                <Link to="/contact" className="text-white py-2 mb-l">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-l">Laptops</Link>
                <Link className="text-white py-2 mb-l">Headphones</Link>
                <Link className="text-white py-2 mb-l">Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className=".col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}; Fabulous Merch store limited
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
