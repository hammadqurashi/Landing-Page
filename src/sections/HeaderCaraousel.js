"use client";

import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import { headerCaraouselImages } from "../data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper/modules";

const HeaderCaraousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section className="w-full min-h-[75vh] h-[75vh]">
      <Swiper
        navigation={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        className="h-full w-full"
      >
        {headerCaraouselImages &&
          headerCaraouselImages.length > 0 &&
          headerCaraouselImages.map((item) => {
            return (
              <SwiperSlide className="relative h-full w-full" key={item.id}>
                <div
                  className={`absolute top-[60%] md:top-[25%] max-w-[400px] md:left-5 bg-black/70 flex flex-col gap-4 p-10`}
                >
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    width={400}
                    height={150}
                  />
                  <p className="text-white text-sm">{item.desc}</p>
                  <Button text="Learn More" fill="light" href="/" />
                </div>
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={1499}
                  height={394}
                  className="hidden md:block w-full h-full"
                />
                <img
                  src={item.resImg}
                  alt={item.alt}
                  className="md:hidden w-full h-full"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default HeaderCaraousel;
