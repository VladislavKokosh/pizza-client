import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { getCategorySelector } from "../../store/selectors/category";
import { getCategoryAsync } from "../../store/actions/category";
import { getLoaderSelector } from "../../store/selectors/loader";

import { Card } from "./Card";
import Loader from "../Loader";

import { CardsStyled, LoaderStyled } from "./cards.styled";

const Cards = () => {
  const dispatch = useDispatch()
  const categories = useSelector(getCategorySelector)
  const isLoading : boolean = useSelector(getLoaderSelector)

  useEffect(() => {
    dispatch(getCategoryAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hasLoading = isLoading && (
    <LoaderStyled>
      <Loader/>
    </LoaderStyled>
  )
  const hasCategories = !isLoading && !!categories.length && categories.map(category => (
    <Card
      title={category.title}
      image={category.image}
      description={category.description}
      key={category.id}
    />
  ))
  const hasEmpty = !isLoading && !categories.length && <div>Ничего не найдено</div>

  return(
    <CardsStyled>
      {hasLoading}
      {hasCategories}
      {hasEmpty}
    </CardsStyled>
  )
}

export { Cards }
