/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { PrimitiveProps } from "@react-three/fiber";

export const Model = (props: PrimitiveProps) => {
  const { scene } = useGLTF("/tokyo.gltf");

  return <primitive {...props} object={scene} />;
};

useGLTF.preload("/model.glb");

export default Model;
