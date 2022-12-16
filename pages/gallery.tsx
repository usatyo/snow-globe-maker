import { useState } from 'react'

// import Canvas from '../component/Canvas'
import Audio from '../component/Audio'
import Crystal from '../component/Crystal'
import Drawer from '../component/Drawer'
import Header from '../component/Header'
import EnvMapCanvas from '../component/canvas/EnvMapCanvas'
import { backs, cities } from '../constant/constant'

export const Gallery = () => {
  const [city, setCity] = useState(cities[0].gltfPath)
  const [back, setBack] = useState(backs[0].path)
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-base-dark to-black overflow-hidden">
      <Header className="grow-0" />
      <div className="grow relative flex flex-row justify-end">
        <EnvMapCanvas path={city} backPath={back} />
        <Crystal />
        <Drawer path={city} onCityChange={setCity} onBackChange={setBack} className="grow-0" />
        <Audio />
      </div>
    </div>
  )
}

export default Gallery
