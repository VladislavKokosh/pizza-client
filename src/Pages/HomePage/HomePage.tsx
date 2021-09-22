import { Cards, Carousel, MyMap } from "../../components";
import { HomePageDeliveryStyled, HomePageDeliveryTitleStyled, HomePageStyled } from "./homepage.styled";

const HomePage = () => {
  return (
    <HomePageStyled>
      <Carousel/>
      <Cards/>
      <HomePageDeliveryStyled>
        <HomePageDeliveryTitleStyled>Зона доставки</HomePageDeliveryTitleStyled>
        <MyMap/>
      </HomePageDeliveryStyled>
    </HomePageStyled>
  )
}

export { HomePage }
