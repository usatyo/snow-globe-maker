import { FC } from "react"
import { BsSnow2 } from "react-icons/bs"
import * as RadioGroup from '@radix-ui/react-radio-group';

const cities: Array<string> = ["Tokyo", "Sapporo", "Sendai", "Niigata"]

type Props = {
  className?: string
}

export const Drawer: FC<Props> = ({ className }) => {
  return (
    <RadioGroup.Root className={`z-30 flex flex-col items-start space-y-7 bg-base-light/30 w-[500px] h-full p-10 ${className}`}>
      {cities.map((val) => {
        return (
          <div key={val} className="flex flex-row justify-around items-center space-x-3 border-b-8 border-ice-original rounded pl-2">
            <RadioGroup.Item value={val} id={val} className="bg-white rounded-full w-5 h-5">
              <RadioGroup.Indicator className="flex justify-center items-center h-full w-full after:h-1/2 after:w-1/2 after:bg-black after:rounded-full" />
            </RadioGroup.Item>
            <label className="text-xl text-ice-dark font-mono" htmlFor={val}>{val}</label>
            <BsSnow2 className="inline text-ice-original h-5 w-5 rotate-12 translate-y-2 ml-3" />
          </div>
        )
      })}
    </RadioGroup.Root>
  )
}

export default Drawer