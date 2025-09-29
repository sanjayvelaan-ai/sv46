import React from "react";
import "./MedicalProducts.css";

function MedicalProducts() {
  const products = [
    {
      id: 1,
      name: "Digital Thermometer",
      price: "₹299",
      image: "/images/thermometer.png",
    },
    {
      id: 2,
      name: "Blood Pressure Monitor",
      price: "₹1,499",
      image: "/images/bp-monitor.png",
    },
    {
      id: 3,
      name: "First Aid Kit",
      price: "₹799",
      image: "/images/first-aid.png",
    },
    {
      id: 4,
      name: "Face Mask (Pack of 50)",
      price: "₹399",
      image: "/images/mask.png",
    },
  ];

  return (
    <div className="product-page">
      <h1 className="title">Medical Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h2 className="product-name">{product.name}</h2>
            <p className="price">{product.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedicalProducts;
