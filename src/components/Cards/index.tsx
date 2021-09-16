import React, {FC, useEffect} from 'react'
import {CardsStyled, LoaderStyled} from "./cards.styled";
import {items} from "../Header/Menu/items";
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {getCategorySelector} from "../../store/selectors/category";
import {getCategoryAsync} from "../../store/actions/category";
import Loader from "../Loader";
import {getLoaderSelector} from "../../store/selectors/loader";

const Cards:FC = () => {
  const dispatch = useDispatch()
  const category = useSelector(getCategorySelector)
  const isLoading : boolean = useSelector(getLoaderSelector)
  useEffect(() => {
    dispatch(getCategoryAsync())
  }, [])

  return(
    <CardsStyled>
    {isLoading ?
      <LoaderStyled>
        <Loader/>
      </LoaderStyled> :
      category.map(category => (
        <Card
          title={category.title}
          image={category.image}
          description={category.description}
          key={category.id}
        />
      ))
    }
    </CardsStyled>
  )
}

export default Cards