import React, { useState } from "react";
import { FaCar, FaBars, FaTimes } from "react-icons/fa";
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
              <a href="#">Home</a>
              <a href="#">Shop Parts</a>
              <a href="#">Car Accessories</a>
              <a href="#">Truck Parts</a>
              <a href="#">Services</a>
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

          {/* Right Icons / Info */}
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
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop Parts</a></li>
          <li><a href="#">Car Accessories</a></li>
          <li><a href="#">Truck Parts</a></li>
          <li><a href="#">Services</a></li>
        </ul>

        <div className="mobile-footer">
          <p>Call us at:</p>
          <strong>(800) 060-0730</strong>
          <p>Email: info@nexxaauto.com</p>
          <p>
            Head Office: Nexxa Auto Parts, 550 Congressional Blvd, Suite 350,
            Carmel, IN 46032
          </p>
        </div>
      </div>
    </header>
  );
}
