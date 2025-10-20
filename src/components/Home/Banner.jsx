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
import AnimatedButton from "../Shared/Navbar/AnimatedButton";

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
    <div className="mt-18 md:mt-20">
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
              <div className="text-white text-center space-y-5 p-8 w-full flex flex-col items-center justify-center">
                <h2 className="text-xl md:text-5xl font-semibold">
                  {bannerInfo?.title}
                </h2>
                <p className="text-2xl font-normal hidden md:flex">{bannerInfo?.intro}</p>

                <AnimatedButton label="Take a Tour"></AnimatedButton>

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