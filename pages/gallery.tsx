import { useState } from 'react'

// import Canvas from '../component/Canvas'
import Drawer from '../component/Drawer'
import Header from '../component/Header'
import PathTracingCanvas from '../component/PathTracingCanvas'
import { cities } from '../constant/constant'

export const Gallery = () => {
  const [city, setCity] = useState(cities[0].gltfPath)
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-base-dark to-black overflow-hidden">
      <Header className="grow-0" />
      <div className="grow relative flex flex-row">
        {/* <Canvas path={city} className="grow" /> */}
        <PathTracingCanvas />
        <Drawer onChange={setCity} className="grow-0" />
      </div>
    </div>
  )
}

export default Gallery
