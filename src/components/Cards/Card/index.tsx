import React, { FC } from 'react'
import { ICard } from "./ICard";
import { CardStyled, CardDescriptionStyled, CardTitleStyled } from "./card.styled";

const Card:FC<ICard> = ({title, image, description}) => {
  return(
    <CardStyled>
      <img
        style={{borderRadius:'30px'}}
        src={image}
      />
      <CardTitleStyled>{title}</CardTitleStyled>
      <CardDescriptionStyled>{description}</CardDescriptionStyled>
    </CardStyled>
  )
}

export default Card