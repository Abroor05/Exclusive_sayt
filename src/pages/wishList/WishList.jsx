import React from "react";
import "./WishList.css";
import WishListCard from "../../components/wishListCard/WishListCard";
import ForYouCard from "../../components/forYouCard/ForYouCard";

function WishList() {
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
              <WishListCard />
              <WishListCard />
              <WishListCard />
              <WishListCard />
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
              <ForYouCard />
              <ForYouCard />
              <ForYouCard />
              <ForYouCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WishList;
