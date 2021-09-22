import React, {FC, useEffect} from 'react'
import {MenuStyled} from "./menu.styled";
import {useDispatch, useSelector} from "react-redux";

import MenuItem from "./MenuItem";
import {getCategorySelector} from "../../../store/selectors/category";
import {getCategoryAsync} from "../../../store/actions/category";

const Menu : FC = () => {
  const dispatch = useDispatch()
  const menuItems = useSelector(getCategorySelector)
  useEffect(() => {
    dispatch(getCategoryAsync())
  }, [])

  return(
    <MenuStyled>
      {menuItems.map((item) => (
        <MenuItem title={item.title} link={item.id} key={item.id}/>
      ))}
    </MenuStyled>
  )
}

export default Menu
