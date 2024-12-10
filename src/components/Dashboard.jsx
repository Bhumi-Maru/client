import React, { useContext } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const navbarStyle = {
    backgroundColor: isDarkMode ? "#11101d" : "#252222",
    color: isDarkMode ? "#ffffff" : "#000000",
  };

  return (
    <div className="dashboard_container">
      <div style={navbarStyle} className="dashboard">
        <h1>Welcome to Our Dashboard</h1>

        <div className="policy-btn">
          <button onClick={() => navigate("/category-policy-form")}>
            Add Policy
          </button>
        </div>
      </div>

      <div id="services" class="container-fluid text-center">
        <h2 style={{ color: "white" }}>Services We Offer</h2>
        <h4>Explore Our Insurance Options</h4>
        <div class="services-grid">
          <div class="service-box">
            <div class="service-icon">
              <i class="fa fa-car"></i>
            </div>
            <div class="service-title">AUTO INSURANCE</div>
            <p class="service-description">
              Get the best auto insurance rates, tailored to meet your personal
              or business needs.
            </p>
          </div>
          <div class="service-box">
            <div class="service-icon">
              <i class="fa fa-home"></i>
            </div>
            <div class="service-title">HOME INSURANCE</div>
            <p class="service-description">
              Secure your home with comprehensive coverage. Contact us for a
              free quote.
            </p>
          </div>
          <div class="service-box">
            <div class="service-icon">
              <i class="fa fa-heartbeat"></i>
            </div>
            <div class="service-title">HEALTH INSURANCE</div>
            <p class="service-description">
              We provide affordable health insurance packages. Call us for your
              personalized quote.
            </p>
          </div>
          <div class="service-box">
            <div class="service-icon">
              <i class="fa fa-building"></i>
            </div>
            <div class="service-title">BUSINESS INSURANCE</div>
            <p class="service-description">
              Protect your business with comprehensive insurance plans tailored
              to your needs.
            </p>
          </div>
          <div class="service-box">
            <div class="service-icon">
              <i class="fa fa-users"></i>
            </div>
            <div class="service-title">DENTAL INSURANCE</div>
            <p class="service-description">
              Affordable dental coverage options for individuals and families.
            </p>
          </div>
          <div class="service-box">
            <div class="service-icon">
              <i class="fa fa-life-ring"></i>
            </div>
            <div class="service-title">LIFE INSURANCE</div>
            <p class="service-description">
              Secure your future with life insurance. Let us guide you to the
              best plan for your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
