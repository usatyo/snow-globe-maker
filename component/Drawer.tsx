import { FC } from 'react'
import { BsSnow2, BsDownload } from 'react-icons/bs'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { backs, BackType, cities, CityType } from '../constant/constant'

type Props = {
  path: string
  isOpen: boolean
  onCityChange?: (val: string) => void
  onBackChange?: (val: string) => void
  className?: string
}

const Option = (props: { val: string; name: string; idx: number }) => {
  return (
    <div key={props.idx} className="flex flex-col items-end space-y-1">
      <div className="flex flex-row justify-around items-center space-x-3 border-b-2 border-ice-dark pl-2">
        <RadioGroup.Item
          value={props.val}
          id={props.name}
          className="bg-ice-light rounded-full w-5 h-5 border-4 border-accent-original hover:opacity-50"
        >
          <RadioGroup.Indicator className="flex justify-center items-center h-full w-full after:h-full after:w-full after:bg-base-dark after:rounded-full" />
        </RadioGroup.Item>
        <label className="text-xl text-ice-dark font-mono hover:opacity-50 tracking-wider" htmlFor={props.name}>
          {props.name}
        </label>
        <BsSnow2 className="-z-10 text-ice-original h-5 w-5 rotate-[25deg] translate-y-2 ml-3" />
      </div>
    </div>
  )
}

export const Drawer: FC<Props> = ({ path, onCityChange, onBackChange, className, isOpen }) => {
  if (!isOpen) return null
  return (
    <div className="h-full bg-base-light/30 flex flex-col p-10 space-y-8 overflow-y-auto">
      <hr className="border-1 w-11/12 border-ice-dark" />
      <p className="text-ice-dark text-2xl tracking-wide">Place</p>
      <RadioGroup.Root
        defaultChecked
        defaultValue={cities[0].gltfPath}
        onValueChange={onCityChange}
        className={`z-30 flex flex-col items-start space-y-7 w-[500px] ${className}`}
      >
        {cities.map((val, idx) => {
          return <Option val={val.gltfPath} name={val.name} idx={idx} />
        })}
      </RadioGroup.Root>
      <hr className="border-1 w-11/12 border-ice-dark" />
      <p className="text-ice-dark text-2xl tracking-wide">Background</p>
      <RadioGroup.Root
        defaultChecked
        defaultValue={backs[0].path}
        onValueChange={onBackChange}
        className={`z-30 flex flex-col items-start space-y-7 w-[500px] ${className}`}
      >
        {backs.map((val, idx) => {
          return <Option val={val.path} name={val.name} idx={idx} />
        })}
      </RadioGroup.Root>
      <hr className="border-1 w-11/12 border-ice-dark" />
      <a href={path} download={path.slice(1)} className="flex items-center space-x-3 hover:opacity-50">
        <BsDownload className="text-ice-dark h-7 w-7 ml-3" />
        <p className="text-ice-dark text-md tracking-wide">Download this model</p>
      </a>
    </div>
  )
}

export default Drawer
