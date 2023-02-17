import { SpotLight } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { useMemo, useRef, useState } from 'react'

import Header from '../component/Header'
import OriginalDrawer from '../component/OriginalDrawer'
import Snows from '../component/canvas//Snows'
import TableModel from '../component/canvas//TableModel'
import CuttedCities from '../component/canvas/CuttedCities'
import EnvMapCanvas from '../component/canvas/EnvMapCanvas'
import SnowGlobe from '../component/canvas/SnowGlobe'
import { emptyModel, origin, PositionType, scenes } from '../constant/constant'
import { tooSmall } from '../util/util'

export const Original = () => {
  const circleRef = useRef<HTMLDivElement | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true)
  const [isMap, setIsMap] = useState<boolean>(true)
  const [paths, setPaths] = useState<string[]>([])
  const [pos, setPos] = useState<PositionType>(origin)

  const Map = useMemo(
    () =>
      dynamic(() => import('../component/SquareMap'), {
        loading: () => <p>A map is loading</p>,
        ssr: false
      }),
    []
  )
  return (
    <div className="h-screen bg-gradient-to-br from-base-dark to-black overflow-hidden">
      <Header className="" />
      {/* y方向スクロールに対応するため、コンテンツは固定値でflexを未使用 */}
      <div className="relative flex flex-col md:flex-row h-full">
        <div className={'relative h-2/3 md:w-3/4 md:h-full'}>
          {isMap ? (
            <div>
              <Map pos={pos} setPos={setPos} />
              <div
                ref={circleRef}
                className={` absolute top-16 md:top-20 left-0 right-0 bottom-0 h-1/2 aspect-square m-auto rounded-full z-10 opacity-30 pointer-events-none border-2 ${
                  tooSmall(pos.scale) ? 'bg-warn-original border-warn-dark' : 'bg-black border-darkblack'
                }`}
              ></div>
            </div>
          ) : (
            <EnvMapCanvas scenePath={scenes[0].path}>
              <SpotLight
                radiusTop={0}
                radiusBottom={0}
                position={[0, 20, 0]}
                intensity={10}
                color={0xffffff}
                distance={100}
                angle={0.6}
                attenuation={20}
                penumbra={0.2}
              />
              <SnowGlobe path={emptyModel} />
              <CuttedCities paths={[...paths]} pos={pos} pixelRadius={circleRef.current?.clientHeight} />
              <Snows />
              <TableModel object={null} position={[0, -8, 0]} scale={[4, 1, 4]} />
            </EnvMapCanvas>
          )}
        </div>
        <OriginalDrawer
          isOpen={isDrawerOpen}
          isMap={isMap}
          setIsMap={setIsMap}
          setPaths={setPaths}
          pos={pos}
          pixelRadius={circleRef.current?.clientHeight}
        />
      </div>
    </div>
  )
}

export default Original
