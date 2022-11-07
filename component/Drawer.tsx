import { FC } from "react"
import { BsSnow2 } from "react-icons/bs"
import * as RadioGroup from '@radix-ui/react-radio-group';

const cities: Array<string> = ["Sapporo", "Sendai", "Niigata", "Tokyo"]

type Props = {
  className?: string
}

export const Drawer: FC<Props> = ({ className }) => {
  return (
    <RadioGroup.Root defaultChecked defaultValue={cities[0]} className={`z-30 flex flex-col items-start space-y-7 bg-base-light/30 w-[500px] h-full p-10 ${className}`}>
      {cities.map((val) => {
        return (
          <div key={val} className="flex flex-row justify-around items-center space-x-3 border-b-2 border-ice-dark pl-2">
            <RadioGroup.Item value={val} id={val} className="bg-ice-light rounded-full w-5 h-5 border-4 border-accent-original hover:opacity-50">
              <RadioGroup.Indicator className="flex justify-center items-center h-full w-full after:h-full after:w-full after:bg-base-dark after:rounded-full" />
            </RadioGroup.Item>
            <label className="text-xl text-ice-dark font-mono hover:opacity-50" htmlFor={val}>{val}</label>
            <BsSnow2 className="-z-10 text-ice-original h-5 w-5 rotate-[25deg] translate-y-2 ml-3" />
          </div>
        )
      })}
    </RadioGroup.Root>
  )
}

export default Drawer