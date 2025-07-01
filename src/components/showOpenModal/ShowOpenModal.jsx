import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { IoPersonOutline, IoStarOutline } from 'react-icons/io5'
import { LuShoppingBag } from 'react-icons/lu'
import "./ShowOpenModal.css"

function ShowOpenModal() {
  return (
    <>
    
     <div className="modals">
        <div className="container">
          <div className="modal">
            <span>
              <h4>
                <IoPersonOutline />
              </h4>
              <p>Manage My Account </p>
            </span>
            <span>
              <h4>
                <LuShoppingBag />
              </h4>
              <p>My Order </p>
            </span>
            <span>
              <h4>
                <IoIosCloseCircleOutline />
              </h4>
              <p>My Cancellations </p>
            </span>
            <span>
              <h4>
                <IoStarOutline />
              </h4>
              <p>My Reviews </p>
            </span>
            <span>
              <h4>
                <BiLogOut />
              </h4>
              <p>Logoute </p>
            </span>
          </div>
        </div>
      </div>

    </>
  )
}

export default ShowOpenModal