import { useHistory } from 'react-router-dom'

import {
  TELEGRAM_MENU,
  TITLE_MENU,
  VIBER_MENU,
  WHATSAPP_MENU,
  INST_MENU,
  SHOPPING_BASKET
} from "../../styles/image/index";

import { Menu } from "./Menu";

import {
  TitleStyled,
  LogoStyled,
  LogoDescriptionStyled,
  AboutStyled,
  AboutTimeStyled,
  AboutContacts,
  AboutButton,
  BasketStyled,
  BasketInstStyled,
  BasketButtonStyled,
  ImageStyled
} from "./header.styled";

const Header = () => {
  const history = useHistory()
  const image = [TELEGRAM_MENU, VIBER_MENU, WHATSAPP_MENU]

return(
  <div className='header'>
    <TitleStyled>
      <LogoStyled>
        <img
          onClick={() => history.push('/')}
          src={TITLE_MENU}
          alt=''
        />
        <LogoDescriptionStyled>
          Доставка еды в городе <span style={{fontWeight: 'bold'}}>Барановичи</span>
        </LogoDescriptionStyled>
      </LogoStyled>
      <AboutStyled>
        <AboutTimeStyled>Доставка с 08:00 до 24:00</AboutTimeStyled>
        <AboutContacts>
          {image.map((image, key) => (
            <ImageStyled
              key={key}
              src={image}
              alt=''/>
          ))}
          <span>728-13-13</span>
        </AboutContacts>
        <AboutButton>Перезвоните мне</AboutButton>
      </AboutStyled>
      <BasketStyled>
        <BasketInstStyled>
          <img
            src={INST_MENU}
            style={{width: '25px', height: '25px'}}
            alt=''
          />
        </BasketInstStyled>
        <BasketButtonStyled>
          <img
            src={SHOPPING_BASKET}
            style={{width: '25px', height: '25px', marginRight: '6px'}}
            alt=''
          />
          Корзина: 26,66 руб.
        </BasketButtonStyled>
      </BasketStyled>
    </TitleStyled>
    <Menu/>
  </div>
)}

export  { Header }
