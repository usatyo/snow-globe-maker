import { useState } from 'react'
import { TbMusic, TbMusicOff } from 'react-icons/tb'
import useSound from 'use-sound'

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { stop }] = useSound('/night.mp3', { loop: true, interrupt: true, volume: 0.3 })
  return (
    <div className="absolute bottom-10 right-10 z-50">
      {isPlaying ? (
        <button
          onClick={() => {
            setIsPlaying(false)
            stop()
            console.log(isPlaying)
          }}
          className="pointer text-align-center"
        >
          <TbMusic style={{ width: '45px', height: '45px', color: '#CEBF7E' }} />
          <p className="text-sm text-[#CEBF7E]">SOUND</p>
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
          <TbMusicOff style={{ width: '45px', height: '45px', color: '#CEBF7E', alignItems: 'center' }} />
          {/* <p className="text-sm text-[#CEBF7E]">SOUND</p> */}
        </button>
      )}
    </div>
  )
}
export default Audio
