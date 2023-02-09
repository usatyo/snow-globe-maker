import * as RadioGroup from '@radix-ui/react-radio-group'
import { FC, ReactNode } from 'react'
import { BsDownload } from 'react-icons/bs'
import { TwitterIcon, TwitterShareButton } from 'react-share'
import { backs, cities, shareUrl } from '../constant/constant'
import Audio from './Audio'
import Drawer from './Drawer'

type Props = {
  isOpen: boolean
  cityPath: string
  onCityChange: (city: string) => void
  onBackChange: (back: string) => void
}

const Option = (props: { val: string; name: string; idx: number }) => {
  return (
    <div key={props.idx} className="flex flex-col items-end space-y-1 mx-auto ">
      <div className=" flex flex-row  items-center space-x-3  pl-2 md:w-36 ml-2">
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
      </div>
    </div>
  )
}

const CityContent = (props: { onChange: (city: string) => void }) => {
  return (
    <div>
      <p className="text-[3rem] md:text-[4rem] text-accent-original font-italianno tracking-wide">City</p>
      <RadioGroup.Root
        defaultChecked
        defaultValue={cities[0].gltfPath}
        onValueChange={props.onChange}
        className="z-30 flex flex-col items-start space-y-5"
      >
        {cities.map((val, idx) => {
          return <Option val={val.gltfPath} name={val.name} key={idx} idx={idx} />
        })}
      </RadioGroup.Root>
    </div>
  )
}

const BackContent = (props: { onChange: (city: string) => void }) => {
  return (
    <div>
      {/* <div className="relative z-20 h-full bg-base-light/10 flex flex-col py-10 px-10 space-y-8 bg-blur-md w-[30%] text-center items-center backdrop-blur-sm overflow-y-auto"> */}
      <p className="text-[3rem] md:text-[4rem] text-accent-original font-italianno tracking-wide">Background</p>
      <RadioGroup.Root
        defaultChecked
        defaultValue={backs[0].path}
        onValueChange={props.onChange}
        className={'z-30 flex flex-col items-start space-y-5'}
      >
        {backs.map((val, idx) => {
          return <Option val={val.path} name={val.name} idx={idx} key={idx} />
        })}
      </RadioGroup.Root>
    </div>
  )
}

const OptionContent = (props: { path: string }) => {
  return (
    <div>
      <a href={props.path} download={props.path?.slice(1)} className="flex items-center space-x-3 hover:opacity-50">
        <BsDownload className="text-accent-original h-8 w-8 ml-3" />
        <p className="text-accent-original text-sm tracking-wide">Download this model</p>
      </a>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={32} />
      </TwitterShareButton>
      <Audio />
    </div>
  )
}

export const GallaryDrawer: FC<Props> = ({ isOpen, onBackChange, onCityChange, cityPath }) => {
  const titles: string[] = ['city', 'background', 'option']
  const childrens: ReactNode[] = [
    <CityContent onChange={onCityChange} />,
    <BackContent onChange={onBackChange} />,
    <OptionContent path={cityPath} />
  ]
  return <Drawer isOpen={isOpen} titles={titles} childrens={childrens} />
}

export default GallaryDrawer
