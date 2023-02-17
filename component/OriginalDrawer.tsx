import { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { BsFillExclamationCircleFill, BsFillInfoCircleFill } from 'react-icons/bs'
import { PositionType } from '../constant/constant'
import { getPaths, tooSmall } from '../util/util'
import Drawer from './Drawer'

type Props = {
  isOpen: boolean
  isMap: boolean
  setIsMap: Dispatch<SetStateAction<boolean>>
  setPaths: Dispatch<SetStateAction<string[]>>
  pos: PositionType
  pixelRadius: number | undefined
}

export const OriginalDrawer: FC<Props> = ({ isOpen, isMap, setIsMap, setPaths, pos, pixelRadius }) => {
  const titles: string[] = isMap ? ['Map'] : ['Preview']
  const childrens: ReactNode[] = isMap
    ? [<MapContent setIsMap={setIsMap} setPaths={setPaths} pos={pos} pixelRadius={pixelRadius ?? 450} />]
    : [<PreviewContent setIsMap={setIsMap} />]
  return <Drawer isOpen={isOpen} titles={titles} childrens={childrens} className="h-1/2 md:h-full" />
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
    <div className="flex flex-col space-y-3">
      <button
        onClick={handleClick}
        disabled={tooSmall(props.pos.scale)}
        className="relative cursor-pointer text-[1.5rem] border-[1px] font-italianno border-accent-original px-6 py-4 md:px-10 md:py-6 text-accent-original md:text-md tracking-widest hover:bg-accent-original z-20 transition-all duration-500 hover:text-base-dark"
      >
        create model
      </button>
      {tooSmall(props.pos.scale) &&
        <div className='text-warn-original flex flex-row space-x-1'>
          <BsFillExclamationCircleFill className='w-4 h-4' />
          <p className="text-[0.7em]">
            半径が大きすぎます
          </p>
        </div>
      }
      <div className='text-accent-original flex flex-row space-x-1'>
        <BsFillInfoCircleFill className='w-4 h-4' />
        <p className="text-[0.7em] flex flex-row items-center">場所によってはテクスチャがつかない場合があります</p>
      </div>
    </div>
  )
}

const PreviewContent = (props: { setIsMap: Dispatch<SetStateAction<boolean>> }) => {
  const handleClick = () => {
    props.setIsMap((prev) => !prev)
  }
  return (
    <button
      onClick={handleClick}
      className="relative cursor-pointer text-[1.5rem] border-[1px] font-italianno border-accent-original px-6 py-4  my-3 text-sm md:px-10 md:py-6 text-accent-original md:text-md tracking-widest font-noto hover:bg-accent-original z-20 transition-all duration-500 hover:text-base-dark"
    >
      back to map
    </button>
  )
}

export default OriginalDrawer
