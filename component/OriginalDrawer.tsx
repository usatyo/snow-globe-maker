import { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import Drawer from './Drawer'

type Props = {
  isOpen: boolean
  isMap: boolean
  setIsMap: Dispatch<SetStateAction<boolean>>
}

export const OriginalDrawer: FC<Props> = ({ isOpen, isMap, setIsMap }) => {
  const titles: string[] = isMap ? ["Map"] : ["Preview"]
  const childrens: ReactNode[] = isMap ? [
    <MapContent setIsMap={setIsMap} />
  ] : [
    <PreviewContent setIsMap={setIsMap} />
  ]
  return (
    <Drawer isOpen={isOpen} titles={titles} childrens={childrens} />
  )
}

const MapContent = (props: { setIsMap: Dispatch<SetStateAction<boolean>> }) => {
  const handleClick = () => {
    props.setIsMap((prev) => !prev)

    // make original model
  }
  return (
    <button onClick={handleClick}>make</button>
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
