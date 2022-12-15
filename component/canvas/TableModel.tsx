import React from 'react'
import { useGLTF } from '@react-three/drei'
import { PrimitiveProps } from '@react-three/fiber'

const TABLE_MODEL_PATH = '/table.glb'

export const TableModel = (props: PrimitiveProps) => {
  const { scene } = useGLTF(TABLE_MODEL_PATH)

  return <primitive {...props} object={scene} />
}

useGLTF.preload(TABLE_MODEL_PATH)

export default TableModel
