import { OrbitControls, Bounds } from '@react-three/drei'

import Model from './Model'

const SnowGlobe = () => {
  return (
    <>
      <OrbitControls />
      <group>
        <Bounds fit clip observe damping={6} margin={1.7}>
          <group position={[0.2, -1, 0]}>
            <Model rotation-y={Math.PI} position={[-0.3, 0, 0]} scale={5} object={null} />
          </group>
        </Bounds>
      </group>
    </>
  )
}

export default SnowGlobe
