import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const cardPromise = fetch("/services.json").then((res) => res.json());

const HeroSlider = () => {
  const slides = use(cardPromise);

  return (
    <div className="w-full h-[80vh] relative  mt-15 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.serviceId}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Warm overlay for cozy feel */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/40 to-transparent"></div>

              {/* Content */}
              <div className="relative text-center text-white z-10 px-6 max-w-2xl drop-shadow-lg">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 text-amber-400">
                  {slide.serviceName}
                </h2>

                <p className="mb-6 text-lg opacity-95 leading-relaxed">
                  {slide.description?.length > 140
                    ? `${slide.description.slice(0, 140)}...`
                    : slide.description}
                </p>

                {/* <button className="btn bg-amber-500 hover:bg-amber-600 border-none text-white rounded-full px-8 text-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
                  Explore Services
                </button> */}
              </div>

              {/* Decorative blur box for warmth */}
              {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-[#000000aa] to-transparent backdrop-blur-sm"></div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
