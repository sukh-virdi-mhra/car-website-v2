import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/styles.css";

export default function CarDetails(props) {
  let { id } = useParams();
  const [returnedData, setReturnedData] = useState(false);

  function searchDatabase() {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        data.cars.forEach((element) => {
          if (element.id === +id) {
            props.setSelectedCar(element);
            return element;
          }
        });
      })
      .then(() => {
        setReturnedData(true);
      });
  }

  const priceFormatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const mileageFormatter = new Intl.NumberFormat("en-GB", {
    useGrouping: true,
  });

  if (!returnedData) {
    searchDatabase();
  } else {
    return (
      <div className="car__details">
        <br />
        <div className="cardetails__content">
          <h2 className="cardetails__header">{props.selectedCar.name}</h2>
          <br />
          <div
            className="car-image-container"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={props.selectedCar.image}
              alt={props.selectedCar.name}
              className="center-image"
            />
            <div className="cardetails__content">
              <h3>Mileage</h3>
              <p>{mileageFormatter.format(props.selectedCar.mileage)}</p>
              <h3>Year</h3>
              <p>{props.selectedCar.year}</p>
              <h3>Price</h3>
              <p>
                {props.selectedCar.price ? (
                  priceFormatter.format(props.selectedCar.price)
                ) : (
                  <span>POA</span>
                )}
              </p>
            </div>
          </div>
          <h3>Overview</h3>
          <p>{props.selectedCar.overview}</p>
          <h3 className="no-margin">Specifications</h3>

          <div
            className="specification-container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <ul className="inside" style={{ width: "50%" }}>
              {props.selectedCar.specifications
                .slice(0, props.selectedCar.specifications.length / 2)
                .map((specification) => (
                  <li key={specification}>{specification}</li>
                ))}
            </ul>
            <ul className="inside" style={{ width: "50%" }}>
              {props.selectedCar.specifications
                .slice(
                  Math.ceil(props.selectedCar.specifications.length / 2),
                  props.selectedCar.specifications.length
                )
                .map((specification) => (
                  <li key={specification}>{specification}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
