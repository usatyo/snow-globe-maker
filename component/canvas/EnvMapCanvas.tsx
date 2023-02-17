import { Canvas } from '@react-three/fiber'
import { Environment, Loader } from '@react-three/drei'
import { Suspense, useState, useEffect, useRef, ReactNode, FC } from 'react'

type EnvMapCanvasProps = {
  scenePath: string
  children?: ReactNode
}

const EnvMapCanvas: FC<EnvMapCanvasProps> = (props) => {
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
        <Suspense fallback={null}>{props.children}</Suspense>
      </Canvas>
      <Loader />
    </>
  )
}

export default EnvMapCanvas
