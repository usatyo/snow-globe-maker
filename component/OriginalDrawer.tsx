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
}

export const OriginalDrawer: FC<Props> = ({ isOpen, isMap, setIsMap, setPaths, pos, pixelRadius }) => {
  const titles: string[] = isMap ? ['Map'] : ['Preview']
  const childrens: ReactNode[] = isMap
    ? [<MapContent setIsMap={setIsMap} setPaths={setPaths} pos={pos} pixelRadius={pixelRadius ?? 1} />]
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
    if (tooSmall(props.pos.scale)) { return }
    props.setIsMap((prev) => !prev)
    props.setPaths(await getPaths(props.pos.lat, props.pos.lng, props.pos.scale))
  }
  return (
    <div>
      <p>lat:{props.pos.lat}</p>
      <p>lng:{props.pos.lng}</p>
      <p>scale:{props.pos.scale}</p>
      <p>radius:{scaleToRadius(props.pos.scale, props.pixelRadius)}</p>
      <p>場所によってはテクスチャがつかない場合があります</p>
      {props.pos.scale < 17 && <p>半径が大きすぎます</p>}
      <button onClick={handleClick} disabled={tooSmall(props.pos.scale)}>make</button>
    </div>
  )
}

const PreviewContent = (props: { setIsMap: Dispatch<SetStateAction<boolean>> }) => {
  const handleClick = () => {
    props.setIsMap((prev) => !prev)
  }
  return <button onClick={handleClick}>return to map</button>
}

export default OriginalDrawer
