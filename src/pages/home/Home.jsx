import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

import Card from "../../components/card/Card";
import Box from "../../components/box/Box";
import CatigorySlayd from "../../components/catigorySlayd/CatigorySlayd";
import ArravelPhoto from "../../components/arravelPhote/ArravelPhoto";
import Garand from "../../components/garand/Garand";
import HeroSlayd from "../../components/heroSlayd/HeroSlayd";
import { IoPersonOutline, IoStarOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import ShowOpenModal from "../../components/showOpenModal/ShowOpenModal";

function Home({showOpenModal}) {
  return (
    <>

    {
      showOpenModal == true ? <ShowOpenModal/> : ""
    }
     

      <section className="hero-section">
        <div className="container">
          <HeroSlayd />
        </div>
      </section>

      <section className="today-section">
        <div className="container">
          <div className="card-title">
            <div className="total">
              <div className="kub"></div>
              <h3>Today’s</h3>
            </div>

            <div className="sales">
              <div className="flashSays">
                <div className="flash">
                  <h3>Flash Sales</h3>
                </div>

                <div className="clock">
                  <span>
                    <p>Days</p>
                    <h3>03</h3>
                  </span>
                  <h3>:</h3>
                  <span>
                    <p>Hours</p>
                    <h3>23</h3>
                  </span>
                  <h3>:</h3>
                  <span>
                    <p>Minutes</p>
                    <h3>19</h3>
                  </span>
                  <h3>:</h3>
                  <span>
                    <p>Seconds</p>
                    <h3>56</h3>
                  </span>
                </div>
              </div>

              <div className="nextBtn">
                <span>
                  <FaArrowLeft />
                </span>
                <span>
                  <FaArrowRight />
                </span>
              </div>
            </div>
          </div>

          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <button className="allProdactBtn">View All Products</button>
        </div>
      </section>

      <section className="catigories">
        <div className="container">
          <div className="total">
            <div className="kub"></div>
            <h3>Categories</h3>
          </div>
          <div className="sales">
            <div className="flashSays">
              <div className="flash">
                <h3>Browse By Category</h3>
              </div>
            </div>

            <div className="nextBtn">
              <span>
                <FaArrowLeft />
              </span>
              <span>
                <FaArrowRight />
              </span>
            </div>
          </div>

          <div className="boxs">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </div>
        </div>
      </section>

      <section className="catigories">
        <div className="container">
          <div className="total">
            <div className="kub"></div>
            <h3>Categories</h3>
          </div>
          <div className="sales">
            <div className="flashSays">
              <div className="flash">
                <h3>Browse By Category</h3>
              </div>
            </div>

            <div className="nextBtn">
              <button>View All</button>
            </div>
          </div>

          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      <section className="slayd-section">
        <div className="container">
          <CatigorySlayd />
        </div>
      </section>

      <section className="ourProdact">
        <div className="container">
          <div className="total">
            <div className="kub"></div>
            <h3>Explore Our Products</h3>
          </div>

          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <button className="allProdactBtn">View All Products</button>
        </div>
      </section>

      <section className="photo-section">
        <div className="container">
          <ArravelPhoto />
        </div>
      </section>

      <section className="garand-section">
        <div className="container">
          <div className="garands">
            <Garand />
            <Garand />
            <Garand />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
