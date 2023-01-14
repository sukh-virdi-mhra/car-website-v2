import React, { useEffect, useState } from "react";
import "../styles/styles.css";

function Cars(props) {
  const [localData, setLocalData] = useState([{}]);
  const [date, setDate] = useState(new Date());
  console.log(props);

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
    props.setSelectedCar(car);
    props.navigate(`/stock/${car.name}/${car.id}`);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    setDate(new Date());
  }

  return (
    <div className="cars">
      <br />{" "}
      <div className="homepage__content">
        <h2 className="homepage__header">
          Current Inventory as of{" "}
          <span>
            {`(${date.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })})`}
          </span>
        </h2>
        <p className="homepage__description">
          This page contains our current supercars for sale where you can view
          all of the vehicles available in our showroom. From sleek sports cars
          to powerful luxury vehicles, we have a wide selection of supercars
          that are sure to satisfy any car enthusiast. Take some time to browse
          through our inventory and see all of the incredible options we have
          available. Whether you're looking for a car to turn heads on the open
          road or one to add to your collection, we have something for everyone.
          So come on in and take a look at our impressive selection of supercars
          - we're sure you'll find something you love!
          <br />
          <br />
        </p>
        {typeof localData.cars === "undefined" ? (
          <p>Loading...</p>
        ) : (
          <div className="grid">
            {localData.cars.map((car, i) => (
              <div
                key={i}
                className="card"
                onClick={() => handleCardClick(car)}
              >
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
      </div>
    </div>
  );
}

export default Cars;
