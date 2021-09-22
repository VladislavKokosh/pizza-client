import { FC } from 'react'

import { ICard } from "./card.types";

import { CardStyled, CardDescriptionStyled, CardTitleStyled, CardImageStyled } from "./card.styled";

const Card:FC<ICard> = ({title, image, description}) => {
  return(
    <CardStyled>
      <CardImageStyled src={image} alt=''/>
      <CardTitleStyled>{title}</CardTitleStyled>
      <CardDescriptionStyled>{description}</CardDescriptionStyled>
    </CardStyled>
  )
}

export { Card }
