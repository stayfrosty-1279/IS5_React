import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Main = () => {
  const images = [
    "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbGV8ZW58MHx8MHx8fDA%3D",
    "https://cdn.pixabay.com/photo/2017/02/10/16/51/text-2055660_640.jpg",
    "https://www.investopedia.com/thmb/jJ8QwYKxi-6iT4A0STzD_qYcKuY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SALE-FINAL-c68f00013f6e419d94e717a8cde864ef.jpg",
  ];

  return (
    <div className="image-carousel">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ width: "80%", margin: "0 auto" }} // Adjust width of the carousel
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "500px", // Fixed height for smaller size
                objectFit: "cover", // Ensures images scale nicely
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Main;
