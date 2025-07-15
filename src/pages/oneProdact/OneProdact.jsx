import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./OneProdact.css";
import { FaStar } from "react-icons/fa";
import { CiHeart, CiStar } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import Card from "../../components/card/Card";
import { getData, getDataId, oneProdactData } from "../../services/app";
import { baseUrl } from "../../services/baseUrl";

function OneProdact({ setCount, count, littleData, data }) {
  const { id } = useParams();
  const [prodactId, setProdactId] = useState(null);
  const [mainImg, setMainImg] = useState(null);

  useEffect(() => {
    oneProdactData(id).then((data) => {
      setProdactId(data);
      setMainImg(data?.pictures[0].file);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [id]);

  const [dataId, setDataId] = useState([]);

  useEffect(() => {
    getData().then(setDataId);
  }, []);

  return (
    <>
      <section className="oneProdactSection">
        <div className="container">
          <div className="oneProdactTitle">
            <Link to={"/myaccount"}>Account</Link>
            <h4>/</h4>
            <Link>Gaming</Link>
            <h4>/</h4>
            <Link>Havic HV G-92 Gamepad</Link>
          </div>

          <div className="oneProducts">
            <div className="oneProdactLeft">
              <div className="littleImgs">
                {prodactId?.pictures?.map((item) => {
                  return (
                    <div className="littleImg">
                      <img
                        onClick={() => {
                          setMainImg(item?.file);
                        }}
                        src={`${baseUrl}${item?.file}`}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>

              <div className="bigImg">
                <div className="biger">
                  <img src={`${baseUrl}${mainImg}`} alt="" />
                </div>
              </div>
            </div>

            <div className="oneProdactRight">
              <h3>{prodactId?.title}</h3>
              <div className="baho">
                <span>
                  <FaStar className="gold" />
                  <FaStar className="gold" />
                  <FaStar className="gold" />
                  <FaStar className="gold" />
                  <FaStar className="white" />
                </span>

                <div className="stoks">
                  <p>(150 Reviews)</p>
                  <p>|</p>
                  <p className="inStok">In Stock</p>
                </div>
              </div>

              <h3 className="price">{prodactId?.price}</h3>

              <p className="desc">{prodactId?.description}</p>

              <div className="colors">
                <h3>Colors:</h3>
                <span>
                  <div className="div1"></div>
                  <div className="div2"></div>
                </span>
              </div>

              <div className="buys">
                  <div className="counts">
                    <div
                      onClick={() => {
                        if (count > 0) {
                          setCount(count - 1);
                        }
                      }}
                      className="minus"
                    >
                      -
                    </div>
                    <div className="count">{count}</div>
                    <div
                      onClick={() => {
                        setCount(count + 1);
                      }}
                      className="plas"
                    >
                      +
                    </div>
                  </div>

                <div className="buyBtn">Buy Now</div>

                <div className="heard">
                  <CiHeart />
                </div>
              </div>

              <div className="supportes">
                <div className="supporte">
                  <div className="suoImg">
                    <TbTruckDelivery />
                  </div>

                  <div className="supInfo">
                    <h4>Free Delivery </h4>
                    <Link>
                      Enter your postal code for Delivery Availability
                    </Link>
                  </div>
                </div>
                <div className="supporte">
                  <div className="suoImg">
                    <RxUpdate />
                  </div>

                  <div className="supInfo">
                    <h4>Return Delivery </h4>
                    <p>Free 30 Days Delivery Returns. Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="total">
            <div className="kub"></div>
            <h3> Related Item</h3>
          </div>

          <div className="cards">
            {dataId?.slice(0, 4).map((item) => {
              return <Card item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default OneProdact;
