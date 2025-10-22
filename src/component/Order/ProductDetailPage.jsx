import React, { useState } from "react";
import "./ProductDetailPage.css";
import { db } from "../../firebaseConfig.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useLocation } from "react-router-dom";

export default function ProductDetailPage() {
  const location = useLocation();
  const { selectedYear, selectedMake, selectedModel, selectedPart } =
    location.state || {};

  // Default fallback
  const year = selectedYear || "2023";
  const make = selectedMake || "Chevrolet";
  const model = selectedModel || "Malibu";
  const part = selectedPart || "AC Evaporator Housing";
  const stock = 15;

  const [formData, setFormData] = useState({ email: "", phone: "", zip: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    try {
      const docRef = await addDoc(collection(db, "productInquiries"), {
        year,
        make,
        model,
        part,
        stock,
        email: formData.email,
        phone: formData.phone,
        zip: formData.zip,
        createdAt: serverTimestamp(),
      });

      console.log("✅ Inquiry stored with ID:", docRef.id);
      setFormData({ email: "", phone: "", zip: "" });
      setSubmitted(true);
    } catch (error) {
      console.error("❌ Error adding document:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pd-page">
      <section className="pd-header">
        <h1>
          Find Quality Used <span>{part}</span> For {year} {make} {model}
        </h1>
        <p>Connect instantly with trusted recyclers and certified suppliers.</p>
      </section>

      <section className="pd-inquiry-card">
        <h3>
          Currently Available: <span>{stock}</span> in stock
        </h3>

        {submitted ? (
          <div className="pd-success-message">
            🎉 Thank you for your inquiry! Our team will contact you shortly.
          </div>
        ) : (
          <form className="pd-inquiry-form" onSubmit={handleSubmit}>
            <input type="text" value={year} readOnly />
            <input type="text" value={make} readOnly />
            <input type="text" value={model} readOnly />
            <input type="text" value={part} readOnly />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="Enter ZIP code"
              value={formData.zip}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Request a Quote"}
            </button>
          </form>
        )}
      </section>

      <section className="pd-product-info">
        <h2>Product Overview</h2>
        <p>
          Get high-quality OEM replacement parts for your vehicle from our
          nationwide network of trusted recyclers.
        </p>
      </section>
    </div>
  );
}
