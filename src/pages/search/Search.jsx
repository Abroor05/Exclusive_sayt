import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { getData } from "../../services/app";

function Search({ setSearchItem, searchItem }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(setData);
  });

  return (
    <>
      <div className="container">
        <div className="cards">
          {data?.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
