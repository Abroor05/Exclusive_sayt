import React from "react";
import "./ArravelPhoto.css";

function ArravelPhoto() {
  return (
    <>
     
          <div className="adds">
            <div className="add-left">
              <div className="playStation">
                <div className="play-info">
                  <h3>PlayStation 5</h3>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <button className="shopBtn">Shop Now</button>
                </div>
              </div>
            </div>

            <div className="add-right">
              <div className="top">
                <div className="women">
                  <div className="women-info">
                    <h3>Women’s Collections</h3>
                    <p>
                      Featured woman collections that give you another vibe.
                    </p>
                    <button className="shopBtn">Shop Now</button>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="spekers">
                  <div className="speker">
                    <div className="speker-info">
                      <h3>Speakers</h3>
                      <p>Amazon wireless speakers</p>
                      <button className="shopBtn">Shop Now</button>
                    </div>
                  </div>
                  <div className="gucci">
                    <div className="gucci-info">
                      <h3>Perfume</h3>
                      <p>GUCCI INTENSE OUD EDP</p>
                      <button className="shopBtn">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
    </>
  );
}

export default ArravelPhoto;
