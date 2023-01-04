import React, { useEffect, useState } from "react";
import "../styles/styles.css";

function Cars(props) {
  const [localData, setLocalData] = useState([{}]);
  const [selectedCar, setSelectedCar] = useState(null);

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
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const handleCardClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <div>
      <br />
      {typeof localData.cars === "undefined" ? (
        <p>Loading...</p>
      ) : (
        <div className="grid">
          {localData.cars.map((car, i) => (
            <div key={i} className="card" onClick={() => handleCardClick(car)}>
              <img
                src={car.image}
                alt={car.name}
                style={{ width: "100%", height: "200px" }}
              />
              <h3>{car.name}</h3>
              {car.price ? <p>{formatter.format(car.price)}</p> : <p>POA</p>}
            </div>
          ))}
        </div>
      )}
      {selectedCar ? <CarDetails car={selectedCar} /> : null}
    </div>
  );
}
function CarDetails(props) {
  const { car } = props;
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div>
      <br />
      <h2>{car.name}</h2>
      <img src={car.image} alt={car.name} style={{ width: "100%" }} />
      <p>{car.summary}</p>
      <p>{car.description}</p>
      <p>Price: {car.price ? formatter.format(car.price) : <span>POA</span>}</p>
      <p>Mileage: {car.mileage}</p>
      <p>Year: {car.year}</p>
    </div>
  );
}
export default Cars;
