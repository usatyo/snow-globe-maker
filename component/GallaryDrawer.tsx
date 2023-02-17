import * as RadioGroup from '@radix-ui/react-radio-group'
import { FC, ReactNode } from 'react'
import { BsCloudDownload } from 'react-icons/bs'
import { TwitterIcon, TwitterShareButton } from 'react-share'

import { scenes, cities, shareUrl } from '../constant/constant'

import Audio from './Audio'
import Drawer from './Drawer'

type Props = {
  isOpen: boolean
  cityPath: string
  onCityChange: (city: string) => void
  onSceneChange: (scene: string) => void
  scenePath: string
}

const Option = (props: { val: string; name: string; ruby: string; idx: number }) => {
  return (
    <div key={props.idx} className="flex flex-col items-end space-y-1 ml-6">
      <div className="flex flex-row items-center space-x-3 md:w-56">
        <RadioGroup.Item
          value={props.val}
          id={props.name}
          className="bg-base-dark rounded-full w-4 h-4 border-2 border-accent-original hover:opacity-70 mr-0.5 transition-all duration-300 "
        >
          <RadioGroup.Indicator className="flex justify-center items-center h-full w-full after:h-full after:w-full after:bg-white after:rounded-full" />
        </RadioGroup.Item>
        <label
          className="text-[1.7rem] font-italianno text-accent-original font-mono hover:opacity-50 tracking-wider text-center transition-all duration-300 whitespace-nowrap"
          htmlFor={props.name}
        >
          {props.name}
        </label>
        <p className="text-[0.7rem] text-accent-original tracking-wider whitespace-nowrap">{props.ruby}</p>
      </div>
    </div>
  )
}

const CityContent = (props: { onChange: (city: string) => void, cityPath:string }) => {
  return (
    <div>
      <RadioGroup.Root
        defaultChecked
        defaultValue={props.cityPath}
        onValueChange={props.onChange}
        className="z-30 flex flex-col items-start space-y-5"
      >
        {cities.map((val, idx) => {
          return <Option val={val.gltfPath} name={val.name} ruby={val.ruby} key={idx} idx={idx} />
        })}
      </RadioGroup.Root>
    </div>
  )
}

const SceneContent = (props: { onChange: (city: string) => void, scenePath: string }) => {
  return (
    <div>
      <RadioGroup.Root
        defaultChecked
        defaultValue={props.scenePath}
        onValueChange={props.onChange}
        className={'z-30 flex flex-col items-start space-y-5'}
      >
        {scenes.map((val, idx) => {
          return <Option val={val.path} name={val.name} ruby={val.ruby} idx={idx} key={idx} />
        })}
      </RadioGroup.Root>
    </div>
  )
}

const OptionContent = (props: { path: string }) => {
  console.log(props.path)
  return (
    <div className="flex flex-col space-y-10 items-start mx-auto">
      <Audio className=" hover:opacity-70 w-64 transition-all duration-300" />
      <a
        href={props.path}
        download={props.path?.slice(1)}
        className="flex items-center space-x-3 hover:opacity-70 w-64 transition-all duration-300"
      >
        <BsCloudDownload className="text-accent-original h-8 w-8 ml-3" />
        <p className="text-accent-original text-md tracking-wide">Download this model</p>
      </a>
      <TwitterShareButton
        url={shareUrl}
        title={'あなただけのスノードームを作りましょう！！\n#snow_city #PLATEAU\n\n'}
        className="flex items-center space-x-3 hover:opacity-70 w-64 transition-all duration-300"
      >
        <TwitterIcon size={32} className="ml-3" />
        <p className="text-accent-original text-md tracking-wide">Share this model</p>
      </TwitterShareButton>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-show-count="false">
        Tweet
      </a>
    </div>
  )
}

export const GallaryDrawer: FC<Props> = ({ isOpen, onSceneChange, onCityChange, cityPath, scenePath }) => {
  const titles: string[] = ['City', 'Scene', 'Option']
  const childrens: ReactNode[] = [
    <CityContent onChange={onCityChange} cityPath={cityPath} />,
    <SceneContent onChange={onSceneChange} scenePath={scenePath} />,
    <OptionContent path={cityPath} />
  ]
  return <Drawer isOpen={isOpen} titles={titles} childrens={childrens} />
}

export default GallaryDrawer
