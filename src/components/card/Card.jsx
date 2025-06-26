import React from 'react'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { MdOutlineRemoveRedEye } from 'react-icons/md'

function Card() {
  return (
    <>
    
    <div className="card">
        <div className="card-img">
            <img src="" alt="" />
            <FaRegHeart />
            <MdOutlineRemoveRedEye />
            <span>-40%</span>
        </div>

        <div className="card-info">
            <h4>HAVIT HV-G92 Gamepad</h4>
            <p>$120 <span>$160</span></p>
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

export default Card