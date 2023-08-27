import React from "react";
import Button from "../components/Button";

const Spotlight = () => {
  return (
    <section className="w-full my-14">
      <div className="w-[97%] h-[90vh] m-auto flex flex-col items-center gap-7">
        <h1 className="text-2xl lg:text-4xl text-mainText">SPOTLIGHT</h1>
        <div className="flex flex-col lg:flex-row gap-3 w-full h-full">
          {/* Right Container Starts */}

          <div
            className="w-full lg:w-2/3 h-full"
            style={{
              background: "url('/assets/spotlight/img1.webp')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-wrap w-full h-[90%] p-7 justify-between items-end">
              <div className="flex flex-col w-2/4">
                <h2 className="text-xl md:text-2xl text-mainText">Intec</h2>
                <p className="text-sm md:text-md lg:text-lg text-mainText">
                  Design is concerned with the concept of “Intelligent, humane
                  driving”.
                </p>
              </div>
              <div className=" text-end">
                <Button
                  text="Find Out More"
                  outline="dark"
                  href="/"
                  rounded={true}
                />
              </div>
            </div>
          </div>
          {/* Right Container Ends */}

          {/* Left Container Starts */}
          <div className="w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col h-full gap-2">
            {/* First Picture starts */}
            <div
              style={{
                background: "url('/assets/spotlight/img2.webp')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full md:w-1/2 lg:w-full h-1/2"
            >
              <div className="flex flex-col h-full items-end justify-center gap-3 p-3">
                <h2 className="text-xl md:text-2xl text-white ">
                  DESIGN PHILOSOPHY
                </h2>
                <p className="text-sm md:text-md lg:text-lg text-white">
                  Geely auto should look to global trends
                </p>
                <div className="my-2">
                  <Button
                    text="Find Out More"
                    outline="light"
                    href="/"
                    rounded={true}
                  />
                </div>
              </div>
            </div>
            {/* First Picture ends */}

            {/* Second Picture starts */}
            <div
              style={{
                background: "url('/assets/spotlight/img3.webp')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full md:w-1/2 lg:w-full h-1/2"
            >
              <div className="flex flex-col h-full items-end justify-center gap-3 p-3">
                <h2 className="text-xl md:text-2xl text-white ">HISTORY</h2>
                <p className="text-sm md:text-md lg:text-lg text-white">
                  Geely’s era 1.0 to 4.0
                </p>
                <div className="my-2">
                  <Button
                    text="Find Out More"
                    outline="light"
                    href="/"
                    rounded={true}
                  />
                </div>
              </div>
            </div>
            {/* Second Picture ends */}
          </div>
          {/* Left Container Ends */}
        </div>
      </div>
    </section>
  );
};
export default Spotlight;
