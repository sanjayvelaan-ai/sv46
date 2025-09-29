import React, { useState, useEffect } from "react";

function ci() {
  const [color, setColor] = useState("red");
  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) => (prev === "red" ? "green" : "red"));
    }, 1000);

    return () => ci(interval);
  }, []);

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        background: color,
        margin: "20px auto",
      }}
    ></div>
  );
}

export default ci;