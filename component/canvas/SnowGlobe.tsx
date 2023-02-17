import { OrbitControls, Bounds, PerspectiveCamera } from '@react-three/drei'
import { FC } from 'react'

import Model from './Model'

type SnowGlobeProps = {
  path: string
}

const SnowGlobe: FC<SnowGlobeProps> = (props) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[30, 30, 30]} />
      <OrbitControls
        autoRotate
        maxPolarAngle={Math.PI / 2}
        maxDistance={100}
        minDistance={20}
        autoRotateSpeed={0.4}
        enablePan={false}
      />
      <group>
        <Bounds fit clip observe damping={6} margin={1.7} position={[0, 0, 0]}>
          <group position={[0, -1, 0]}>
            <Model rotation-y={Math.PI} position={[0, 0, 0]} scale={5} object={null} path={props.path} />
          </group>
        </Bounds>
      </group>
    </>
  )
}

export default SnowGlobe
