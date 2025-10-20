"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Us */}
        <div>
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-text">
            We specialize in vintage and classic car parts for restoration
            enthusiasts. Get in touch for genuine, high-quality components.
          </p>

          <div className="footer-info">
            <p>
              <span className="footer-label">PHONE NUMBER:</span> +1 (555) 123-4567
            </p>
            <p>
              <span className="footer-label">EMAIL ADDRESS:</span> info@classicpartsco.com
            </p>
            <p>
              <span className="footer-label">OUR LOCATION:</span> 42 Vintage Lane, Detroit, MI 48201
            </p>
            <p>
              <span className="footer-label">WORKING HOURS:</span> Mon–Sat: 9am - 6pm
            </p>
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="footer-title">Information</h3>
          <ul className="footer-list">
            <li><a href="#">About Classic Parts Co.</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Support</a></li>
            <li><a href="#">Returns & Refunds</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="footer-title">Product Categories</h3>
          <ul className="footer-list">
            <li><a href="#">Vintage Engine Parts</a></li>
            <li><a href="#">Chrome Accessories</a></li>
            <li><a href="#">Classic Interiors</a></li>
            <li><a href="#">Restored Wheels</a></li>
            <li><a href="#">Suspension & Brakes</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="footer-title">Newsletter</h3>
          <p className="footer-text">
            Subscribe to get updates on rare vintage parts, restock alerts, and
            restoration tips.
          </p>
          <form className="footer-form">
            <input
              type="email"
              placeholder="Email Address..."
              className="footer-input"
            />
            <button type="submit" className="footer-btn">Subscribe</button>
          </form>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="footer-bottom">
        <p>
          Powered by <span className="footer-highlight">React & Tailwind</span> — 
          Designed by <span className="footer-highlight">Classic Parts Co.</span>
        </p>
      </div>
    </footer>
  );
}
