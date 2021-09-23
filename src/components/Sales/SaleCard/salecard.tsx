import { FC } from 'react'
import {Link} from "react-router-dom";

import { ISaleCard } from "./salecard.types";

import {
  SaleCardButtonStyled,
  SaleCardTitleStyled,
  SaleImageStyled,
  SaleCardStyled
} from "./salecard.styled";

const SaleCard:FC<ISaleCard> = ({id, title, image, description, link}) => {

  return(
    <SaleCardStyled>
      <SaleImageStyled src={image} alt='1'/>
      <SaleCardTitleStyled>{title}</SaleCardTitleStyled>
      <SaleCardButtonStyled>
        <Link style={{color: 'white'}} to={`/stock/${id}`}>Подробнее</Link>
      </SaleCardButtonStyled>
    </SaleCardStyled>
  )
}

export { SaleCard }
