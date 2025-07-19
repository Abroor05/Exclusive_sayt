import React from "react";
import "./CategoryBox.css"

function CategoryBox({item}) {
  return (
    <>
      <div className="box-category">
        <div className="all">
          <div className="box-category-img">
            <img src={item?.image} alt="" />
            {/* <h2> <MdPhoneAndroid /></h2> */}
          </div>

          <div className="box-category-info">
            <h4>{item?.title}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryBox;
