import React from "react";
import { Link, NavLink } from "react-router-dom";
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
                    <NavLink>My Profile</NavLink>
                    <NavLink>Address Book</NavLink>
                    <NavLink>My Payment Options</NavLink>
                  </span>
                </div>

                <div className="menus">
                  <h3>Manage My Account</h3>
                  <span>
                    <NavLink>My Returns</NavLink>
                    <NavLink>My Cancellations</NavLink>
                  </span>
                </div>

                <div className="menus">
                  <h3>My WishList</h3>
                </div>
              </div>

              <div className="accountRight">
                <div className="profils">
                  <div className="topProfils">
                    <h3>Edit Your Profile</h3>
                    <div className="titleInputs">
                      <span>
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="Md" />
                      </span>
                      <span>
                        <label htmlFor="">Last Name </label>
                        <input type="text" placeholder="Rimel" />
                      </span>
                      <span>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="rimel1111@gmail.com" />
                      </span>
                      <span>
                        <label htmlFor="">Address</label>
                        <input
                          type="text"
                          placeholder="Kingston, 5236, United State"
                        />
                      </span>
                    </div>

                    <div className="bottomProfiles">
                      <h4>Password Changes</h4>

                      <div className="bottomInputs">
                        <input type="text" placeholder="Current Passwod" />
                        <input type="text" placeholder="New Passwod" />
                        <input type="text" placeholder="Confirm New Passwod" />
                      </div>
                    </div>

                    <div className="profilBtn">
                        <button className="profilBtn1">Cancel</button>
                        <button className="profilBtn2">Save Changes</button>
                    </div>
                  </div>
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
