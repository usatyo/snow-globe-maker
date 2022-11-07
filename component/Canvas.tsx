import { FC } from "react"
import Crystal from "./Crystal"

type Props = {
  className?: string
}

export const Canvas: FC<Props> = ({ className }) => {
  return (
    <div className={`relative h-full w-full flex flex-row ${className}`}>
      <div className="absolute top-10 bottom-10 left-10 right-11 z-30 bg-black items-stretch">
        <p className="m-10 text-white text-3xl">three.js</p>
      </div>
      <Crystal />
    </div>
  )
}

export default Canvas