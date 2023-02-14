import React, { FC } from 'react'
import { useGLTF } from '@react-three/drei'
import { PrimitiveProps } from '@react-three/fiber'
import { cities } from '../../constant/constant'

type ModelProps = PrimitiveProps & {
  path: string
}

export const Model: FC<ModelProps> = (props) => {
  const { scene } = useGLTF(props.path)

  return <primitive {...props} object={scene} />
}

cities.map((val) => {
  useGLTF.preload(val.gltfPath)
})

export default Model
