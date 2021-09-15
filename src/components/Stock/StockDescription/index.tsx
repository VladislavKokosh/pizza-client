import React, { FC } from "react";
import { useParams } from 'react-router-dom';

import {StockDescriptionStyled} from "./stock-description.styled";
import { items } from '../items'

const StockDescription:FC = () => {
  const param : string  = useParams()
  let stock: any = items.find(item => item.link === param)
  return(
    <StockDescriptionStyled>
      {stock}
    </StockDescriptionStyled>
  )
}

export default StockDescription