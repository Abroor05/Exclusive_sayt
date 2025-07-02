import React from "react";
import "./Error.css"
import { Link } from "react-router-dom";

function Erorr() {
  return (
    <>
      <section className="errorPage">
        <div className="container">

        <div className="errorTitle">
          <span><Link to={"/"}>Home</Link></span>
          <span>/</span>
          <Link>404 Error</Link>
        </div>

          <h1>404 Not Found</h1>
          <p>Your visited page not found. You may go home page.</p>
          <Link to={"/"}><button>Back to home page</button></Link>
        </div>
      </section>
    </>
  );
}

export default Erorr;
