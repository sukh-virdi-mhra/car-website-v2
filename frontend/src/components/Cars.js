import React, { useEffect, useState } from "react";
import "../styles/cars.css";

function Cars(props) {
  const [localData, setLocalData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setLocalData(data);
      });
  }, []);

  return (
    <div>
      <h1>Favourite Cars</h1>
      {typeof localData.cars === "undefined" ? (
        <p>Loading...</p>
      ) : (
        <div className="grid">
          {localData.cars.map((car, i) => (
            <div key={i} className="card">
              <h2>{car.name}</h2>
              <p> {car.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cars;
