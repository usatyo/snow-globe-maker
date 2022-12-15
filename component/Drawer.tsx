import { FC } from 'react'
import { BsSnow2, BsDownload } from 'react-icons/bs'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { BackType, cities, CityType } from '../constant/constant'

type Props = {
  path: string,
  onCityChange?: (val: string) => void
  onBackChange?: (val: Array<string>) => void
  className?: string
}

const Option = (props: { val: CityType, idx: number }) => {
  return (
    <div key={props.idx} className="flex flex-col items-end space-y-1">
      <div className="flex flex-row justify-around items-center space-x-3 border-b-2 border-ice-dark pl-2">
        <RadioGroup.Item
          value={props.val.gltfPath}
          id={props.val.name}
          className="bg-ice-light rounded-full w-5 h-5 border-4 border-accent-original hover:opacity-50"
        >
          <RadioGroup.Indicator className="flex justify-center items-center h-full w-full after:h-full after:w-full after:bg-base-dark after:rounded-full" />
        </RadioGroup.Item>
        <label className="text-xl text-ice-dark font-mono hover:opacity-50 tracking-wider" htmlFor={props.val.name}>
          {props.val.name}
        </label>
        <BsSnow2 className="-z-10 text-ice-original h-5 w-5 rotate-[25deg] translate-y-2 ml-3" />
      </div>
    </div>
  )
}

export const Drawer: FC<Props> = ({ path, onCityChange, onBackChange, className }) => {
  return (
    <RadioGroup.Root
      defaultChecked
      defaultValue={cities[0].gltfPath}
      onValueChange={onCityChange}
      className={`z-30 flex flex-col items-start space-y-7 bg-base-light/30 w-[500px] h-full p-10 ${className}`}
    >
      <a href={path} download={path.slice(1)} className="flex items-center space-x-3 hover:opacity-50">
        <BsDownload className="-z-10 text-ice-dark h-7 w-7 ml-3" />
        <p className="text-ice-dark text-md tracking-wide">Download this model</p>
      </a>
      <hr className="border-1 w-11/12 border-ice-dark" />
      {cities.map((val, idx) => {
        return <Option val={val} idx={idx} />
      })}
    </RadioGroup.Root>
  )
}

export default Drawer
