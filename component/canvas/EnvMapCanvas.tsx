import { Canvas } from '@react-three/fiber'
import { Environment, Loader } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'

import SnowGlobe from './SnowGlobe'
import Snows from './Snows'

export default function EnvMapCanvas() {
  const [devicePixelRatio, setDevicePixelRatio] = useState(1)

  useEffect(() => {
    setDevicePixelRatio(window.devicePixelRatio)
  }, [])

  return (
    <>
      <Canvas
        camera={{
          position: [5, 4.5, -5],
          fov: 40
        }}
        gl={{
          preserveDrawingBuffer: true,
          pixelRatio: devicePixelRatio
        }}
      >
        <Environment preset="apartment" />
        <Suspense fallback={null}>
          <SnowGlobe />
          <Snows />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
