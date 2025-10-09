import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// motion
import { motion } from "motion/react";
// import slider images
import image0 from "../../assets/banner/home.jpg";
import image1 from "../../assets/banner/home1.jpg";
import image2 from "../../assets/banner/home2.jpg";
import image3 from "../../assets/banner/home3.jpg";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  //   const images = [image0, image1, image2, image3];

  const bannersInfo = [
    {
      image: image0,
      title: "Find Your Perfect Home — Anytime, Anywhere",
      intro:
        "Discover thousands of verified rentals that fit your lifestyle and budget.",
    },
    {
      image: image1,
      title: "Search. Compare. Move In.",
      intro:
        "Easily browse homes, apartments, and rooms with just a few clicks.",
    },
    {
      image: image2,
      title: "Affordable Homes, Transparent Prices",
      intro: "No hidden fees — rent directly from trusted owners.",
    },
    {
      image: image3,
      title: "Safe Rentals, Happy Tenants",
      intro:
        "Verified listings, secure payments, and support every step of the way.",
    },
  ];
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="w-full"
      >
        {bannersInfo.map((bannerInfo, index) => (
          <SwiperSlide key={index}>
            <div className="absolute z-10 w-full h-full bg-black/30 flex justify-center items-center">
              <div className="text-white text-center space-y-5 p-8 w-full">
                <h2 className="text-xl md:text-5xl font-semibold">
                  {bannerInfo?.title}
                </h2>
                <p className="text-2xl font-normal">{bannerInfo?.intro}</p>

                <div className="flex justify-center items-center">
                  <div
                    className="relative bg-gradient-to-b from-slate-700 to-slate-800 h-[70px] w-[200px] overflow-hidden rounded-lg
                before:bg-[conic-gradient(from_0deg,rgba(250,0,183,0.9)_0deg,rgba(81,180,253,0.9)_180deg,rgba(255,0,183,0.9)_360deg)]
                before:absolute
                before:h-[350%]
                before:w-[150%]
                before:left-[-25%]
                before:top-[-125%]
                before:content-['']
                before:animate-[spin-border_3s_linear_infinite]
                "
                  >
                    <div className="absolute h-[calc(100%-6px)] w-[calc(100%-6px)] top-[3px] left-[3px] content-center bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg text-lg font-semibold cursor-pointer uppercase">
                      take a tour
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.img
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ ease: "easeInOut", repeat: Infinity, duration: 30 }}
              className="lg:h-[800px] w-full size-full object-cover"
              src={bannerInfo?.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;