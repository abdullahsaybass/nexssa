import React, { useState } from "react";
import { FaCar, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* === Top Bar === */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-left">
            <span className="font-bold">Call Us: (800) 060-0730</span>
            <span>Email: info@nexxaauto.com</span>
            <a href="#">Used Car Parts Info</a>
          </div>
          <div className="top-right">
            <span>
              Head Office: Nexxa Auto Parts, 550 Congressional Blvd, Suite 350, Carmel, IN 46032
            </span>
          </div>
        </div>
      </div>

      {/* === Middle Section === */}
      <div className="middle-section">
        <div className="middle-inner">
          {/* Left Menu */}
          <div className="left-menu">
            <div className={`mobile-trigger ${menuOpen ? "hide" : ""}`}>
              <button className="menu-btn" onClick={() => setMenuOpen(true)}>
                <FaBars />
                <span>Menu</span>
              </button>
            </div>

            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/order">Shop Parts</Link>
              <Link to="/service">Car Accessories</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/service">Services</Link>
            </nav>
          </div>

          {/* Center Logo + Search */}
          <div className="center-section">
            <div className="logo">
              <h1>
                <span className="red-text">NEXXA</span> AUTO
              </h1>
            </div>
            <p className="tagline">
              QUALITY USED AUTO PARTS FOR CARS, TRUCKS, AND MOTORCYCLES
            </p>

            <div className="search-bar">
              <div className="bevel-left"></div>
              <div className="bevel-right"></div>
              <div className="search-inner">
                <div className="search-left">
                  <FaCar className="icon-car" />
                  <input
                    type="text"
                    placeholder="Search by part name or OEM number"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Info Buttons */}
          <div className="right-icons">
            <div className="info-btn">Quality Used Parts</div>
            <div className="info-btn">Request a Quote</div>
            <div className="info-btn">Parts Inventory</div>
          </div>
        </div>
      </div>

      {/* === Mobile Menu Overlay === */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* === Mobile Drawer === */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h3>Menu</h3>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <ul className="mobile-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Shop Parts</Link></li>
          <li><Link to="/service">Car Accessories</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/service">Services</Link></li>
        </ul>

        {/* Contact Info in Mobile Menu */}
        <div className="mobile-footer">
          <p><strong>Call us:</strong> (800) 060-0730</p>
          <p><strong>Email:</strong> info@nexxaauto.com</p>
          <p>
            <strong>Office:</strong> Nexxa Auto Parts,
            550 Congressional Blvd, Suite 350, Carmel, IN 46032
          </p>
        </div>
      </div>
    </header>
  );
}
