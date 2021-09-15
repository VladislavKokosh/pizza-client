import React, { FC } from 'react'
import {Link} from "react-router-dom";
import { IStockCard} from "./IStockCard";
import { StockCardStyled, StockCardTitleStyled, StockCardButtonStyled } from "./stock-card.styled";

const StockCard:FC<IStockCard> = ({title, image, description, link}) => {
  return(
    <StockCardStyled>
      <img src={image} style={{borderRadius:'12px', width: '210px', height:'160px'}}/>
      <StockCardTitleStyled>{title}</StockCardTitleStyled>
      <StockCardButtonStyled>
        <Link to={`/stock/${link}`}>Подробнее</Link>
      </StockCardButtonStyled>
    </StockCardStyled>
  )
}

export default StockCard
