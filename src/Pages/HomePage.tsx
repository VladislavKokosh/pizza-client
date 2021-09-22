import React, { FC } from 'react'
import Carousel from "../components/Carousel";
import MyMap from "../components/Map";
import Cards from "../components/Cards";

const HomePage: FC = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Cards></Cards>
      <div style={{textAlign:'center'}}>
        <h1>Зона доставки</h1>
        <MyMap/>
      </div>
    </div>
  )
}

export default HomePage
