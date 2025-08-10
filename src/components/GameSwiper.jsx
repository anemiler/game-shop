import React, { useState, useRef } from 'react';
import './gameSwiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import GameSlide from './GameSlide';

export default function GameSwiper({ games }) {
    const [active, setActive] = useState(false);
    const swiperRef = useRef(null);

    const handleToggleVideo = () => {
        setActive(prevActive => !prevActive);
        if (swiperRef.current && swiperRef.current.swiper) {
            if (active) {
                swiperRef.current.swiper.autoplay.start();
            } else {
                swiperRef.current.swiper.autoplay.stop();
            }
        }
    };

    return (
        <Swiper
            ref={swiperRef}
            effect="coverflow"
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            className="gameSwiper"
        >
            {games.map(game => (
                <SwiperSlide key={game._id}>
                    <GameSlide
                        game={game}
                        active={active}
                        toggleVideo={handleToggleVideo}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
