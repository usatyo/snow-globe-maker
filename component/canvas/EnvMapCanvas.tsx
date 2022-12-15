import { Canvas } from '@react-three/fiber'
import { Environment, Loader } from '@react-three/drei'
import { Suspense, useState, useEffect, useRef } from 'react'

import SnowGlobe from './SnowGlobe'
import Snows from './Snows'
import TableModel from './TableModel'

export default function EnvMapCanvas(props: { path: string; backPath: string }) {
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
        <Environment files={props.backPath.split(",")} background />
        <Suspense fallback={null}>
          <SnowGlobe path={props.path} />
          <Snows />
          <TableModel object={null} position={[0, -8, 0]} scale={[4, 1, 4]} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
