import { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { PositionType } from '../constant/constant'
import { getPaths, scaleToRadius, tooSmall } from '../util/util'
import Drawer from './Drawer'

type Props = {
  isOpen: boolean
  isMap: boolean
  setIsMap: Dispatch<SetStateAction<boolean>>
  setPaths: Dispatch<SetStateAction<string[]>>
  pos: PositionType
  pixelRadius: number | undefined
  className: string
}

export const OriginalDrawer: FC<Props> = ({ isOpen, isMap, setIsMap, setPaths, pos, pixelRadius }) => {
  const titles: string[] = isMap ? ['Map'] : ['Preview']
  const childrens: ReactNode[] = isMap
    ? [<MapContent setIsMap={setIsMap} setPaths={setPaths} pos={pos} pixelRadius={pixelRadius ?? 450} />]
    : [<PreviewContent setIsMap={setIsMap} />]
  return <Drawer isOpen={isOpen} titles={titles} childrens={childrens} />
}

const MapContent = (props: {
  setIsMap: Dispatch<SetStateAction<boolean>>
  setPaths: Dispatch<SetStateAction<string[]>>
  pos: PositionType
  pixelRadius: number
}) => {
  const handleClick = async () => {
    if (tooSmall(props.pos.scale)) {
      return
    }
    const newPaths = await getPaths(props.pos.lat, props.pos.lng, props.pos.scale, props.pixelRadius)
    if (newPaths.length == 0) {
      alert('この範囲には建物が存在しません')
      return
    }
    props.setPaths(newPaths)
    props.setIsMap((prev) => !prev)
  }
  return (
    <div className="flex flex-col justify-end">
      {/* <p>lat:{props.pos.lat}</p>
      <p>lng:{props.pos.lng}</p>
      <p>scale:{props.pos.scale}</p>
      <p>radius:{scaleToRadius(props.pos.scale, props.pixelRadius)}</p> */}

      <button
        onClick={handleClick}
        disabled={tooSmall(props.pos.scale)}
        className="relative cursor-pointer text-[1.5rem] border-[1px] font-italianno border-accent-original px-6 py-4  my-3 text-sm md:px-10 md:py-6 text-accent-original md:text-md tracking-widest font-noto hover:bg-accent-original z-20 transition-all duration-500 hover:text-base-dark"
      >
        make
      </button>
      <p className="text-accent-original md: text-[0.7rem]">※場所によってはテクスチャがつかない場合があります</p>
      {tooSmall(props.pos.scale) && <p className="text-[0.7em] text-red-700">半径が大きすぎます</p>}
    </div>
  )
}

const PreviewContent = (props: { setIsMap: Dispatch<SetStateAction<boolean>> }) => {
  const handleClick = () => {
    props.setIsMap((prev) => !prev)
  }
  return <button onClick={handleClick}>back to map</button>
}

export default OriginalDrawer
