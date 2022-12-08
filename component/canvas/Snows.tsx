type SnowProps = {
  position: [number, number, number]
}

const generateRandomSpherePosition = (): [number, number, number] => {
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

const generateSnowPosition = (): [number, number, number] => {
  const scale = 18
  const offsetY = 5
  let [x, y, z] = generateRandomSpherePosition()
  x = x * scale
  y = y * scale + offsetY
  z = z * scale

  return [x, y, z]
}

const Snow = ({ position }: SnowProps) => {
  return (
    <mesh position={position}>
      <sphereBufferGeometry args={[0.03, 24, 24]} />
      <meshStandardMaterial color={'white'} />
    </mesh>
  )
}

const Snows = () => {
  const snows = [...Array(500)].map((v, i) => {
    return <Snow key={i} position={generateSnowPosition()} />
  })
  return <>{snows}</>
}

export default Snows
