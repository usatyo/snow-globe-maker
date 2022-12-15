import { Canvas } from '@react-three/fiber'
import { Environment, Loader } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'

import SnowGlobe from './SnowGlobe'
import Snows from './Snows'

export default function EnvMapCanvas(props: { path: string }) {
  const [devicePixelRatio, setDevicePixelRatio] = useState(1)

  useEffect(() => {
    setDevicePixelRatio(window.devicePixelRatio)
  }, [])

  return (
    <>
      <Canvas
        gl={{
          preserveDrawingBuffer: true,
          pixelRatio: devicePixelRatio,
          antialias: true
        }}
      >
        <Environment files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']} background />
        <Suspense fallback={null}>
          <SnowGlobe path={props.path} />
          <Snows />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
