import { FC } from "react"

import { ICarouselIemProps } from "./carouselitem.types"

import { CarouselItemStyled } from "./carouselitem.styled"

const CarouselItem:FC<ICarouselIemProps> = ({ id, image }) => {
  return(
    <CarouselItemStyled src={image} alt={id}/>
  )
}

export { CarouselItem }
