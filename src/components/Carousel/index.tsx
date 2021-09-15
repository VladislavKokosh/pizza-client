import React, { FC } from 'react'
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import {CAROUSEL} from "../../styles/image";

const Carousel:FC = () => {
  const _plugins : any = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })];
  return(
    <Flicking circular={true} plugins={_plugins}>
      <img style={{width:'100%'}} src={CAROUSEL} alt=''/>
      <img style={{width:'100%'}} src={CAROUSEL} alt=''/>
      <img style={{width:'100%'}} src={CAROUSEL} alt=''/>
    </Flicking>
  )
}

export default Carousel