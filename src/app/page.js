import "./globals.css";

import ShoppingTools from "../sections/ShoppingTools";
import Models from "../sections/Models";
import CarDetails from "../sections/CarDetails";
import HeaderCaraousel from "../sections/HeaderCaraousel";
import Spotlight from "../sections/Spotlight";
import Accordian from "../sections/Accordian";

export default function Home() {
  return (
    <>
      <HeaderCaraousel />
      <ShoppingTools />
      <Models />
      <CarDetails
        carImg="/assets/cardetails/img1.jpg"
        carLogoImg="/assets/cardetails/img1logo.webp"
        carFeaturedLine="Power your ambition"
        overlayColor="light"
        btnTheme="dark"
        features={["2.0TD", "4WD", ["HP", "238 / 5500"]]}
        description={[
          {
            id: 0,
            img: "/assets/cardetails/engine.webp",
            desc: "Attractive sports crossover shape from Geely CMA",
          },
          {
            id: 1,
            img: "/assets/cardetails/car-light.webp",
            desc: "High performance 2.0TD engine + 4WD system",
          },
          {
            id: 2,
            img: "/assets/cardetails/wheel.webp",
            desc: "Elegant 20-inch rims",
          },
        ]}
        exploreHref="/"
        financeHref="/"
        buyNowHref="/"
        contentPosition="right"
      />
      <CarDetails
        carImg="/assets/cardetails/img2.jpg"
        carLogoImg="/assets/cardetails/img2logo.webp"
        carFeaturedLine="Unleash your energy"
        overlayColor="dark"
        btnTheme="light"
        features={[
          "1.5TD_172HP",
          "5.8L_NEDC PER 100KM",
          ["From_0-100", "in 7.6s"],
        ]}
        description={[
          {
            id: 0,
            img: "/assets/cardetails/car-spot.webp",
            desc: "Brand-New Energy Burst design language",
          },
          {
            id: 1,
            img: "/assets/cardetails/transmission.webp",
            desc: "Exclusive Lavender color option",
          },
          {
            id: 2,
            img: "/assets/cardetails/brake.webp",
            desc: "All-New Leishen 1.5 TD+7DCT powertrain",
          },
        ]}
        exploreHref="/"
        financeHref="/"
        buyNowHref="/"
        contentPosition="left"
      />
      {/* <AccordionSlider /> */}
      <Accordian />
      <Spotlight />
    </>
  );
}
