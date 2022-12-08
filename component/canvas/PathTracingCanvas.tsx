import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Bounds } from '@react-three/drei'
import { Suspense, useLayoutEffect, useState } from 'react'
import { useControls } from 'leva'

import { Pathtracer, usePathtracer } from '@react-three/gpu-pathtracer'

import Controls from '../Controls'
import Model from './Model'

function Thing({ setEnabled }: any) {
  const { clear, update, renderer } = usePathtracer()

  // useLayoutEffect(() => update(), [])
  const [captureStarted, setCaptureStarted] = useState(false)

  const opts: any = useControls({}, [captureStarted])

  return (
    <>
      <OrbitControls
        autoRotate={opts['Auto Rotate']}
        autoRotateSpeed={2}
        onEnd={() => setEnabled(true)}
        onStart={() => setEnabled(false)}
        // onChange={() => clear()}
      />
      <group>
        <Bounds fit clip observe damping={6} margin={1.7}>
          <group position={[0.2, -1, 0]}>
            <Model rotation-y={Math.PI} position={[-0.3, 0, 0]} scale={5} />
          </group>
        </Bounds>
      </group>
    </>
  )
}

export default function App() {
  const opts: any = Controls()

  // const [enabled, setEnabled] = useState(true)
  const enabled = false

  return (
    <>
      <Canvas
        camera={{
          position: [5, 4.5, -5],
          fov: 40
        }}
        gl={{
          preserveDrawingBuffer: true
        }}
      >
        <Suspense fallback={null}>
          <Pathtracer
            background={{
              type: opts.Background_Type,
              top: opts.Gradient_ColorTop,
              bottom: opts.Gradient_ColorBottom,
              intensity: opts.Environment_Intensity,
              blur: opts.Environment_Blur
            }}
            bounces={opts.Rendering_Bounces}
            enabled={enabled && opts.Rendering_Enabled}
            paused={opts.Rendering_Paused}
            samples={opts.Rendering_Samples}
            resolutionScale={opts.Rendering_Scale}
            tiles={[opts.Rendering_Tiles.x, opts.Rendering_Tiles.y]}
            disable={false}
            renderPriority={0}
          >
            <Environment preset="apartment" />
            <Thing setEnabled={() => {}} />
          </Pathtracer>
        </Suspense>
      </Canvas>
    </>
  )
}
