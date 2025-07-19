import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { getData } from "../../services/app";

function Search({ filterSearch}) {


  return (
    <>
      <div className="container">
        <div className="cards">
          {filterSearch?.map((item) => {
            return <Card item={item} />;
          })} 
        </div>
      </div>
    </>
  );
}

export default Search;
