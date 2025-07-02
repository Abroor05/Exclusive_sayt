import React from "react";
import { Link } from "react-router-dom";
import "./Aboute.css"

function Aboute() {
  return (
    <>
      <section className="abouteSection">
        <div className="container">
          <div className="aboutTitle">
            <Link>Home</Link>
            <span>/</span>
            <Link>Aboute</Link>
          </div>

          <div className="aboteHero">
            <div className="abouteHero-info">
              <h3>Our Story</h3>
              <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
              <p> Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
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
                  <img src="" alt="" />
                </div>

                <div className="follow-info">
                  
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboute;
