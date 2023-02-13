import { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { PositionType } from '../constant/constant'
import { getPaths } from '../util/util'
import Drawer from './Drawer'

type Props = {
  isOpen: boolean
  isMap: boolean
  setIsMap: Dispatch<SetStateAction<boolean>>
  setPaths: Dispatch<SetStateAction<string[]>>
  pos: PositionType
}

export const OriginalDrawer: FC<Props> = ({ isOpen, isMap, setIsMap, setPaths, pos }) => {
  const titles: string[] = isMap ? ["Map"] : ["Preview"]
  const childrens: ReactNode[] = isMap ? [
    <MapContent setIsMap={setIsMap} setPaths={setPaths} pos={pos} />
  ] : [
    <PreviewContent setIsMap={setIsMap} />
  ]
  return (
    <Drawer isOpen={isOpen} titles={titles} childrens={childrens} />
  )
}

const MapContent = (props: { setIsMap: Dispatch<SetStateAction<boolean>>, setPaths: Dispatch<SetStateAction<string[]>>, pos: PositionType }) => {
  const handleClick = () => {
    props.setIsMap((prev) => !prev)
    props.setPaths(getPaths(props.pos.lat, props.pos.lng, props.pos.scale))
  }
  return (
    <div>
      <p>lat:{props.pos.lat}</p>
      <p>lng:{props.pos.lng}</p>
      <p>scale:{props.pos.scale}</p>
      <button onClick={handleClick}>make</button>
    </div>
  )
}

const PreviewContent = (props: { setIsMap: Dispatch<SetStateAction<boolean>> }) => {
  const handleClick = () => {
    props.setIsMap((prev) => !prev)
  }
  return (
    <button onClick={handleClick}>return to map</button>
  )
}

export default OriginalDrawer
