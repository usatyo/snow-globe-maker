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
        <BsChevronDoubleLeft color="white" size={30} onClick={onClick} className={className} />
      ) : (
        <BsChevronDoubleRight color="white" size={30} onClick={onClick} className={className} />
      )}
    </>
  )
}

export default FullScreenButton
