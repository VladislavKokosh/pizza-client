import { Cards, Carousel, MyMap } from "../components";

const HomePage = () => {
  return (
    <div style={{minHeight: '100vh'}}>
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
