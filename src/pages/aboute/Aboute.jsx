import React from "react";
import { Link } from "react-router-dom";
import "./Aboute.css";
import { CiShop } from "react-icons/ci";
import { BsCoin } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { TbMoneybag } from "react-icons/tb";
import { LuTwitter } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Garand from "../../components/garand/Garand";

function Aboute() {
  return (
    <>
      <section className="abouteSection">
        <div className="container">
          <div className="aboutTitle">
            <Link to={"/"}>Home</Link>
            <span>/</span>
            <Link>Aboute</Link>
          </div>

          <div className="aboteHero">
            <div className="abouteHero-info">
              <h3>Our Story</h3>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <p>
                {" "}
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            <div className="abouteHero-img">
              <img src="/imgs/hero.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="followers">
            <div className="follow">
              <div className="follow-img">
                <span>
                  <CiShop />
                </span>{" "}
              </div>

              <div className="follow-info">
                <h3>10.5k </h3>
                <p>Sallers active our site</p>
              </div>
            </div>
            <div className="follow">
              <div className="follow-img">
                <span>
                  <BsCoin />
                </span>{" "}
              </div>

              <div className="follow-info">
                <h3>10.5k </h3>
                <p>Sallers active our site</p>
              </div>
            </div>
            <div className="follow">
              <div className="follow-img">
                <span>
                  <FiShoppingBag />{" "}
                </span>{" "}
              </div>

              <div className="follow-info">
                <h3>10.5k </h3>
                <p>Sallers active our site</p>
              </div>
            </div>
            <div className="follow">
              <div className="follow-img">
                <span>
                  <TbMoneybag />
                </span>{" "}
              </div>

              <div className="follow-info">
                <h3>10.5k </h3>
                <p>Sallers active our site</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xodimlar">
            <div className="xodim">
              <div className="xodimImgs">
                <span className="xodimImg">
                  <img src="/public/imgs/tom.png" alt="" />
                </span>
              </div>
              <div className="xodimInfo">
                <h3>Tom Cruise</h3>
                <p>Founder & Chairman</p>
                <span>
                  <LuTwitter className="icons" />
                  <IoLogoInstagram className="icons" />
                  <FaLinkedinIn className="icons" />
                </span>
              </div>
            </div>

            <div className="xodim">
              <div className="xodimImgs">
                <span className="xodimImg">
                  <img src="/imgs/emma.png" alt="" />
                </span>
              </div>
              <div className="xodimInfo">
                <h3>Tom Cruise</h3>
                <p>Founder & Chairman</p>
                <span>
                  <LuTwitter className="icons" />
                  <IoLogoInstagram className="icons" />
                  <FaLinkedinIn className="icons" />
                </span>
              </div>
            </div>

            <div className="xodim">
              <div className="xodimImgs">
                <span className="xodimImg">
                  <img src="/imgs/smit.png" alt="" />
                </span>
              </div>
              <div className="xodimInfo">
                <h3>Tom Cruise</h3>
                <p>Founder & Chairman</p>
                <span>
                  <LuTwitter className="icons" />
                  <IoLogoInstagram className="icons" />
                  <FaLinkedinIn className="icons" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
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

export default Aboute;
