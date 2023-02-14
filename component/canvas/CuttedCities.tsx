import { OrbitControls, Bounds, PerspectiveCamera } from '@react-three/drei'

import Model from './Model'

const CuttedCities = (props: { paths: string[] }) => {
  const k = 25000
  return (
    <>
      <PerspectiveCamera makeDefault position={[30, 30, 30]} />
      <OrbitControls
        autoRotate
        maxPolarAngle={Math.PI / 2}
        maxDistance={10000} // 100に戻す
        minDistance={20}
        autoRotateSpeed={0.4}
        enablePan={false}
      />
      <group>
        <Bounds fit clip observe damping={6} margin={1.7} position={[0, 0, 0]}>
          <group position={[0.2, -1, 0]}>
            {props.paths.map((path, idx) => {
              return (
                <Model rotation-y={Math.PI} position={[-0.3, 0, 0]} scale={5} object={null} path={path} key={idx} />
              )
            })}
          </group>
        </Bounds>
      </group>
    </>
  )
}

export default CuttedCities
