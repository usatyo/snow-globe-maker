import { Bounds } from '@react-three/drei'
import { origin, PositionType } from '../../constant/constant'
import { scaleToRadius, LocationCoordinates } from '../../util/util'

import Model from './Model'

const CuttedCities = (props: { paths: string[], pos: PositionType}) => {
  const originLocCor = new LocationCoordinates(origin.lat, origin.lng, props.pos.alt)
  const posLocCor = new LocationCoordinates(props.pos.lat, props.pos.lng, props.pos.alt).toVec3Array(originLocCor)
  const scaleMultiplyer = 8 / scaleToRadius(props.pos.scale)

  return (
    <>
      <group>
        <Bounds fit clip observe damping={6} margin={1.7} position={[0, 0, 0]}>
          <group position={[0, 0, 0]}>
            {props.paths.map((path, idx) => {
              return (
                <Model 
                  rotation-y={Math.PI}
                  position={[-posLocCor[0] * scaleMultiplyer, -3, -posLocCor[2] * scaleMultiplyer]}
                  scale={scaleMultiplyer}
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
