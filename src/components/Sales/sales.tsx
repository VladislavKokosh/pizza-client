import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { getLoaderSelector } from "../../store/selectors/loader";
import { getSaleSelector } from "../../store/selectors/sale";
import { getSaleAsync } from "../../store/actions/sale";

import { SaleCard } from "./SaleCard";
import { Loader } from "../Loader";

import { SaleStyled,SaleTitleStyled } from "./stock.styled";
import { LoaderStyled } from "../Cards/cards.styled";


const Sales = () => {
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
    <SaleCard
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
      <SaleTitleStyled>Акции</SaleTitleStyled>
      <SaleStyled>
        {hasLoading}
        {hasSales}
        {hasEmpty}
      </SaleStyled>
    </>
  )
}

export { Sales }
