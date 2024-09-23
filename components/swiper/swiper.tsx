'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import HomeSwiperItem from "../template/HomeSwiperItem";

const swiperData = [
    {
        image: 'https://xuxiweii.s3.bitiful.net/images/de16392e907dace615357e701bf15e17d3c2fc40.png'
    },
    {
        image: 'https://xuxiweii.s3.bitiful.net/images/de16392e907dace615357e701bf15e17d3c2fc40.png'
    },
    {
        image: 'https://xuxiweii.s3.bitiful.net/images/de16392e907dace615357e701bf15e17d3c2fc40.png'
    },
    {
        image: 'https://xuxiweii.s3.bitiful.net/images/de16392e907dace615357e701bf15e17d3c2fc40.png'
    },
    {
        image: 'https://xuxiweii.s3.bitiful.net/images/de16392e907dace615357e701bf15e17d3c2fc40.png'
    },
    {
        image: 'https://xuxiweii.s3.bitiful.net/images/de16392e907dace615357e701bf15e17d3c2fc40.png'
    }
]

const SwiperCom = () => {
    return (
        <>
            <Swiper
                modules={[Pagination]}

                slidesPerView={1.1}
                spaceBetween={0} // 设置轮播项之间的间距
                
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {swiperData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <HomeSwiperItem data={item}></HomeSwiperItem>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}

export default SwiperCom;