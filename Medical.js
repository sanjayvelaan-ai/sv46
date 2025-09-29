import React, { useState } from "react";
import "./Medical.css";

function Medical() {
  const [section, setSection] = useState("home");

  const diseases = [
    { name: "Fever", medicine: "Paracetamol", img: "https://cdn-icons-png.flaticon.com/512/2966/2966488.png" },
    { name: "Cold & Cough", medicine: "Cough Syrup", img: "https://cdn-icons-png.flaticon.com/512/4320/4320350.png" }
  ];

  const doctors = [
    { name: "Dr. Ramesh Kumar", specialty: "Cardiologist", img: "C:\Users\asus\OneDrive\Documents\frontend\src\img\r1.png"},
    { name: "Dr. Anjali Mehta", specialty: "Pediatrician", img: "https://cdn-icons-png.flaticon.com/512/4320/4320361.png" },
    { name: "Dr. Vikram Patel", specialty: "Orthopedic Surgeon", img: "https://cdn-icons-png.flaticon.com/512/4320/4320363.png" },
    { name: "Dr. Neha Sharma", specialty: "Dermatologist", img: "https://cdn-icons-png.flaticon.com/512/4320/4320365.png" },
  ];

  return (
    <div>
      <header>
        <h1>Healthy Life Hospital</h1>
        <nav>
          <button onClick={() => setSection("home")}>Home</button>
          <button onClick={() => setSection("doctors")}>Doctors</button>
          <button onClick={() => setSection("services")}>Services</button>
          <button onClick={() => setSection("contact")}>Contact</button>
        </nav>
      </header>

      <main>
        {section === "home" && (
          <div>
            <h2>Welcome to Our Medical Center</h2>
            <p>Your health is our top priority. We provide the best care for you and your family.</p>
            <section className="diseases">
              <h3>Common Diseases & Medicines</h3>
              <div className="disease-list">
                {diseases.map((item, index) => (
                  <div key={index} className="disease-card">
                    <img src={item.img} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p>{item.medicine}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {section === "doctors" && (
          <div>
            <h2>Our Doctors</h2>
            <div className="doctor-grid">
              {doctors.map((doc, index) => (
                <div key={index} className="doctor-card">
                  <img src={doc.img} alt={doc.name} />
                  <div className="doctor-info">
                    <h4>{doc.name}</h4>
                    <p>{doc.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "services" && (
          <div>
            <h2>Our Services</h2>
            <ul>
              <li>General Checkup</li>
              <li>Laboratory Tests</li>
              <li>Emergency Care</li>
              <li>Vaccination</li>
            </ul>
          </div>
        )}

        {section === "contact" && (
          <div>
            <h2>Contact Us</h2>
            <p>Email: info@healthylife.com</p>
            <p>Phone: +91 1234567890</p>
            <p>Address: 123 Health Street, City, Country</p>
          </div>
        )}
      </main>

      <footer>
        © 2025 Healthy Life Hospital. All rights reserved.
      </footer>
    </div>
  );
}

export default Medical;
