import { useState } from 'react'

import Audio from '../component/Audio'
import Crystal from '../component/Crystal'
import Drawer from '../component/Drawer'
import FullScreenButton from '../component/FullScreenButton'
import Header from '../component/Header'
import EnvMapCanvas from '../component/canvas/EnvMapCanvas'
import { backs, cities } from '../constant/constant'

export const Gallery = () => {
  const [city, setCity] = useState(cities[0].gltfPath)
  const [back, setBack] = useState(backs[0].path)
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)

  return (
    <div className="h-screen bg-gradient-to-br from-base-dark to-black overflow-hidden">
      <Header className="" />
      {/* y方向スクロールに対応するため、コンテンツは固定値でflexを未使用 */}
      <div className="relative flex flex-row h-[calc(100%_-_90px)]">
        <div className={isDrawerOpen ? 'relative w-3/4' : 'relative w-full'}>
          <EnvMapCanvas path={city} backPath={back} />
          <FullScreenButton
            isFullScreen={!isDrawerOpen}
            onClick={() => {
              setIsDrawerOpen((prev) => !prev)
            }}
            className="absolute top-5 right-5"
          />
        </div>
        <Crystal />
        <Drawer path={city} onCityChange={setCity} onBackChange={setBack} className="grow-1" isOpen={isDrawerOpen} />
        <Audio />
      </div>
    </div>
  )
}

export default Gallery
