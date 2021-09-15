import React, { FC } from 'react'
import {CardsStyled} from "./cards.styled";
import {items} from "../Header/Menu/items";
import Card from "./Card";

const Cards:FC = () => {
  return(
    <CardsStyled>
      {items.map(card => (
        <Card title={card.title} image={card.image} description={card.description}/>
      ))}
    </CardsStyled>
  )
}

export default Cards