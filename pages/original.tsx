import { SpotLight } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { useMemo, useState } from 'react'

import FullScreenButton from '../component/FullScreenButton'
import Header from '../component/Header'
import OriginalDrawer from '../component/OriginalDrawer'
import SnowGlobe from '../component/canvas//SnowGlobe'
import Snows from '../component/canvas//Snows'
import TableModel from '../component/canvas//TableModel'
import EnvMapCanvas from '../component/canvas/EnvMapCanvas'
import { emptyModel, origin, PositionType, scenes } from '../constant/constant'

export const Original = () => {
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
      <div className="relative flex flex-row md:h-[calc(100%_-_90px)] h-1/2">
        <div className={isDrawerOpen ? 'relative  md:w-3/4' : 'relative  md:w-full'}>
          {isMap ? (
            <div>
              <Map pos={pos} setPos={setPos} />
              <div className="absolute top-0 left-0 right-0 bottom-0 h-1/2 aspect-square m-auto rounded-full bg-black z-10 opacity-30 pointer-events-none"></div>
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
              <SnowGlobe paths={[emptyModel, ...paths]} />
              <Snows />
              <TableModel object={null} position={[0, -8, 0]} scale={[4, 1, 4]} />
            </EnvMapCanvas>
          )}
          <FullScreenButton
            isFullScreen={!isDrawerOpen}
            onClick={() => {
              setIsDrawerOpen((prev) => !prev)
            }}
            className="absolute top-5 right-5"
          />
        </div>
        <OriginalDrawer isOpen={isDrawerOpen} isMap={isMap} setIsMap={setIsMap} setPaths={setPaths} pos={pos} />
      </div>
    </div>
  )
}

export default Original
