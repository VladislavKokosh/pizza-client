import React, {FC, useEffect} from "react";
import { useParams } from 'react-router-dom';

import {
  SaleDescriptionStyled,
  SaleDescriptionDescription,
  SaleDescriptionImage,
  SaleDescriptionButton,
  SaleDescriptionTitle,
  SaleDescriptionAbout,
  SaleOther,
  SaleOtherCard,
  SaleOtherCardImage,
  SaleOtherCardTitle,
  SaleOtherTitle
} from "./saledescription.styled";
import {useDispatch, useSelector} from "react-redux";
import {getSaleByIdAsync} from "../../../store/actions/sale";
import {getSaleByIdSelector, getSaleSelector} from "../../../store/selectors/sale";

const StockDescription:FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams<{id: string}>()
  const saleById = useSelector(getSaleByIdSelector)
  const sales = useSelector(getSaleSelector)

  useEffect(()=>{
    // console.log(id)
    dispatch(getSaleByIdAsync(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(()=>{
    const otherSales = sales.filter((sale) => sale.id !== saleById.id)
  },[saleById, sales])

  const hasOtherSales = sales.map(sale => (
    <SaleOtherCard>
      <SaleOtherCardImage src={sale.image}/>
      <SaleOtherCardTitle>{sale.title}</SaleOtherCardTitle>
    </SaleOtherCard>
    ))

  return(
    <SaleDescriptionStyled>
      <SaleDescriptionImage src={saleById?.image}/>
      <SaleDescriptionAbout>
        <SaleDescriptionTitle>{saleById?.title}</SaleDescriptionTitle>
        <SaleDescriptionDescription>{saleById?.description}</SaleDescriptionDescription>
        <SaleDescriptionButton>Сделать предзаказ</SaleDescriptionButton>
      </SaleDescriptionAbout>
      <SaleOther>
        <SaleOtherTitle>Другие акции</SaleOtherTitle>
        {hasOtherSales}
      </SaleOther>
    </SaleDescriptionStyled>
  )
}

export { StockDescription }
