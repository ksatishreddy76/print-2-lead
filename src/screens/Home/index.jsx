import React from "react";
import MainSlideImage from "../../assets/main-slide-image.jpg";

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
                At Print2Lead, we specialize in delivering high-quality printed
                materials that help your business stand out. From business cards
                and brochures to banners and custom merchandise, we offer a wide
                range of products tailored to meet your unique requirements. Our
                state-of-the-art printing technology ensures vibrant colors and
                sharp details, while our team of experts is dedicated to
                providing exceptional customer service. Whether you're a small
                business owner or a large corporation, we are here to help you
                make a lasting impression. Explore our services and let
                Print2Lead be your trusted printing partner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
