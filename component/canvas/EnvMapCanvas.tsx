import { Canvas } from '@react-three/fiber'
import { Environment, Loader, SpotLight } from '@react-three/drei'
import { Suspense, useState, useEffect, useRef } from 'react'

import SnowGlobe from './SnowGlobe'
import Snows from './Snows'
import TableModel from './TableModel'
import { PositionType } from '../../constant/constant'

export default function EnvMapCanvas(props: { paths: string[], scenePath: string, pos:PositionType[] }) {
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
          antialias: true,
          toneMappingExposure: 0.4
        }}
        onMouseEnter={() => {
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
        }}
        onMouseLeave={() => {
          if (canvasRef.current) canvasRef.current.style.cursor = 'auto'
        }}
        ref={canvasRef}
      >
        <Environment files={props.scenePath} background />
        <Suspense fallback={null}>
          <SpotLight
            radiusTop={0}
            radiusBottom={0}
            position={[0, 20, 0]}
            intensity={10}
            color={0xffffff}
            distance={100}
            angle={0.6}
            attenuation={20}
            penumbra={0.2}
          />
          <SnowGlobe paths={props.paths} pos={props.pos} />
          <Snows />
          <TableModel object={null} position={[0, -8, 0]} scale={[4, 1, 4]} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
