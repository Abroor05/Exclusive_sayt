import React from "react";
import { Link } from "react-router-dom";
import "./MyAccount.css";

function MyAccount() {
  return (
    <>
      <section>
        <div className="container">
          <div className="accountTitle">
            <Link to={"/"}>Home</Link>
            <span>/</span>
            <Link>My Account</Link>
          </div>

          <div className="accounts">
            <div className="account">
              <div className="accountLeft">
                <div className="menus">
                  <h3>Manage My Account</h3>
                  <span>
                    <Link>My Profile</Link>
                    <Link>Address Book</Link>
                    <Link>My Payment Options</Link>
                  </span>
                </div>

                <div className="menus">
                  <h3>Manage My Account</h3>
                  <span>
                    <Link>My Returns</Link>
                    <Link>My Cancellations</Link>
                  </span>
                </div>

                <div className="menus">
                    <h3>My WishList</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyAccount;
