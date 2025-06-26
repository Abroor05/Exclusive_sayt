import React from 'react'
import "./Footer.css"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { BiSolidSend } from 'react-icons/bi'

function Footer() {
  return (
    <>

      <footer>
        <div className="container">
          <div className="fot-top">
            <div className="fot1 foter">
              <h3>Exclusive</h3>
              <h4>Subscribe</h4>
              <p>Get 10% off your first order</p>
              <div className='sendEmail'>
                <input type="text" placeholder='Enter your email' />
                <BiSolidSend className='send' />
              </div>
            </div>

            <div className="fot2 foter">
              <h3>Support</h3>
              <h5>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</h5>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>

            <div className="fot3 foter">
              <h3>Account</h3>
              <ul>
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </div>

            <div className="fot4 foter">
              <h3>Quick Link</h3>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="fot5 foter">
              <h3>Download App</h3>
              <p>Save $3 with App New User Only</p>

              <div className="imgs">
                <img src="/imgs/apps.png" alt="" />
              </div>

              <span>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </span>
            </div>
          </div>

          <div className="fot-bottom">
            <p>Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer