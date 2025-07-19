import React, { use, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Aboute from "./pages/aboute/Aboute";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Erorr from "./pages/error/Erorr";
import MyAccount from "./pages/myAccount/MyAccount";
import OneProdact from "./pages/oneProdact/OneProdact";
import { idID } from "@mui/material/locale";
import WishListCard from "./components/wishListCard/WishListCard";
import WishList from "./pages/wishList/WishList";
import { ToastContainer } from "react-toastify";
import { getToken } from "./services/token";
import Search from "./pages/search/Search";
import AddToCardModal from "./components/addToCardModal/AddToCardModal";
import { getData } from "./services/app";

function App() {
  const [showOpenModal, setShowOpenModal] = useState(false);
  const [count, setCount] = useState(0);
  const [userToken, setUserToken] = useState(getToken);
  const [searchItem, setSearchItem] = useState("");
  const [addModal, setAddModal] = useState(false);
  const [filterSearch, setFilterSearch] = useState();
  const [data, setData] = useState([]);

  const filterData = (text) => {
    const filtered = data.filter((item) => {
      return item?.title?.toLowerCase().includes(text.toLowerCase());
    });

    setFilterSearch(filtered);
  };

  useEffect(() => {
    getData().then((data) => {
      setData(data);
      setFilterSearch(data);
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <ToastContainer theme="dark" />
        <Navbar
          filterData={filterData}
          setShowOpenModal={setShowOpenModal}
          userToken={userToken}
          setSearchItem={setSearchItem}
          searchItem={searchItem}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                addModal={addModal}
                count={count}
                setAddModal={setAddModal}
                showOpenModal={showOpenModal}
                data={data}
                setData={setData}
              />
            }
          />
          <Route
            path="/contact"
            element={<Contact showOpenModal={showOpenModal} />}
          />
          <Route
            path="/aboute"
            element={<Aboute showOpenModal={showOpenModal} />}
          />
          <Route
            path="/signUp"
            element={<SignUp showOpenModal={showOpenModal} />}
          />
          <Route
            path="/login"
            element={
              <Login
                setUserToken={setUserToken}
                showOpenModal={showOpenModal}
              />
            }
          />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route
            path="/oneprodact/:id"
            element={<OneProdact setCount={setCount} count={count} />}
          />
          <Route path="/wishlist" element={<WishList />} />
          <Route
            path="/search"
            element={
              <Search
                setSearchItem={setSearchItem}
                searchItem={searchItem}
                filterSearch={filterSearch}
              />
            }
          />
          <Route path="*" element={<Erorr />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
