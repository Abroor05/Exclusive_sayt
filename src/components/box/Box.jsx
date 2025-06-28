import React from 'react'
import { MdPhoneAndroid } from 'react-icons/md'
import "./Box.css"

function Box() {
  return (
    <>
        <div className="box">
            <div className="all">
                <div className="box-img">
                {/* <img src="" alt="" /> */}
               <h2> <MdPhoneAndroid /></h2>
            </div>

            <div className="box-info">
                <h4>Phones</h4>
            </div>
            </div>
        </div>
    </>
  )
}

export default Box