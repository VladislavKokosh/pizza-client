import React, {FC, useEffect} from "react";
import { useParams, useHistory } from 'react-router-dom';

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
import {getOtherSaleSelector, getSaleByIdSelector, getSaleSelector} from "../../../store/selectors/sale";

const StockDescription:FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams<{id: string}>()
  const saleById = useSelector(getSaleByIdSelector)
  const otherSales = useSelector(getOtherSaleSelector(saleById.id))

  useEffect(()=>{
    dispatch(getSaleByIdAsync(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  const hasOtherSales = otherSales.map(sale => (
    <SaleOtherCard onClick={() => history.replace(`/stock/${sale.id}`)}>
      <SaleOtherCardImage src={sale.image}/>
      <SaleOtherCardTitle>{sale.title}</SaleOtherCardTitle>
    </SaleOtherCard>
    ))

  return(
    <SaleDescriptionStyled>
      <SaleDescriptionAbout>
        <SaleDescriptionImage src={saleById?.image}/>
        <SaleDescriptionTitle>{saleById?.title}</SaleDescriptionTitle>
        <SaleDescriptionDescription>{saleById?.description}</SaleDescriptionDescription>
        <SaleDescriptionButton onClick={() => history.replace(`/`)}>Сделать предзаказ</SaleDescriptionButton>
      </SaleDescriptionAbout>
      <SaleOther>
        <SaleOtherTitle>Другие акции</SaleOtherTitle>
        {hasOtherSales}
        <SaleDescriptionButton
          onClick={() => history.goBack()}
          style={{margin: '20px 0 0 0'}}
        >
          Все акции
        </SaleDescriptionButton>
      </SaleOther>
    </SaleDescriptionStyled>
  )
}

export { StockDescription }
