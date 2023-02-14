import { Bounds } from '@react-three/drei'

import Model from './Model'

const CuttedCities = (props: { paths: string[] }) => {
  const k = 25000
  return (
    <>
      <group>
        <Bounds fit clip observe damping={6} margin={1.7} position={[0, 0, 0]}>
          <group position={[0.2, -1, 0]}>
            {props.paths.map((path, idx) => {
              return (
                <Model rotation-y={Math.PI} position={[-0.3, 0, 0]} scale={0.1} object={null} path={path} key={idx} />
              )
            })}
          </group>
        </Bounds>
      </group>
    </>
  )
}

export default CuttedCities
