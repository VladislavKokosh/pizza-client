import React, {FC, useEffect} from 'react'
import {StockStyled,StockTitleStyled} from "./stock.styled";
import StockCard from "./StockCard/stockcard";
import {useDispatch, useSelector} from "react-redux";
import {getSaleSelector} from "../../store/selectors/sale";
import {getSaleAsync} from "../../store/actions/sale";
import {LoaderStyled} from "../Cards/cards.styled";
import {Loader} from "../Loader";
import {getLoaderSelector} from "../../store/selectors/loader";


const Stock:FC = () => {
  const dispatch = useDispatch()
  const sales = useSelector(getSaleSelector)
  const isLoading = useSelector(getLoaderSelector)

  useEffect(()=> {
    dispatch(getSaleAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hasLoading = isLoading && (
    <LoaderStyled>
      <Loader/>
    </LoaderStyled>
  )

  const hasSales = !isLoading && !!sales.length && sales.map((sale)=> (
    <StockCard
      key={sale.id}
      id={sale.id}
      title={sale.title}
      image={sale.image}
      description={sale.description}
      link={sale.id}
    />
  ))

  const hasEmpty = !isLoading && !sales.length && <div>На данный момент акций нет :(</div>

  return(
    <>
      <StockTitleStyled>Акции</StockTitleStyled>
      <StockStyled>
        {hasLoading}
        {hasSales}
        {hasEmpty}
      </StockStyled>
    </>

  )
}

export { Stock }