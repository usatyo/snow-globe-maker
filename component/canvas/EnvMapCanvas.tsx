import { Canvas } from '@react-three/fiber'
import { Environment, Loader } from '@react-three/drei'
import { Suspense, useState, useEffect, useRef } from 'react'

import SnowGlobe from './SnowGlobe'
import Snows from './Snows'

export default function EnvMapCanvas(props: { path: string, backPath: Array<string> }) {
  const [devicePixelRatio, setDevicePixelRatio] = useState(1)
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
        onMouseEnter={() => {
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
        }}
        onMouseLeave={() => {
          if (canvasRef.current) canvasRef.current.style.cursor = 'auto'
        }}
        ref={canvasRef}
      >
        <Environment files={props.backPath} background />
        <Suspense fallback={null}>
          <SnowGlobe path={props.path} />
          <Snows />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
