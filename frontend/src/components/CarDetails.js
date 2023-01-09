import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/styles.css";

export default function CarDetails(props) {
  let { carname } = useParams();
  const [returnedData, setReturnedData] = useState(false);

  function searchDatabase() {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        data.cars.forEach((element) => {
          if (element.name == carname) {
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
      <div>
        <br />
        <h2 className="homepage__header">{props.selectedCar.name}</h2>
        <img
          src={props.selectedCar.image}
          alt={props.selectedCar.name}
          style={{ width: "100%" }}
        />
        <h3>Year</h3>
        <p>{props.selectedCar.year}</p>
        <h3>Mileage</h3>
        <p>{mileageFormatter.format(props.selectedCar.mileage)}</p>
        <h3>Price</h3>
        <p>
          {props.selectedCar.price ? (
            priceFormatter.format(props.selectedCar.price)
          ) : (
            <span>POA</span>
          )}
        </p>
        <h3>Overview</h3>
        <p>{props.selectedCar.overview}</p>
        <h3>Specifications</h3>
        <ul className="inside">
          {props.selectedCar.specifications.map((specification) => (
            <li key={specification}>{specification}</li>
          ))}
        </ul>
      </div>
    );
  }
}
