import React, {FC, useEffect} from "react";
import { useParams } from 'react-router-dom';

import {StockDescriptionStyled} from "./stock-description.styled";
import {useDispatch} from "react-redux";
import {getSaleByIdAsync} from "../../../store/actions/sale";
import {SaleByIdPayload} from "../../../store/types/sale";

const StockDescription:FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams<{id: string}>()
  useEffect(()=>{
    console.log(id)
    dispatch(getSaleByIdAsync(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return(
    <StockDescriptionStyled>

    </StockDescriptionStyled>
  )
}

export default StockDescription