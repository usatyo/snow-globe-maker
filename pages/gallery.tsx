import { useState } from 'react'

// import Canvas from '../component/Canvas'
import Crystal from '../component/Crystal'
import FullScreenButton from '../component/FullScreenButton'
import Header from '../component/Header'
import EnvMapCanvas from '../component/canvas/EnvMapCanvas'
import { backs, cities } from '../constant/constant'
import GallaryDrawer from '../component/GallaryDrawer'

export const Gallery = () => {
  const [city, setCity] = useState(cities[0].gltfPath)
  const [back, setBack] = useState(backs[0].path)
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)

  return (
    <div className="h-screen bg-gradient-to-br from-base-dark to-black overflow-hidden">
      <Header className="" />
      {/* y方向スクロールに対応するため、コンテンツは固定値でflexを未使用 */}
      <div className="relative flex flex-col md:flex-row h-full md:h-[calc(100%_-_90px)]">
        <div className={isDrawerOpen ? 'relative md:w-3/4 h-1/2 md:h-full' : 'relative md:w-full h-1/2 md:h-full'}>
          <EnvMapCanvas path={city} backPath={back} />
          <FullScreenButton
            isFullScreen={!isDrawerOpen}
            onClick={() => {
              setIsDrawerOpen((prev) => !prev)
            }}
            className=" opacity-0 md:opacity-100 md:z-10 md:absolute md:top-5 md:right-5"
          />
        </div>
        <Crystal />
        <GallaryDrawer isOpen={isDrawerOpen} onCityChange={setCity} onBackChange={setBack} cityPath="" />
      </div>
    </div>
  )
}

export default Gallery
