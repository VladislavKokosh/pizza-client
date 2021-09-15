import React, { FC } from 'react'
import { YMaps, Map, Polygon } from 'react-yandex-maps';

const MyMap : FC = () => {
  return(
    <YMaps>
      <Map
        width={'100%'}
        height={'400px'}
        defaultState={{
          center: [53.139919, 26.017599],
          zoom: 11,
        }}
      >
        <Polygon
          geometry={[
            [
              [53.150326, 25.930575],
              [53.121421, 25.896929],
              [53.122660, 25.898302],
              [53.088776, 25.896929],
              [53.063966, 25.962160],
              [53.065207, 26.031512],
              [53.081748, 26.090563],
              [53.112746, 26.118716],
              [53.138767, 26.135195],
              [53.160232, 26.118716],
              [53.177768, 26.091936],
              [53.188493, 26.052798],
              [53.186843, 26.010226],
              [53.150326, 25.930575]
            ]
          ]}
          options={{
            fillColor: '#fcf737',
            strokeColor: '#FF3737',
            opacity: 0.5,
            strokeWidth: 5,
            strokeStyle: 'solid'
          }}
        />
      </Map>
    </YMaps>
  )
}

export default  MyMap
