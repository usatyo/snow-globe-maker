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
    <div key={props.idx} className="flex flex-col items-end space-y-1 mx-auto ">
      <div className=" flex flex-row  items-center space-x-3  pl-2 w-36 ml-2">
        <RadioGroup.Item
          value={props.val}
          id={props.name}
          className="bg-base-dark rounded-full w-4 h-4 border-2 border-accent-original hover:opacity-70 mr-0.5 transition-all duration-300 "
        >
          <RadioGroup.Indicator className="flex justify-center items-center h-full w-full after:h-full after:w-full after:bg-white after:rounded-full" />
        </RadioGroup.Item>
        <label
          className="text-[1.5rem] font-italianno text-accent-original font-mono hover:opacity-50 tracking-wider text-center transition-all duration-300"
          htmlFor={props.name}
        >
          {props.name}
        </label>
        {/* <BsSnow2 className="-z-10 text-ice-original h-5 w-5 rotate-[25deg] translate-y-2 ml-3" /> */}
      </div>
    </div>
  )
}

export const Drawer: FC<Props> = ({ path, onCityChange, onBackChange, className, isOpen }) => {
  if (!isOpen) return null
  return (
    <div className="relative z-20 h-full bg-base-light/10 flex flex-col py-10 px-10 space-y-8 bg-blur-md w-[30%] text-center items-center backdrop-blur-sm overflow-y-auto">
      {/* <hr className="border-1 w-1/6 border-accent-original" /> */}
      <p className="text-[4rem] text-accent-original font-italianno tracking-wide">City</p>
      <RadioGroup.Root
        defaultChecked
        defaultValue={cities[0].gltfPath}
        onValueChange={onCityChange}
        className={`z-30 flex flex-col items-start space-y-5  ${className}`}
      >
        {cities.map((val, idx) => {
          return <Option val={val.gltfPath} name={val.name} key={idx} idx={idx} />
        })}
      </RadioGroup.Root>
      <hr className="border-1 w-5/6 border-accent-original" />
      <p className="text-[4rem] text-accent-original font-italianno tracking-wide">Background</p>
      <RadioGroup.Root
        defaultChecked
        defaultValue={backs[0].path}
        onValueChange={onBackChange}
        className={`z-30 flex flex-col items-start space-y-5  ${className}`}
      >
        {backs.map((val, idx) => {
          return <Option val={val.path} name={val.name} idx={idx} key={idx} />
        })}
      </RadioGroup.Root>
      <hr className="border-1 w-5/6 border-accent-original" />
      <a href={path} download={path.slice(1)} className="flex items-center space-x-3 hover:opacity-50">
        <BsDownload className="text-accent-original h-8 w-8 ml-3" />
        <p className="text-accent-original text-sm tracking-wide">Download this model</p>
      </a>
    </div>
  )
}

export default Drawer
