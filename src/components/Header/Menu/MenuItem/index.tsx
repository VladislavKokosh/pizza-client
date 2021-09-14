import React, { FC } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {MenuItemStyled, MenuItemActiveStyled} from "./menu-item.styled";

interface IProps {
  title: string,
  link: string
}

const MenuItem:FC<IProps> = ({title, link}) => {
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

export default MenuItem
