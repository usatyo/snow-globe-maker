import { FC } from "react"
import { BsSnow2 } from "react-icons/bs"
const cities: Array<string> = ["Tokyo", "Sapporo"]

type Props = {
  className?: string
}

export const Drawer: FC<Props> = ({ className }) => {
  return (
    <div className={`bg-base-original w-[500px] h-full p-3 z-10 ${className}`}>
      {cities.map((value) => {
        return (
          <div>
            <span>{value}</span>
            <BsSnow2 className="inline text-white h-4 w-4" />
          </div>
        )
      })}
    </div>
  )
}

export default Drawer