import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { getData, getMenuBars } from "../../services/app";
import "./HeroSlayd.css"

function HeroSlayd() {
  const [bars, setBars] = useState([]);

  useEffect(()=>{
    getMenuBars().then(setBars)

  }, [])
  

  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <ul>
            {bars?.map((item) => {
              return <Link> 
                <h3>{item.title}</h3>
                <div className="barsImg"><img src={item.image} alt="" /></div>
              </Link>;
             
            })}
          </ul>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="hero-right">
              <div className="imgs">
                <div className="imgs-info">
                  <div className="apps-title">
                    <span className="appleImg">
                      <img src="/imgs/apple.svg" alt="" />
                    </span>
                    <p>iPhone 14 Series</p>
                  </div>

                  <h1>Up to 10% off Voucher</h1>

                  <div className="btns">
                    <button className="shopBtn">
                      <Link>Shop Now </Link>
                    </button>
                    <button className="shopBtn1">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                <div className="imgs-img">
                  <img src="/imgs/apple13pro.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="hero-right">
              <div className="imgs">
                <div className="imgs-info">
                  <div className="apps-title">
                    <span className="appleImg">
                      <img src="/imgs/apple.svg" alt="" />
                    </span>
                    <p>iPhone 14 Series</p>
                  </div>

                  <h1>Up to 10% off Voucher</h1>

                  <div className="btns">
                    <button className="shopBtn">
                      <Link>Shop Now </Link>
                    </button>
                    <button className="shopBtn1">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                <div className="imgs-img">
                  <img src="/imgs/apple13pro.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="hero-right">
              <div className="imgs">
                <div className="imgs-info">
                  <div className="apps-title">
                    <span className="appleImg">
                      <img src="/imgs/apple.svg" alt="" />
                    </span>
                    <p>iPhone 14 Series</p>
                  </div>

                  <h1>Up to 10% off Voucher</h1>

                  <div className="btns">
                    <button className="shopBtn">
                      <Link>Shop Now </Link>
                    </button>
                    <button className="shopBtn1">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                <div className="imgs-img">
                  <img src="/imgs/apple13pro.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="hero-right">
              <div className="imgs">
                <div className="imgs-info">
                  <div className="apps-title">
                    <span className="appleImg">
                      <img src="/imgs/apple.svg" alt="" />
                    </span>
                    <p>iPhone 14 Series</p>
                  </div>

                  <h1>Up to 10% off Voucher</h1>

                  <div className="btns">
                    <button className="shopBtn">
                      <Link>Shop Now </Link>
                    </button>
                    <button className="shopBtn1">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                <div className="imgs-img">
                  <img src="/imgs/apple13pro.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="hero-right">
              <div className="imgs">
                <div className="imgs-info">
                  <div className="apps-title">
                    <span className="appleImg">
                      <img src="/imgs/apple.svg" alt="" />
                    </span>
                    <p>iPhone 14 Series</p>
                  </div>

                  <h1>Up to 10% off Voucher</h1>

                  <div className="btns">
                    <button className="shopBtn">
                      <Link>Shop Now </Link>
                    </button>
                    <button className="shopBtn1">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                <div className="imgs-img">
                  <img src="/imgs/apple13pro.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="hero-right">
              <div className="imgs">
                <div className="imgs-info">
                  <div className="apps-title">
                    <span className="appleImg">
                      <img src="/imgs/apple.svg" alt="" />
                    </span>
                    <p>iPhone 14 Series</p>
                  </div>

                  <h1>Up to 10% off Voucher</h1>

                  <div className="btns">
                    <button className="shopBtn">
                      <Link>Shop Now </Link>
                    </button>
                    <button className="shopBtn1">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                <div className="imgs-img">
                  <img src="/imgs/apple13pro.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="hero-right">
              <div className="imgs">
                <div className="imgs-info">
                  <div className="apps-title">
                    <span className="appleImg">
                      <img src="/imgs/apple.svg" alt="" />
                    </span>
                    <p>iPhone 14 Series</p>
                  </div>

                  <h1>Up to 10% off Voucher</h1>

                  <div className="btns">
                    <button className="shopBtn">
                      <Link>Shop Now </Link>
                    </button>
                    <button className="shopBtn1">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                <div className="imgs-img">
                  <img src="/imgs/apple13pro.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="hero-right">
              <div className="imgs">
                <div className="imgs-info">
                  <div className="apps-title">
                    <span className="appleImg">
                      <img src="/imgs/apple.svg" alt="" />
                    </span>
                    <p>iPhone 14 Series</p>
                  </div>

                  <h1>Up to 10% off Voucher</h1>

                  <div className="btns">
                    <button className="shopBtn">
                      <Link>Shop Now </Link>
                    </button>
                    <button className="shopBtn1">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                <div className="imgs-img">
                  <img src="/imgs/apple13pro.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="hero-right">
              <div className="imgs">
                <div className="imgs-info">
                  <div className="apps-title">
                    <span className="appleImg">
                      <img src="/imgs/apple.svg" alt="" />
                    </span>
                    <p>iPhone 14 Series</p>
                  </div>

                  <h1>Up to 10% off Voucher</h1>

                  <div className="btns">
                    <button className="shopBtn">
                      <Link>Shop Now </Link>
                    </button>
                    <button className="shopBtn1">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                <div className="imgs-img">
                  <img src="/imgs/apple13pro.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default HeroSlayd;
