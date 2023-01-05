import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Cars from "./components/Cars";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
      <Footer />
    </div>
  );
}
