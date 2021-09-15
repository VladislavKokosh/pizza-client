import React, { FC } from 'react'
import Carousel from "../components/Carousel";
import MyMap from "../components/Map";

const HomePage: FC = () => {
  return (
    <div>
      <Carousel></Carousel>
      <div style={{textAlign:'center'}}>
        <h1>Зона доставки</h1>
        <MyMap></MyMap>
      </div>
    </div>
  )
}

export default HomePage
