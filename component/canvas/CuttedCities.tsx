import { Bounds } from '@react-three/drei'
import { origin, PositionType } from '../../constant/constant'
import { scaleToRadius, LocationCoordinates } from '../../util/util'

import Model from './Model'

const CuttedCities = (props: { paths: string[]; pos: PositionType; pixelRadius: number | undefined }) => {
  const originLocCor = new LocationCoordinates(origin.lat, origin.lng, props.pos.alt)
  const posLocCor = new LocationCoordinates(props.pos.lat, props.pos.lng, props.pos.alt).toVec3Array(originLocCor)
  // 「現実の半径」を「スノードームのモデルの地面の半径」へ縮小する割合
  // 空のスノードームのモデルの地面の半径が目測1.886m,
  // スノードームを表示するときにscale=5としているため5倍
  // 5倍だと一部の建物がはみ出るので、4.4に手動調整
  const scaleMultiplyer = (1.886 * 5) / scaleToRadius(props.pos.scale, props.pixelRadius ?? 450)

  return (
    <>
      <group>
        <Bounds fit clip observe damping={6} margin={1.7} position={[0, 0, 0]}>
          <group position={[0, 0, 0]}>
            {props.paths.map((path, idx) => {
              return (
                <Model
                  rotation-y={Math.PI}
                  //台のy位置は約-0.3249m
                  position={[
                    -posLocCor[0] * scaleMultiplyer,
                    -origin.alt * scaleMultiplyer - 1 - 0.3249 * 5,
                    -posLocCor[2] * scaleMultiplyer
                  ]}
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
