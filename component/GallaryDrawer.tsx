import * as RadioGroup from '@radix-ui/react-radio-group'
import { FC, ReactNode } from "react"
import { TbCloudDownload } from 'react-icons/tb'
import { BsCloudDownload } from 'react-icons/bs'
import { TwitterIcon, TwitterShareButton } from 'react-share'
import { scenes, cities, shareUrl } from "../constant/constant"
import Audio from './Audio'
import Drawer from "./Drawer"

type Props = {
  isOpen: boolean
  cityPath: string
  onCityChange: (city: string) => void
  onSceneChange: (scene: string) => void
}

const Option = (props: { val: string; name: string; idx: number }) => {
  return (
    <div key={props.idx} className="mx-auto">
      <div className=" flex flex-row items-center space-x-3 w-36">
        <RadioGroup.Item
          value={props.val}
          id={props.name}
          className="bg-base-dark rounded-full w-4 h-4 border-2 border-accent-original hover:opacity-70 mr-0.5 transition-all duration-300 "
        >
          <RadioGroup.Indicator className="flex justify-center items-center h-full w-full after:h-full after:w-full after:bg-white after:rounded-full" />
        </RadioGroup.Item>
        <label
          className="text-[1.7rem] font-italianno text-accent-original font-mono hover:opacity-50 tracking-wider text-center transition-all duration-300"
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

const SceneContent = (props: { onChange: (city: string) => void }) => {
  return (
    <div>
      <RadioGroup.Root
        defaultChecked
        defaultValue={scenes[0].path}
        onValueChange={props.onChange}
        className={"z-30 flex flex-col items-start space-y-5"}
      >
        {scenes.map((val, idx) => {
          return <Option val={val.path} name={val.name} idx={idx} key={idx} />
        })}
      </RadioGroup.Root>
    </div>
  )
}

const OptionContent = (props: { path: string }) => {
  return (
    <div className='flex flex-col space-y-10 items-start'>
      <div className='mx-auto'>
        <Audio className='w-64' />
      </div>
      <div className='mx-auto'>
        <a href={props.path} download={props.path?.slice(1)} className="flex items-center space-x-3 hover:opacity-50 w-64">
          <BsCloudDownload className="text-accent-original h-8 w-8 ml-3" />
          <p className="text-accent-original text-md tracking-wide">Download this model</p>
        </a>
      </div>
      <div className='mx-auto'>

        <TwitterShareButton url={shareUrl} className="flex items-center space-x-3 hover:opacity-50 w-64">
          <TwitterIcon size={32} className="ml-3" />
          <p className="text-accent-original text-md tracking-wide">Share this model</p>
        </TwitterShareButton>
      </div>
    </div>
  )
}

export const GallaryDrawer: FC<Props> = ({ isOpen, onSceneChange, onCityChange, cityPath }) => {
  const titles: string[] = [
    "City",
    "Scene",
    "Option"
  ]
  const childrens: ReactNode[] = [
    <CityContent onChange={onCityChange} />,
    <SceneContent onChange={onSceneChange} />,
    <OptionContent path={cityPath} />
  ]
  return (
    <Drawer isOpen={isOpen} titles={titles} childrens={childrens} />
  )
}

export default GallaryDrawer