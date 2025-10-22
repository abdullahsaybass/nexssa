import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./Tc.css";

const Tc = () => {
  return (
    <div>
      <Header />

      <section className="tc-section">
        <div className="tc-content">
          <h1 className="tc-heading">Terms and Conditions</h1>

          <div className="tc-item">
            <p>
              Before placing an order with <strong>Nexxa Auto Parts</strong>,
              please read these Terms carefully. By purchasing from us, you
              agree to the following:
            </p>
            <ul>
              <li>
                You have read and understood our{" "}
                <strong>Warranty Policy</strong> and{" "}
                <strong>Return Procedures</strong>.
              </li>
              <li>
                You are responsible for confirming that all parts ordered are
                correct and compatible with your vehicle.
              </li>
              <li>
                Nexxa Auto Parts reserves the right to refuse or cancel orders
                that do not comply with our policies.
              </li>
              <li>
                Our warranty applies only to the original purchaser and cannot
                be transferred.
              </li>
              <li>
                Warranty and refund claims will only be processed if the part is
                returned in the same condition as received, with no signs of
                misuse or improper installation.
              </li>
            </ul>
          </div>

          <div className="tc-item">
            <h2>Order Accuracy and Compatibility</h2>
            <p>
              Customers are responsible for providing accurate vehicle
              information, including make, model, year, and engine type. Nexxa
              Auto Parts will not be liable for incorrect orders placed due to
              customer error.
            </p>
          </div>

          <div className="tc-item">
            <h2>Payment Terms</h2>
            <p>
              All payments must be completed before order processing. Nexxa Auto
              Parts accepts major credit cards and other payment methods
              displayed at checkout. We reserve the right to cancel or hold
              orders that cannot be verified or are flagged for potential fraud.
            </p>
          </div>

          <div className="tc-item">
            <h2>Pricing and Availability</h2>
            <p>
              Prices and availability are subject to change without notice. If a
              product becomes unavailable after your order is placed, we will
              notify you and issue a full refund or suggest an alternative.
            </p>
          </div>

          <div className="tc-item">
            <h2>Shipping and Delivery</h2>
            <p>
              Orders are shipped to the address provided at checkout. Nexxa Auto
              Parts is not responsible for delays caused by carriers, customs,
              or incorrect addresses provided by the customer.
            </p>
          </div>

          <div className="tc-item">
            <h2>Limitation of Liability</h2>
            <p>
              Nexxa Auto Parts is not responsible for any labor costs,
              installation charges, towing, storage fees, or any indirect or
              consequential damages arising from the use or installation of
              parts purchased from us.
            </p>
          </div>

          <div className="tc-item">
            <h2>Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in
              accordance with the laws of the State of Indiana, without regard
              to conflict of law principles.
            </p>
          </div>

          <div className="tc-item">
            <h2>Contact Us</h2>
            <p>
              <strong>Nexxa Auto Parts</strong>
              <br />
              550 Congressional Blvd, Suite 350
              <br />
              Carmel, IN 46032
              <br />
              📞 +1 (888) 266-0007
              <br />
              📧 info@nexxaauto.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tc;
