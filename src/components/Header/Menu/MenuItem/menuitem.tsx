import { FC } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {MenuItemStyled, MenuItemActiveStyled} from "./menuitem.styled";
import { IMenuItemProps } from './menuitem.types';

const MenuItem:FC<IMenuItemProps> = ({title, link}) => {
  const history = useHistory()
  const { pathname } = useLocation()

  return(
      pathname === link ?
        <MenuItemActiveStyled
          onClick={()=>{
            history.push(link)
        }}>
          {title}
        </MenuItemActiveStyled> :
        <MenuItemStyled
          onClick={()=>{
            history.push(link)
        }}>
          {title}
        </MenuItemStyled>
    )
}

export { MenuItem }
