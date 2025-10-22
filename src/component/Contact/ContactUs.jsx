import React, { useState } from "react";
import "./ContactUs.css";
import { FaEnvelope, FaPhoneAlt, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const [activeSide, setActiveSide] = useState("form"); // 'form' or 'info'

  return (
    <section className="contact-section">
      <div className="contact-content">
        {/* === Map First === */}
        <div className="map-container">
          <iframe
            title="Nexxa Auto Parts Location"
            src="https://www.google.com/maps?q=550+Congressional+Blvd,+Suite+350,+Carmel,+IN+46032&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* === Title and Subheading === */}
        <h2 className="contact-heading">Get in Touch with Nexxa Auto Parts</h2>
        <p className="contact-subheading">
          We specialize in high-quality second-hand OEM car parts. Reach out for inquiries, orders, or support.
        </p>

        {/* === Outer Border Box === */}
        <div className="contact-container-box">
          <div className="contact-container">
            {/* Left: Contact Form */}
            <div
              className={`contact-form ${activeSide === "form" ? "active-side" : ""}`}
              onClick={() => setActiveSide("form")}
            >
              <h3 className="form-title">Send Message</h3>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Part Inquiry or Order" />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell us about the part or support you need..." rows="4" />
                </div>

                <button type="submit" className="send-btn">
                  ✉ Send Message
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div
              className={`contact-info ${activeSide === "info" ? "active-side" : ""}`}
              onClick={() => setActiveSide("info")}
            >
              <h3 className="info-title">Nexxa Auto Parts — Head Office</h3>
              <p className="info-description">
                We’re proud to serve customers nationwide with top-quality second-hand car parts, trusted by
                thousands of mechanics and vehicle owners. Contact us for genuine OEM replacements at affordable prices.
              </p>

              <div className="info-grid">
                <div className="info-box">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>info@nexxaauto.com</p>
                  </div>
                </div>

                <div className="info-box">
                  <FaPhoneAlt className="info-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (888) 266-0007</p>
                  </div>
                </div>

                <div className="info-box">
                  <FaGlobe className="info-icon" />
                  <div>
                    <h4>Website</h4>
                    <p>www.nexxaauto.com</p>
                  </div>
                </div>

                <div className="info-box">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <h4>Head Office</h4>
                    <p>
                      550 Congressional Blvd, Suite 350<br />
                      Carmel, IN 46032
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* Outer border box */}
      </div>
    </section>
  );
}
