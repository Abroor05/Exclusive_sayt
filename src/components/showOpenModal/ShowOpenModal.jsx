import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { IoPersonOutline, IoStarOutline } from 'react-icons/io5'
import { LuShoppingBag } from 'react-icons/lu'
import "./ShowOpenModal.css"
import { Link } from 'react-router-dom'

function ShowOpenModal({setShowOpenModal}) {
  return (
    <>
    
     <div className="modals">
        <div className="container">
          <div className="modal">
            <span>
              <h4>
                <IoPersonOutline />
              </h4>
              <Link to={"/myaccount"} onClick={()=>{
                setShowOpenModal(false)
              }}>Manage My Account </Link>
            </span>
            <span>
              <h4>
                <LuShoppingBag />
              </h4>
              <Link>My Order </Link>
            </span>
            <span>
              <h4>
                <IoIosCloseCircleOutline />
              </h4>
              <Link>My Cancellations </Link>
            </span>
            <span>
              <h4>
                <IoStarOutline />
              </h4>
              <Link>My Reviews </Link>
            </span>
            <span>
              <h4>
                <BiLogOut />
              </h4>
              <Link>Logoute </Link>
            </span>
          </div>
        </div>
      </div>

    </>
  )
}

export default ShowOpenModal