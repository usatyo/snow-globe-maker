import { useState } from 'react'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import useSound from 'use-sound'

const Audio = (props: { className?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { stop }] = useSound('/night.mp3', { loop: true, interrupt: true, volume: 0.3 })
  return (
    <div>
      <button
        onClick={() => {
          setIsPlaying(!isPlaying)
          if (isPlaying) {
            stop()
          } else {
            play()
          }
          console.log(isPlaying)
        }}
        className={`flex items-center space-x-3 ${props.className}`}
      >
        <BsMusicNoteBeamed className="text-accent-original h-8 w-8 ml-3" />
        <p className="text-accent-original text-md tracking-wide">Sound:{" "}
          <span className="text-xl">
            {isPlaying ? "ON" : "OFF"}
          </span>
        </p>
      </button>
    </div>
  )
}
export default Audio
