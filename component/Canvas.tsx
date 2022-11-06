import { FC } from "react"

type Props = {
  className?: string
}

export const Canvas:FC<Props> = ({className}) => {
  return (
    <div className={`relative p-10 h-full w-full flex flex-row ${className}`}>
      <div className="absolute top-10 left-10 bottom-10 right-10 bg-white items-stretch">
      </div>
    </div>
  )
}

export default Canvas