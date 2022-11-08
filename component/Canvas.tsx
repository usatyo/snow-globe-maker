import Image from "next/image"
import { FC } from "react"
import Crystal from "./Crystal"
import sampleImg from "../assets/sample.png"

type Props = {
  className?: string
}

export const Canvas: FC<Props> = ({ className }) => {
  return (
    <div className={`relative h-full w-full flex flex-row ${className}`}>
      <div className="absolute top-10 bottom-10 left-10 right-11 z-30 bg-black items-stretch border-2 border-accent-original">
        <Image src={sampleImg} alt="sample" layout="fill" objectFit="cover" />
      </div>
      <Crystal />
    </div>
  )
}

export default Canvas