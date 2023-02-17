import { BsSnow2 } from 'react-icons/bs'

export const Crystal = () => {
  return (
    <div>
      {[...Array(50)].map((_, idx) => {
        const scale = Math.random()
        const right = (Math.random() * 10) ** 2
        const bottom = (150 / right) * Math.random()
        return (
          <BsSnow2
            key={idx}
            className="absolute h-20 w-20 md:h-40 md:w-40 text-base-light text-opacity-20 z-30"
            style={{
              right: `${right - 5}%`,
              bottom: `${bottom - 5}%`,
              transform: `scale(${scale}) rotate(${Math.random() * 60}deg)`,
              filter: `blur(${scale * 5}px)`
            }}
          />
        )
      })}
    </div>
  )
}

export default Crystal
