"use client";

import React, { useEffect } from "react";
import Button from "../components/Button";
import { useInView } from "react-intersection-observer";

const CarDetails = ({
  carImg,
  carLogoImg,
  carFeaturedLine,
  overlayColor,
  btnTheme,
  features,
  description,
  exploreHref,
  financeHref,
  buyNowHref,
  contentPosition,
}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <section ref={ref} className="md:h-[90vh] w-full  overflow-hidden">
      <div className={`flex flex-col md:flex-row w-full h-full`}>
        <div
          style={{
            background: `url('${carImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
          className={`${
            contentPosition === "left" ? "md:order-last -scale-x-100" : ""
          } min-h-[360px] md:h-full md:w-1/2 `}
        ></div>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url('${carImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: -1,
            }}
            className={`${contentPosition === "right" ? "-scale-x-100" : ""}`}
          ></div>
          <div
            className={`p-5 md:p-16 w-full h-full`}
            style={{
              background: overlayColor === "dark" ? "#353535e6" : "#ffffffb3",
            }}
          >
            <div
              className={` ${
                inView === true
                  ? "translate-x-0 opacity-1"
                  : contentPosition === "right"
                  ? "translate-x-[200%] opacity-0"
                  : "-translate-x-[200%] opacity-0"
              } transition-all duration-[2000ms] ease-in-out flex flex-col  justify-evenly w-[80%] gap-3 min-h-[90%] m-auto`}
            >
              {/* Car Logo & Featured Line Starts*/}

              <h2 className="flex items-center gap-2">
                <img
                  className={`${
                    overlayColor === "light" ? "brightness-0" : ""
                  } w-[100px] h-[10px] md:w-[150px] md:h-[20px]`}
                  src={carLogoImg}
                  alt=""
                />
                <span
                  className={`${
                    overlayColor === "light" ? "text-mainText" : "text-white"
                  } text-xs md:text-lg`}
                >
                  {carFeaturedLine}
                </span>
              </h2>
              {/* Car Logo & Featured Line End*/}

              {/* Car Features Starts*/}
              <div
                className={`flex w-full justify-center items-center gap-10 border-t-[1px] border-b-[1px] py-3 ${
                  overlayColor === "dark" ? "border-white" : "border-black"
                }`}
              >
                <p
                  className={`${
                    overlayColor === "light" ? "text-mainText" : "text-white"
                  } text-sm md:text-md`}
                >
                  {features[0]}
                </p>
                <div
                  className={`border-l ${
                    overlayColor === "dark" ? "border-white" : "border-gray-500"
                  } text-sm md:text-md h-6`}
                ></div>
                <p
                  className={`${
                    overlayColor === "light" ? "text-mainText" : "text-white"
                  } md:text-lg font-bold`}
                >
                  {features[1]}
                </p>
                <div
                  className={`border-l ${
                    overlayColor === "dark" ? "border-white" : "border-gray-500"
                  }  h-6`}
                ></div>
                <p
                  className={`${
                    overlayColor === "light" ? "text-mainText" : "text-white"
                  } flex items-center flex-col`}
                >
                  <span className="text-[10px]">{features[2][0]}</span>
                  <span>{features[2][1]}</span>
                </p>
              </div>
              {/* Car Features Ends*/}

              {/* Car Description Starts*/}

              <div className="flex flex-col w-[90%]  gap-3 py-5">
                {description &&
                  description.length > 0 &&
                  description.map((item) => {
                    return (
                      <div className="flex items-center gap-3" key={item.id}>
                        <img
                          src={item.img}
                          alt=""
                          width={25}
                          className={`${
                            overlayColor === "light" ? "brightness-0" : ""
                          }`}
                        />
                        <p
                          className={`${
                            overlayColor === "light"
                              ? "text-mainText"
                              : "text-white"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
              </div>
              {/* Car Description Ends*/}

              <div className="flex flex-col items-center md:flex-row gap-3 w-full">
                <Button text="Explore" outline={btnTheme} href={exploreHref} />
                <Button text="Finance" outline={btnTheme} href={financeHref} />
                <Button text="Buy Now" fill={btnTheme} href={buyNowHref} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
