import dynamic from 'next/dynamic'
import { useMemo, useState } from 'react'

import Header from '../component/Header'
import OriginalDrawer from '../component/OriginalDrawer'

export const Original = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)

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
          <Map />
          <div className="absolute top-0 left-0 right-0 bottom-0 h-60 w-60 m-auto rounded-full bg-black z-10 opacity-30 pointer-events-none"></div>
        </div>
        <OriginalDrawer isOpen={isDrawerOpen} />
      </div>
    </div>
  )
}

export default Original
