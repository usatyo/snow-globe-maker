import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'
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
        <AiOutlineFullscreenExit color="white" size={50} onClick={onClick} className={className} />
      ) : (
        <AiOutlineFullscreen color="white" size={50} onClick={onClick} className={className} />
      )}
    </>
  )
}

export default FullScreenButton
