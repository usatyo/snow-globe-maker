import { FC } from 'react'
import { BsSnow2, BsDownload } from 'react-icons/bs'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { cities } from '../constant/constant'

type Props = {
  onChange?: (val: string) => void
  className?: string
}

export const Drawer: FC<Props> = ({ onChange, className }) => {
  return (
    <RadioGroup.Root
      defaultChecked
      defaultValue={cities[0].gltfPath}
      onValueChange={onChange}
      className={`z-30 flex flex-col items-start space-y-7 bg-base-light/30 w-[500px] h-full p-10 ${className}`}
    >
      {cities.map((val, idx) => {
        return (
          <div key={idx} className="flex flex-col items-end space-y-1">
            <div className="flex flex-row justify-around items-center space-x-3 border-b-2 border-ice-dark pl-2">
              <RadioGroup.Item
                value={val.gltfPath}
                id={val.name}
                className="bg-ice-light rounded-full w-5 h-5 border-4 border-accent-original hover:opacity-50"
              >
                <RadioGroup.Indicator className="flex justify-center items-center h-full w-full after:h-full after:w-full after:bg-base-dark after:rounded-full" />
              </RadioGroup.Item>
              <label className="text-xl text-ice-dark font-mono hover:opacity-50" htmlFor={val.name}>
                {val.name}
              </label>
              <BsSnow2 className="-z-10 text-ice-original h-5 w-5 rotate-[25deg] translate-y-2 ml-3" />
            </div>
            <a href="/tokyo.gltf" download="tokyo.gltf" className="flex items-center space-x-1 hover:opacity-50">
              <BsDownload className="-z-10 text-ice-dark h-4 w-4 ml-3" />
              <p className="text-ice-dark text-sm">download gltf</p>
            </a>
          </div>
        )
      })}
    </RadioGroup.Root>
  )
}

export default Drawer
