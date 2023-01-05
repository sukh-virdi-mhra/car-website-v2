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
  const priceFormatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const mileageFormatter = new Intl.NumberFormat("en-GB", {
    useGrouping: true,
  });

  return (
    <div>
      <br />
      <h2>{car.name}</h2>
      <img src={car.image} alt={car.name} style={{ width: "100%" }} />
      <h3>Year</h3>
      <p>{car.year}</p>
      <h3>Mileage</h3>
      <p>{mileageFormatter.format(car.mileage)}</p>
      <h3>Price</h3>
      <p>{car.price ? priceFormatter.format(car.price) : <span>POA</span>}</p>
      <h3>Overview</h3>
      <p>{car.overview}</p>
      <h3>Specifications</h3>
      <ul className="inside">
        {car.specifications.map((specification) => (
          <li key={specification}>{specification}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cars;
