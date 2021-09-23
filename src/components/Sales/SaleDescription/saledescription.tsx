import React, {FC, useEffect} from "react";
import { useParams } from 'react-router-dom';

import {SaledescriptionStyled} from "./saledescription.styled";
import {useDispatch} from "react-redux";
import {getSaleByIdAsync} from "../../../store/actions/sale";

const StockDescription:FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams<{id: string}>()

  useEffect(()=>{
    // console.log(id)
    dispatch(getSaleByIdAsync(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return(
    <SaledescriptionStyled>

    </SaledescriptionStyled>
  )
}

export { StockDescription }
