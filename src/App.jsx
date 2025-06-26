import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Aboute from "./pages/aboute/Aboute";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboute" element={<Aboute />} />
          <Route path="/signIn" element={<Login />} />
        </Routes>

      <Card />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
