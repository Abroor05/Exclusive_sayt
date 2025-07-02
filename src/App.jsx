import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Aboute from "./pages/aboute/Aboute";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Erorr from "./pages/error/Erorr";

function App() {


  const [showOpenModal, setShowOpenModal] = useState(false)

  


  return (
    <>
      <BrowserRouter>
        <Navbar setShowOpenModal = {setShowOpenModal}/>

        <Routes>
          <Route path="/" element={<Home  showOpenModal={showOpenModal}/>} />
          <Route path="/contact" element={<Contact showOpenModal={showOpenModal} />} />
          <Route path="/aboute" element={<Aboute showOpenModal={showOpenModal} />} />
          <Route path="/signUp" element={<SignUp showOpenModal={showOpenModal}/>} />
          <Route path="/login" element={<Login showOpenModal={showOpenModal}/>} />
          <Route path="*" element={<Erorr/>} />
        </Routes>


        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
