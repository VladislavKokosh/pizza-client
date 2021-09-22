import React, {FC, useEffect} from 'react'
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import {CAROUSEL} from "../../styles/image";
import {useDispatch, useSelector} from "react-redux";
import {getLoaderSelector} from "../../store/selectors/loader";
import {getBannersSelector} from "../../store/selectors/banners";
import {getBannersAsync} from "../../store/actions/banners";

const Carousel:FC = () => {
  const dispatch = useDispatch()
  const banners = useSelector(getBannersSelector)
  const isLoading : boolean = useSelector(getLoaderSelector)
  useEffect(() => {
    dispatch(getBannersAsync())
  }, [])



  const _plugins : any = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })];
  return(
    <Flicking circular={true} plugins={_plugins}>
      {banners.map(banner => <img style={{width:'100vw'}} src={banner.image} key={banner.id} alt=''/>)}
    </Flicking>
  )
}

export default Carousel