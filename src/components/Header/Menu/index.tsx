import React, { FC } from 'react'
import {MenuStyled} from "./menu.styled";

import { items } from './items'
import MenuItem from "./MenuItem";

const Menu : FC = () => {
  return(
    <MenuStyled>
      {items.map((item, key) => (
        <MenuItem title={item.title} link={item.link} key={key}/>
      ))}
    </MenuStyled>
  )
}

export default Menu
