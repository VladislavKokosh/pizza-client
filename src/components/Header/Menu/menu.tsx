import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { getCategorySelector } from "../../../store/selectors/category";
import { getCategoryAsync } from "../../../store/actions/category";

import { MenuItem } from "./MenuItem/menuitem";
import { MenuStyled } from "./menu.styled";


const Menu = () => {
  const dispatch = useDispatch()
  const menuItems = useSelector(getCategorySelector)
  useEffect(() => {
    dispatch(getCategoryAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hasMenuItem = !!menuItems.length && menuItems.map((item) => <MenuItem title={item.title} link={item.id} key={item.id}/>)

  return(
    <MenuStyled>
      {hasMenuItem}
    </MenuStyled>
  )
}

export { Menu }
