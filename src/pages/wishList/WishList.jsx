import React, { useEffect, useState } from "react";
import "./WishList.css";
import WishListCard from "../../components/wishListCard/WishListCard";
import ForYouCard from "../../components/forYouCard/ForYouCard";
import { getData } from "../../services/app";

function WishList() {

  const [wishData, setWishData] = useState([])


  useEffect(()=>{
    getData().then(setWishData)
  }, [])

  return (
    <>
      <section>
        <div className="container">
          <div className="wishlistTitle">
            <div className="tops">
              <h4>Wishlist (4)</h4>
              <button>Move All To Bag</button>
            </div>

            <div className="wishListCards">
               {
                wishData?.slice(0, 4).map((item)=>{
                  return <WishListCard item={item} />
                })
              }
              
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="justForYou">
            <div className="tops">
              <h4>Just For You</h4>
              <button>See All</button>
            </div>

            <div className="justForYouCards">
              {
                wishData?.slice(0, 4).map((item)=>{
                  return <ForYouCard item={item} />
                })
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WishList;
