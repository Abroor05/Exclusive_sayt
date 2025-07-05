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
import MyAccount from "./pages/myAccount/MyAccount";
import OneProdact from "./pages/oneProdact/OneProdact";
import { idID } from "@mui/material/locale";
import WishListCard from "./components/wishListCard/WishListCard";
import WishList from "./pages/wishList/WishList";

function App() {
  const [showOpenModal, setShowOpenModal] = useState(false);
  const [count, setCount] = useState(0);

  const [littleData, setLittleData] = useState([
    {
      id: 0,
      imgs: [
        "https://cdn.myshoptet.com/usr/www.novadielna.sk/user/shop/big/258_fotoaparat-fujifilm-instax-mini-12-ruzovy.jpg?658eab4c",
        "https://cdn.mediapark.uz/imgs/f1c9f590-bc07-4ce1-9a8f-f8b9dd4bcce5_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-2.webp",
        "https://images.uzum.uz/cqmvit4qvsse8leucgn0/original.jpg",
        "https://static.sello.uz/unsafe/x530/https://static.sello.uz/fm/20220418/7c2e41a6-22d1-4baa-94c3-183ec39e93dc.jpg",
      ],
    },
     {
      id: 1,
      imgs: [
        "https://cdn.myshoptet.com/usr/www.novadielna.sk/user/shop/big/258_fotoaparat-fujifilm-instax-mini-12-ruzovy.jpg?658eab4c",
        "https://cdn.mediapark.uz/imgs/f1c9f590-bc07-4ce1-9a8f-f8b9dd4bcce5_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-2.webp",
        "https://images.uzum.uz/cqmvit4qvsse8leucgn0/original.jpg",
        "https://static.sello.uz/unsafe/x530/https://static.sello.uz/fm/20220418/7c2e41a6-22d1-4baa-94c3-183ec39e93dc.jpg",
      ],
    },
     {
      id: 2,
      imgs: [
        "https://cdn.myshoptet.com/usr/www.novadielna.sk/user/shop/big/258_fotoaparat-fujifilm-instax-mini-12-ruzovy.jpg?658eab4c",
        "https://cdn.mediapark.uz/imgs/f1c9f590-bc07-4ce1-9a8f-f8b9dd4bcce5_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-2.webp",
        "https://images.uzum.uz/cqmvit4qvsse8leucgn0/original.jpg",
        "https://static.sello.uz/unsafe/x530/https://static.sello.uz/fm/20220418/7c2e41a6-22d1-4baa-94c3-183ec39e93dc.jpg",
      ],
    },
     {
      id: 3,
      imgs: [
        "https://cdn.myshoptet.com/usr/www.novadielna.sk/user/shop/big/258_fotoaparat-fujifilm-instax-mini-12-ruzovy.jpg?658eab4c",
        "https://cdn.mediapark.uz/imgs/f1c9f590-bc07-4ce1-9a8f-f8b9dd4bcce5_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-2.webp",
        "https://images.uzum.uz/cqmvit4qvsse8leucgn0/original.jpg",
        "https://static.sello.uz/unsafe/x530/https://static.sello.uz/fm/20220418/7c2e41a6-22d1-4baa-94c3-183ec39e93dc.jpg",
      ],
    },
     {
      id: 4,
      imgs: [
        "https://cdn.myshoptet.com/usr/www.novadielna.sk/user/shop/big/258_fotoaparat-fujifilm-instax-mini-12-ruzovy.jpg?658eab4c",
        "https://cdn.mediapark.uz/imgs/f1c9f590-bc07-4ce1-9a8f-f8b9dd4bcce5_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-2.webp",
        "https://images.uzum.uz/cqmvit4qvsse8leucgn0/original.jpg",
        "https://static.sello.uz/unsafe/x530/https://static.sello.uz/fm/20220418/7c2e41a6-22d1-4baa-94c3-183ec39e93dc.jpg",
      ],
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Navbar setShowOpenModal={setShowOpenModal} />

        <Routes>
          <Route path="/" element={<Home showOpenModal={showOpenModal} />} />
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
            element={<Login showOpenModal={showOpenModal} />}
          />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route
            path="/oneprodact"
            element={<OneProdact setCount={setCount} count={count} littleData={littleData} />}
          />


          <Route path="/wishlist" element={<WishList/>} />

          <Route path="*" element={<Erorr />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
