import { forwardRef, useRef, RefObject, createRef } from 'react'
import { useFrame } from '@react-three/fiber'

type Vector3 = [number, number, number]
type SnowProps = {
  position: Vector3
  size: number
}

// 定数
const SNOW_POSITION_SCALE = 21.5
const SNOW_OFFSET_FROM_ORIGIN: Vector3 = [0, 3, 0]
const SNOW_NUMBER = 1000
const SNOW_MIN_POSITION_Y = -2
const SNOW_SPEED = 0.005

const inSnowGlobe = (position: Vector3, r: number, offset: Vector3) => {
  const x = position[0] - offset[0]
  const y = position[1] - offset[1]
  const z = position[2] - offset[2]
  return x * x + y * y + z * z <= r * r
}

// -0.5 <= x,y,z <= 0.5, x^2+y^2+z^2=0.5^2 で生成
const generateRandomSpherePosition = (): Vector3 => {
  let x = 0,
    y = 0,
    z = 0
  while (1) {
    x = Math.random() - 0.5
    y = Math.random() - 0.5
    z = Math.random() - 0.5
    if (inSnowGlobe([x, y, z], 0.5, [0, 0, 0])) break
  }

  return [x, y, z]
}

const generateRandomTopSpherePosition = (): Vector3 => {
  const x = (Math.random() - 0.5) * 0.8
  const z = (Math.random() - 0.5) * 0.8
  const y = Math.sqrt(0.5 * 0.5 - x * x - z * z) * 0.99 // 0.99は境界チェックを避けるため
  return [x, y, z]
}

const generateSnowPosition = (isInitial?: boolean): Vector3 => {
  let [x, y, z] = isInitial ? generateRandomSpherePosition() : generateRandomTopSpherePosition()
  x = x * SNOW_POSITION_SCALE + SNOW_OFFSET_FROM_ORIGIN[0]
  y = y * SNOW_POSITION_SCALE + SNOW_OFFSET_FROM_ORIGIN[1]
  z = z * SNOW_POSITION_SCALE + SNOW_OFFSET_FROM_ORIGIN[2]

  return [x, y, z]
}

const Snow = forwardRef<THREE.Mesh, SnowProps>(({ position, size }, ref) => {
  return (
    <mesh position={position} ref={ref}>
      <sphereBufferGeometry args={[size, 24, 24]} />
      <meshStandardMaterial color={'white'} />
    </mesh>
  )
})

const Snows = () => {
  const snowsBase = [...new Array(SNOW_NUMBER)]
  const snowRefs = useRef<RefObject<THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>>[]>([])

  snowsBase.forEach((_, i) => {
    snowRefs.current[i] = createRef()
  })

  // 雪が降るアニメーション
  useFrame(() => {
    snowRefs.current.forEach((ref) => {
      if (!ref.current) return
      const position: Vector3 = [ref.current.position.x, ref.current.position.y, ref.current.position.z]
      if (
        !inSnowGlobe(position, 0.5 * SNOW_POSITION_SCALE, SNOW_OFFSET_FROM_ORIGIN) ||
        SNOW_MIN_POSITION_Y > position[1]
      ) {
        const np = generateSnowPosition(false)
        ref.current.position.x = np[0]
        ref.current.position.y = np[1]
        ref.current.position.z = np[2]
      } else {
        ref.current.position.y -= SNOW_SPEED
      }
    })
  })

  return (
    <>
      {snowsBase.map((_, i) => {
        return (
          <Snow size={Math.random() * 0.1} position={generateSnowPosition(true)} key={i} ref={snowRefs.current[i]} />
        )
      })}
    </>
  )
}

export default Snows
