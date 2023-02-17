import { SpotLight } from '@react-three/drei'
import { useState } from 'react'

import Crystal from '../component/Crystal'
import FullScreenButton from '../component/FullScreenButton'
import GallaryDrawer from '../component/GallaryDrawer'
import Header from '../component/Header'
import SnowGlobe from '../component/canvas//SnowGlobe'
import Snows from '../component/canvas//Snows'
import TableModel from '../component/canvas//TableModel'
import EnvMapCanvas from '../component/canvas/EnvMapCanvas'
import { scenes, cities } from '../constant/constant'

export const Gallery = () => {
  const [city, setCity] = useState(cities[0].gltfPath)
  const [scene, setScene] = useState(scenes[0].path)
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)

  return (
    <div className="h-screen bg-gradient-to-br from-base-dark to-black overflow-hidden">
      <Header className="" />
      {/* y方向スクロールに対応するため、コンテンツは固定値でflexを未使用 */}
      <div className="relative flex flex-col md:flex-row h-full  ">
        <div
          className={isDrawerOpen ? 'relative md:w-3/4 h-1/2 md:h-full' : 'relative w-full  md:w-full h-1/2 md:h-full'}
        >
          <EnvMapCanvas scenePath={scene}>
            <SpotLight
              radiusTop={0}
              radiusBottom={0}
              position={[0, 20, 0]}
              intensity={10}
              color={0xffffff}
              distance={100}
              angle={0.6}
              attenuation={20}
              penumbra={0.2}
            />
            <SnowGlobe path={city} />
            <Snows />
            <TableModel object={null} position={[0, -8, 0]} scale={[3, 1, 3]} />
          </EnvMapCanvas>
          <FullScreenButton
            isFullScreen={!isDrawerOpen}
            onClick={() => {
              setIsDrawerOpen((prev) => !prev)
            }}
            className=" opacity-0 md:opacity-100 md:z-10 md:absolute md:top-5 md:right-5"
          />
        </div>
        <Crystal />
        <GallaryDrawer isOpen={isDrawerOpen} onCityChange={setCity} onSceneChange={setScene} cityPath={city} />
      </div>
    </div>
  )
}

export default Gallery
