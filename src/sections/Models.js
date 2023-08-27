"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

//data
import { modelsData } from "../data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Models = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isNavigationEnabled = windowWidth >= 768;

  return (
    <section className=" bg-[#eae9e8] py-[60px] px-10">
      <h1 className="text-3xl text-mainText mb-5 text-center">MODELS</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        navigation={isNavigationEnabled}
        modules={[Navigation]}
        grabCursor={true}
        breakpoints={{
          500: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1000: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mt-7"
      >
        {modelsData?.map((item) => {
          return (
            <SwiperSlide className="w-[20px]" key={item.id}>
              <Link href={item.link} className="flex flex-col items-center">
                <Image src={item.img} alt={item.alt} width={200} height={100} />
                <p className="uppercase text-mainText font-semibold">
                  {item.title}
                </p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Models;
