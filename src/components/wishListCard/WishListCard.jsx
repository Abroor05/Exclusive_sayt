import React from 'react'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { Link } from 'react-router-dom'
import "./WishList.css"
import { FaRegTrashCan } from 'react-icons/fa6'
import { LuShoppingCart } from 'react-icons/lu'

function WishListCard() {
  return (
    <>
    
        <div className="card">
        <div className="card-img">
          <div className="centrImg">
            <img src="/imgs/card1.png" alt="" />
            <div className="addToCard">
              <Link to={"/oneprodact"} className="add">
                <LuShoppingCart /> Add To Cart 
              </Link>
            </div>
          </div>
          <div className="sales">
            <div className="seeLike">
              <span className='seeSpan'>
                <FaRegTrashCan className='trash' />
              </span>
            </div>
            <span className="sale">-40%</span>
          </div>
        </div>

        <div className="card-info">
          <h4>HAVIT HV-G92 Gamepad</h4>
          <p>
            $120{" "}
            <span>
              <del>$160</del>
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

    </>
  )
}

export default WishListCard