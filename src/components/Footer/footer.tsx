import { useSelector } from "react-redux";

import {getCategorySelector} from "../../store/selectors/category";

import { INST_WHITE, TELEGRAM_WHITE, VIBER_WHITE, VK_WHITE, WHATSAPP_WHITE, LOGO_FOOTER} from "../../styles/image";
import {itemsInfo} from "./info-items";

import {
  AboutButton,
  AboutContacts,
  AboutTimeStyled
} from "../Header/header.styled";

import {
  FooterStyled,
  FooterTitleStyled,
  FooterContactsStyled,
  FooterInfoStyled,
  FooterMenuStyled,
  FooterMenuItemsStyled,
  FooterMenuItemStyled,
  FooterButtonStyled,
  FooterLogoStyled,
  FooterContactsImageStyled,
  FooterContactsImageTwoStyled
} from "./footer.styled";

const Footer = () => {
  const menuItems = useSelector(getCategorySelector)
  const imageOne = [TELEGRAM_WHITE, VIBER_WHITE, WHATSAPP_WHITE]
  const imageTwo = [VIBER_WHITE, TELEGRAM_WHITE, INST_WHITE, WHATSAPP_WHITE, VK_WHITE]

  const hasMenuItem = menuItems.map((item) => (
    <FooterMenuItemStyled key={item.id}>{item.title}</FooterMenuItemStyled>
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
      <FooterLogoStyled src={LOGO_FOOTER} alt=''/>
      <FooterContactsStyled>
          <AboutTimeStyled style={{color: 'white'}}>Доставка с 08:00 до 24:00</AboutTimeStyled>
          <AboutContacts style={{color: 'white'}}>
            {imageOne.map((image, key) => <FooterContactsImageStyled key={key} src={image} alt=''/>)}
            <span>728-13-13</span>
          </AboutContacts>
          <AboutButton style={{color: '#FF3737'}}>iamkoksss@mail.ru</AboutButton>
          <FooterButtonStyled>Заказать звонок</FooterButtonStyled>
          <AboutContacts>
            {imageTwo.map((image, key) => <FooterContactsImageTwoStyled key={key} src={image} alt=''/>)}
          </AboutContacts>
      </FooterContactsStyled>
    </FooterStyled>
  )
}

export { Footer }
