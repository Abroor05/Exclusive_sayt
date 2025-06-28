import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { TextField } from "@mui/material";

function Navbar() {
  return (
    <>
      <nav className="top-nav">
        <div className="container">
          <div className="nav-top">
            <span className="nav-shop">
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <Link>ShopNow</Link>
            </span>

            <span className="lenguage">
              <select className="til" id="language" name="language" defaultValue="English">
                <option value="es">Español (Spanish)</option>
                <option value="fr">Français (French)</option>
                <option value="de">Deutsch (German)</option>
                <option value="it">Italiano (Italian)</option>
                <option value="ru">Русский (Russian)</option>
                <option value="zh">中文 (Chinese)</option>
                <option value="ja">日本語 (Japanese)</option>
                <option value="ar">العربية (Arabic)</option>
                <option value="uz">O‘zbekcha (Uzbek)</option>
              </select>
            </span>
          </div>
        </div>
      </nav>

      <nav className="bottom-nav">
        <div className="container">
          <div className="navBar">
            <div className="logo">
              <Link to={"/"}>
                <h2>Exclusive</h2>
              </Link>
            </div>

            <ul className="links">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              <NavLink to={"/aboute"}>About</NavLink>
              <NavLink to={"/login"}>Sign Up</NavLink>
            </ul>

            <div className="elements">
              <span className="search">
                <TextField
                  id="standard-basic"
                  label="What are you "
                  variant="standard"
                  className="SearchInput"
                />
                <CiSearch className="Lupa" />
              </span>

              <span>
                <FaRegHeart />
                <LuShoppingCart />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
