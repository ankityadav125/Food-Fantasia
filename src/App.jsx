import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OurFood from "./components/OurFood";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };
  return (
    <>
      <BrowserRouter>
        <Header count={count} />
        <Routes>
          <Route path="/" element={<Home handleAdd={handleAdd} />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourfood" element={<OurFood />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
