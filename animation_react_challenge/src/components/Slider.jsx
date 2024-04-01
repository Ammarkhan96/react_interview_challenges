import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "./slider.css";
import { data } from "./data";


const Slider = () => {
    return (
        <section id="slider" className="main-slider-wrapper">
            <Swiper
                
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={30}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 6,
                    slideShadows: true,
                }}
            >
                {data.map((item) => (
                    <SwiperSlide>
                        <img src={item.image} alt={item.name} />
                       <h2>{item.name}</h2>
                       <p>{item.info}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    )
}

export default Slider