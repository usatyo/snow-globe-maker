import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Suspense } from 'react'

import { Pathtracer } from '@react-three/gpu-pathtracer'

import Controls from './Controls'
import SnowGlobe from './SnowGlobe'

export default function PathTracingCanvas() {
  const opts = Controls()

  return (
    <>
      <Canvas
        camera={{
          position: [5, 4.5, -5],
          fov: 40
        }}
        gl={{
          preserveDrawingBuffer: true,
          pixelRatio: window.devicePixelRatio
        }}
      >
        <Suspense fallback={null}>
          <Pathtracer
            background={{
              type: opts.Background_Type as 'Gradient' | 'Environment' | undefined,
              top: opts.Gradient_ColorTop,
              bottom: opts.Gradient_ColorBottom,
              intensity: opts.Environment_Intensity,
              blur: opts.Environment_Blur
            }}
            bounces={opts.Rendering_Bounces}
            enabled={opts.Rendering_Enabled}
            paused={opts.Rendering_Paused}
            samples={opts.Rendering_Samples}
            resolutionScale={opts.Rendering_Scale}
            tiles={[opts.Rendering_Tiles.x, opts.Rendering_Tiles.y]}
            disable={false}
            renderPriority={0}
          >
            <Environment preset="apartment" />
            <SnowGlobe />
          </Pathtracer>
        </Suspense>
      </Canvas>
    </>
  )
}
