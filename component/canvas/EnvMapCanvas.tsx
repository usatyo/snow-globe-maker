import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'

import SnowGlobe from './SnowGlobe'

export default function EnvMapCanvas() {
  const [devicePixelRatio, setDevicePixelRatio] = useState(1)

  useEffect(() => {
    setDevicePixelRatio(window.devicePixelRatio)
  }, [])

  return (
    <Suspense>
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
        <SnowGlobe />
      </Canvas>
    </Suspense>
  )
}
