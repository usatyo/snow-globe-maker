import Canvas from "../component/Canvas"
import Drawer from "../component/Drawer"
import Header from "../component/Header"

export const Gallery = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-base-dark to-black overflow-hidden">
      <Header className="grow-0" />
      <div className="grow relative flex flex-row">
        <Canvas className="grow" />
        <Drawer className="grow-0" />
      </div>
    </div>
  )
}

export default Gallery
