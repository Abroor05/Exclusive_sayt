import React from 'react'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { Link } from 'react-router-dom'
import "./WishList.css"
import { FaRegTrashCan } from 'react-icons/fa6'
import { LuShoppingCart } from 'react-icons/lu'
import { baseUrl } from '../../services/baseUrl'

function WishListCard({item}) {
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
              <span className='seeSpan'>
                <FaRegTrashCan className='trash' />
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
            <span>(88)</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default WishListCard