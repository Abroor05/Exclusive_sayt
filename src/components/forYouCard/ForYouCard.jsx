import React from "react";
import { FaStar } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import { baseUrl } from "../../services/baseUrl";

function ForYouCard({ item }) {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <div className="centrImg">
            <img src={`${baseUrl}${item?.pictures[0]}`} alt="" />
            <div className="addToCard">
              <Link to={"/oneprodact"} className="add">
                <LuShoppingCart /> Add To Cart
              </Link>
            </div>
          </div>
          <div className="sales">
            <div className="seeLike">
              <span>
                <MdOutlineRemoveRedEye className="see" />
              </span>
            </div>
            <span className="sale">-40%</span>
          </div>
        </div>

        <div className="card-info">
          <h4>{item.title}</h4>
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
            <span>({item?.quantity})</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForYouCard;
