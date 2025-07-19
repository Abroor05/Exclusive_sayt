import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { getData, getMenuBars } from "../../services/app";
import "./HeroSlayd.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';

function HeroSlayd() {
  const [bars, setBars] = useState([]);
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    getMenuBars().then(setBars)
    .finally(()=>{
      setLoader(false)
    })
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <ul>
            {loader ? 
            <div>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ margin: 1 }}>
                    <Skeleton variant="circular">
                      <Avatar />
                    </Skeleton>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Skeleton width="100%">
                      <Typography>.</Typography>
                    </Skeleton>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ margin: 1 }}>
                    <Skeleton variant="circular">
                      <Avatar />
                    </Skeleton>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Skeleton width="100%">
                      <Typography>.</Typography>
                    </Skeleton>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ margin: 1 }}>
                    <Skeleton variant="circular">
                      <Avatar />
                    </Skeleton>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Skeleton width="100%">
                      <Typography>.</Typography>
                    </Skeleton>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ margin: 1 }}>
                    <Skeleton variant="circular">
                      <Avatar />
                    </Skeleton>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Skeleton width="100%">
                      <Typography>.</Typography>
                    </Skeleton>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ margin: 1 }}>
                    <Skeleton variant="circular">
                      <Avatar />
                    </Skeleton>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Skeleton width="100%">
                      <Typography>.</Typography>
                    </Skeleton>
                  </Box>
                </Box>
                
            </div>   :
            bars?.map((item) => {
                return (
                  <Link key={item?.id}>
                    <div className="barsImg">
                      <img src={item.image} alt="" />
                    </div>
                    <h3>{item.title}</h3>
                  </Link>
                );
              }
            )
             
            }
          </ul>
        </div>

        <div className="heroRight">
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
      </div>
    </>
  );
}

export default HeroSlayd;
