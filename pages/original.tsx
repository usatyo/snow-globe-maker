import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

import FullScreenButton from "../component/FullScreenButton";
import Header from "../component/Header";
import OriginalDrawer from "../component/OriginalDrawer";
import EnvMapCanvas from "../component/canvas/EnvMapCanvas";
import { emptyModel, origin, scenes } from "../constant/constant";

export const Original = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true)
  const [isMap, setIsMap] = useState<boolean>(true)
  const [paths, setPaths] = useState<string[]>(['01100-bldg-303345.glb', '01100-bldg-304557.glb', '01100-bldg-304576.glb', '01100-bldg-304616.glb'])

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
          {isMap ?
            <div>
              <Map />
              <div className="absolute top-0 left-0 right-0 bottom-0 h-1/2 aspect-square m-auto rounded-full bg-black z-10 opacity-30 pointer-events-none"></div>
            </div>
            :
            <EnvMapCanvas paths={[emptyModel, ...paths]} scenePath={scenes[0].path} pos={[origin, { lat: 43.071173, lng: 141.348529, alt: 18.777, scale: 0.3 }, { lat: 43.071173, lng: 141.348529, alt: 18.777, scale: 0.3 }, { lat: 43.071173, lng: 141.348529, alt: 18.777, scale: 0.3 }, { lat: 43.071173, lng: 141.348529, alt: 18.777, scale: 0.3 }]} />
          }
          <FullScreenButton
            isFullScreen={!isDrawerOpen}
            onClick={() => {
              setIsDrawerOpen((prev) => !prev)
            }}
            className="absolute top-5 right-5"
          />
        </div>
        <OriginalDrawer isOpen={isDrawerOpen} isMap={isMap} setIsMap={setIsMap} setPaths={setPaths} />
      </div>
    </div>
  )
}

export default Original
