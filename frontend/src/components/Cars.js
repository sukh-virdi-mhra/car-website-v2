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

  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

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
              {car.price ? <p>{formatter.format(car.price)}</p> : <p>POA</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cars;
