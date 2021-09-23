import { FC } from 'react'
import {Link} from "react-router-dom";

import { IStockCard} from "./stockcard.types";

import { StockCardStyled, StockCardTitleStyled, StockCardButtonStyled, StockImageStyled } from "./stockcard.styled";

const StockCard:FC<IStockCard> = ({id, title, image, description, link}) => {

  return(
    <StockCardStyled>
      <StockImageStyled src={image} alt='1'/>
      <StockCardTitleStyled>{title}</StockCardTitleStyled>
      <StockCardButtonStyled>
        <Link style={{color: 'white'}} to={`/stock/${id}`}>Подробнее</Link>
      </StockCardButtonStyled>
    </StockCardStyled>
  )
}

export default StockCard
