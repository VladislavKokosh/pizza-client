import React, { FC } from 'react'
import {FooterStyled, FooterTitleStyled, FooterContactsStyled, FooterInfoStyled, FooterMenuStyled, FooterMenuItemsStyled, FooterMenuItemStyled, FooterButtonStyled} from "./footer.styled";
import {items} from "../Header/Menu/items";
import {itemsInfo} from "./info-items";
import {AboutButton, AboutContacts, AboutTimeStyled } from "../Header/header.styled";
import { INST_WHITE, TELEGRAM_WHITE, VIBER_WHITE, VK_WHITE, WHATSAPP_WHITE, LOGO_FOOTER} from "../../styles/image";

const Footer:FC = () => {
  const imageOne = [TELEGRAM_WHITE, VIBER_WHITE, WHATSAPP_WHITE]
  const imageTwo = [VIBER_WHITE, TELEGRAM_WHITE, INST_WHITE, WHATSAPP_WHITE, VK_WHITE]

  const hasMenuItem = items.map((item,key) => (
    <FooterMenuItemStyled key={key}>{item.title}</FooterMenuItemStyled>
  ))

  const hasInfoItem = itemsInfo.map((item, key) => (
    <FooterMenuItemStyled key={key}>{item.title}</FooterMenuItemStyled>
  ))

  return(
    <FooterStyled>
      <FooterMenuStyled>
        <FooterTitleStyled>Меню</FooterTitleStyled>
        <FooterMenuItemsStyled>{hasMenuItem}</FooterMenuItemsStyled>
      </FooterMenuStyled>
      <FooterInfoStyled>
        <FooterTitleStyled>Информация</FooterTitleStyled>
        <FooterMenuItemsStyled>{hasInfoItem}</FooterMenuItemsStyled>
      </FooterInfoStyled>
      <img src={LOGO_FOOTER} alt='' style={{width: '154px', height: '101px', paddingTop: '40px'}}/>
      <FooterContactsStyled>
          <AboutTimeStyled style={{color: 'white'}}>Доставка с 08:00 до 24:00</AboutTimeStyled>
          <AboutContacts style={{color: 'white'}}>
            {imageOne.map((image, key) => (
              <img
                key={key}
                style={{width: '14px', height: '14px', margin: '2px'}}
                src={image}
                alt=''/>
            ))}
            <span>728-13-13</span>
          </AboutContacts>
          <AboutButton style={{color: '#FF3737'}}>iamkoksss@mail.ru</AboutButton>
          <FooterButtonStyled>Заказать звонок</FooterButtonStyled>
          <AboutContacts>
            {imageTwo.map((image, key) => (
              <img
                key={key}
                style={{width: '20px', height: '20px', margin: '2px'}}
                src={image}
                alt=''/>
            ))}
          </AboutContacts>
      </FooterContactsStyled>
    </FooterStyled>
  )
}

export default Footer