import { useState } from 'react'
import { TbMusic, TbMusicOff } from 'react-icons/tb'
import useSound from 'use-sound'

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { stop }] = useSound('/santa.mp3', { loop: true, interrupt: true, volume: 0.3 })
  return (
    <div className="absolute bottom-10 right-10 z-10">
      {isPlaying ? (
        <button
          onClick={() => {
            setIsPlaying(false)
            stop()
            console.log(isPlaying)
          }}
          className="pointer"
        >
          <TbMusic style={{ width: '40px', height: '40px', color: '#CEBF7E' }} />
        </button>
      ) : (
        <button
          onClick={() => {
            setIsPlaying(true)
            play()
            console.log(isPlaying)
          }}
          className="pointer "
        >
          <TbMusicOff style={{ width: '40px', height: '40px', color: '#CEBF7E' }} />
        </button>
      )}
    </div>
  )
}
export default Audio
