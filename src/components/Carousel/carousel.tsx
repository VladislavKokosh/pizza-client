import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';

import { getBannersSelector } from "../../store/selectors/banners";
import { getBannersAsync } from "../../store/actions/banners";

import { CarouselItem } from './CarouselItem';

import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'

SwiperCore.use([Navigation]);

const Carousel:FC = () => {
  const dispatch = useDispatch()
  const banners = useSelector(getBannersSelector)

  useEffect(() => {
    dispatch(getBannersAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hasBanners = !!banners.length && banners.map(banner => <SwiperSlide key={banner.id}><CarouselItem image={banner.image} id={banner.id}/></SwiperSlide>)

  return(
    <Swiper navigation={true}>
      {hasBanners}
    </Swiper>
  )
}

export { Carousel }
