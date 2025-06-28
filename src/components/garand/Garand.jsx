import React from "react";
import "./Garand.css";
function Garand() {
  return (
    <>
      <div className="garand">
        <div className="garand-img">
          <span>
            <img src="/imgs/garand1.svg" alt="" />
          </span>
        </div>

        <div className="garand-info">
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
      </div>    
    </>
  );
}

export default Garand;
