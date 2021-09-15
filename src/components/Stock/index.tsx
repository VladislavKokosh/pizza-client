import React, { FC } from 'react'
import {StockStyled,StockTitleStyled} from "./stock.styled";
import {items} from "./items";
import StockCard from "./StockCard";


const Stock:FC = () => {
  return(
    <>
      <StockTitleStyled>Акции</StockTitleStyled>
      <StockStyled>
        {items.map((item, key)=> (
          <StockCard title={item.title} image={item.image} description={item.description} link={item.link}/>
        ))}
      </StockStyled>
    </>

  )
}

export default Stock