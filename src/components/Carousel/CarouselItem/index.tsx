import React, { FC } from "react"
import {ICarouselIemProps} from "./ICarouselIemProps";

const CarouselItem:FC<ICarouselIemProps>= ({ content }) => {
  return(
      <img src={content} alt=''></img>
  )
}

export default CarouselItem