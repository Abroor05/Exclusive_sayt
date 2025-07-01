import React from "react";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Contact.css"

function Contact() {
  return (
    <>
      <section>
        <div className="container">
          <div className="contactTitle">
            <Link to={"/"}>Home</Link> / <Link>Cantact</Link>
          </div>

          <div className="supports">
            <div className="support-left">
              <div className="support">
                <div className="call">
                  <span>
                    <IoCall />
                  </span>
                  <h4>Call To Us</h4>
                </div>

                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
              </div>
              <div className="support">
                <div className="call">
                  <span>
                    <MdOutlineMailOutline />
                  </span>
                  <h4>Write To US</h4>
                </div>

                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>

            <div className="support-right">
              <div className="supInputs">
                <input type="text" placeholder="Your Name *" />
                <input type="email" placeholder="Your Email *" />
                <input type="text" placeholder="Your Phone *" />
              </div>

              <textarea  placeholder="Your Massage" name="" id=""></textarea>

              <button className="sendBtn">Send Massage</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
