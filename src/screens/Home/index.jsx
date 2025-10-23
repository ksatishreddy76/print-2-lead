import React from "react";
import MainSlideImage from "../../assets/main-slide-image.jpg";
import Invoice from "../Invoice";

const Home = () => {
  return (
    <div className="w-full relative">
      <img src={MainSlideImage} className="w-full" alt="" />
      <div className="absolute text-left top-0 left-0  mx-auto w-full h-full flex flex-col mt-24 items-center text-white px-4">
        <div className="w-full">
          <div className="container mx-auto">
            <div className="w-fit bg-white text-black p-6 px-10 rounded-lg">
              <h1 className="text-4xl font-bold text mt-8 flex">
                Welcome to{" "}
                <span>
                  <h1 className="text-4xl font-bold text text-purple-900 ml-3 mb-0">
                    Print
                  </h1>
                </span>
                <span>
                  <h1 className="text-4xl font-bold text text-orange-500 mb-0">
                    2Lead
                  </h1>
                </span>
              </h1>
              <p className="font-semibold text-xl">
                Your one-stop solution for all your printing needs.
              </p>
              <p className="mt-4 text-justify max-w-[600px] mb-6">
                Print2Lead delivers premium printing solutions to help your
                business stand out. From business cards and brochures to banners
                and custom merchandise, we combine advanced printing technology
                with expert service to ensure vibrant, high-quality results for
                every need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
