import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import "./Card.css";
import { Link } from "react-router-dom";
import { baseUrl } from "../../services/baseUrl";

function Card({ item}) {
  return (
    <>
      <Link to={`/oneprodact/${item?.id}`} className="allCard">
        {" "}
        <div className="card">
          <div className="card-img">
            <div className="centrImg">
              <img src={`${baseUrl}/${item?.pictures[0]}`} alt="" />
              <div className="addToCard">
                <div className="add">Add To Cart</div>
              </div>
            </div>
            <div className="sales">
              <div className="seeLike">
                <span className="seeSpan">
                  <FaRegHeart className="like" />
                </span>
                <div to={"/oneprodact"} className="seeSpan">
                  <MdOutlineRemoveRedEye className="see" />
                </div>
              </div>
              <span className="sale">-40%</span>
            </div>
          </div>

          <div className="card-info">
            <h4>{item?.title}</h4>
            <p>
              {item?.discount_price}{" "}
              <span>
                <del>{item?.price}</del>
              </span>
            </p>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span>(88)</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
