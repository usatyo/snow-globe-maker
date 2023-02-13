import { OrbitControls, Bounds, PerspectiveCamera } from '@react-three/drei'
import { origin, PositionType } from '../../constant/constant'

import Model from './Model'

const SnowGlobe = (props: { paths: string[], pos: PositionType[] }) => {
  const k = 25000
  return (
    <>
      <PerspectiveCamera makeDefault position={[30, 30, 30]} />
      <OrbitControls
        autoRotate
        maxPolarAngle={Math.PI / 2}
        maxDistance={500} // 100に戻す
        minDistance={20}
        autoRotateSpeed={0.4}
        enablePan={false}
      />
      <group>
        <Bounds fit clip observe damping={6} margin={1.7} position={[0, 0, 0]}>
          <group position={[0.2, -1, 0]}>
            {props.paths.map((path, idx) => {
              return (
                <Model
                  rotation-y={Math.PI}
                  position={[-(props.pos[idx].lng - origin.lng) * k, -(props.pos[idx].alt - origin.alt) * 0.5, (props.pos[idx].lat - origin.lat) * k]}
                  scale={props.pos[idx].scale}
                  object={null}
                  path={path}
                  key={idx}
                />
              )
            }
            )}
          </group>
        </Bounds>
      </group>
    </>
  )
}

export default SnowGlobe
