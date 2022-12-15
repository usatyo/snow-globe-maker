import React from 'react'
import { useGLTF } from '@react-three/drei'
import { PrimitiveProps } from '@react-three/fiber'
import { cities } from '../../constant/constant'

export const Model = (props: PrimitiveProps & { path: string }) => {
  const { scene } = useGLTF(props.path)

  return <primitive {...props} object={scene} />
}

cities.map((val) => {
  useGLTF.preload(val.gltfPath)
})

export default Model
