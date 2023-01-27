import { useState } from 'react'
import { TbMusic, TbMusicOff } from 'react-icons/tb'
import useSound from 'use-sound'

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { stop }] = useSound('/night.mp3', { loop: true, interrupt: true, volume: 0.3 })
  return (
    <div>
      {isPlaying ? (
        <button
          onClick={() => {
            setIsPlaying(false)
            stop()
            console.log(isPlaying)
          }}
          className="flex items-center space-x-3 hover:opacity-50"
        >
          <TbMusic className="text-accent-original h-8 w-8 ml-3" />
          <p className="text-accent-original text-md tracking-wide">SOUND</p>
        </button>
      ) : (
        <button
          onClick={() => {
            setIsPlaying(true)
            play()
            console.log(isPlaying)
          }}
          className="flex items-center space-x-3 hover:opacity-50"
        >
          <TbMusicOff className="text-accent-original h-8 w-8 ml-3" />
          <p className="text-accent-original text-md tracking-wide">SOUND</p>
        </button>
      )}
    </div>
  )
}
export default Audio
