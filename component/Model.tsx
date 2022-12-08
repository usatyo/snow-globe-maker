/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export const Model = (props: any) => {
  const { scene } = useGLTF('/tokyo.gltf')
  
  return <primitive {...props} object={scene} />
}

useGLTF.preload('/model.glb')

export default Model