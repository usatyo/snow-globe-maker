// import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs'
import { FC } from 'react'

type FullScreenButtonProps = {
  isFullScreen: boolean
  onClick?: () => void
  className?: string
}

const FullScreenButton: FC<FullScreenButtonProps> = ({ isFullScreen, onClick, className }) => {
  return (
    <>
      {isFullScreen ? (
        <BsChevronDoubleLeft size={30} onClick={onClick} className={`${className} mix-blend-difference text-white`} />
      ) : (
        <BsChevronDoubleRight size={30} onClick={onClick} className={`${className} mix-blend-difference text-white`} />
      )}
    </>
  )
}

export default FullScreenButton
