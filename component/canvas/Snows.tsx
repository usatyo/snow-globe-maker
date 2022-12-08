import { forwardRef, useRef, RefObject, createRef } from 'react'
import { useFrame } from '@react-three/fiber'

type Vector3 = [number, number, number]
type SnowProps = {
  position: Vector3
}

const generateRandomSpherePosition = (): Vector3 => {
  let x = 0,
    y = 0,
    z = 0
  while (1) {
    x = Math.random() - 0.5
    y = Math.random() - 0.5
    z = Math.random() - 0.5
    if (x * x + y * y + z * z <= 0.5 * 0.5) break
  }

  return [x, y, z]
}

const generateSnowPosition = (): Vector3 => {
  const scale = 18
  const offsetY = 5
  let [x, y, z] = generateRandomSpherePosition()
  x = x * scale
  y = y * scale + offsetY
  z = z * scale

  return [x, y, z]
}

const Snow = forwardRef<THREE.Mesh, SnowProps>(({ position }, ref) => {
  return (
    <mesh position={position} ref={ref}>
      <sphereBufferGeometry args={[0.06, 24, 24]} />
      <meshStandardMaterial color={'white'} />
    </mesh>
  )
})

const Snows = () => {
  const numberOfSnow = 300
  const snowsBase = [...new Array(numberOfSnow)]
  const snowRefs = useRef<RefObject<THREE.Mesh>[]>([])

  snowsBase.forEach((_, i) => {
    snowRefs.current[i] = createRef()
  })

  // 雪が降るアニメーション
  useFrame(() => {
    snowRefs.current.forEach((ref) => {
      if (!ref.current) return
      const minY = -3
      const maxY = 12
      const stepY = 0.01
      const y = ref.current.position.y
      if (y < minY) {
        ref.current.position.y = maxY
      } else {
        ref.current.position.y -= stepY
      }
    })
  })

  return (
    <>
      {snowsBase.map((_, i) => {
        return <Snow position={generateSnowPosition()} key={i} ref={snowRefs.current[i]} />
      })}
    </>
  )
}

export default Snows
