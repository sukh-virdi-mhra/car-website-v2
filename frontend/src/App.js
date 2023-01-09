import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Cars from "./components/Cars";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import CarDetails from "./components/CarDetails";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [selectedCar, setSelectedCar] = useState("");
  let navigate = useNavigate();
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          path="/cars-for-sale"
          element={
            <Cars
              navigate={navigate}
              setSelectedCar={setSelectedCar}
              selectedCar={selectedCar}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/stock/:carname"
          element={
            <CarDetails
              selectedCar={selectedCar}
              setSelectedCar={setSelectedCar}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
