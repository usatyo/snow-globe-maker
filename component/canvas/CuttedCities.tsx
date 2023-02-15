import { Bounds } from '@react-three/drei'
import { origin, PositionType } from '../../constant/constant'
import { scaleToRadius } from '../../util/util'

import Model from './Model'

const CuttedCities = (props: { paths: string[], pos: PositionType}) => {
  const lngOffset = 650000 / scaleToRadius(props.pos.scale)
  const latOffset = 890000 / scaleToRadius(props.pos.scale)
  return (
    <>
      <group>
        <Bounds fit clip observe damping={6} margin={1.7} position={[0, 0, 0]}>
          <group position={[0, 0, 0]}>
            {props.paths.map((path, idx) => {
              return (
                <Model 
                  rotation-y={Math.PI}
                  position={[-(props.pos.lng - origin.lng) * lngOffset, -3, (props.pos.lat - origin.lat) * latOffset]}
                  scale={8 / scaleToRadius(props.pos.scale)}
                  object={null}
                  path={path}
                  key={idx}
                />
              )
            })}
          </group>
        </Bounds>
      </group>
    </>
  )
}

export default CuttedCities
