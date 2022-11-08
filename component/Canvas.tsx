import Image from "next/image"
import { FC, useEffect, useRef } from "react"
import Crystal from "./Crystal"
import sampleImg from "../assets/sample.png"
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three"

type Props = {
  city?: string
  className?: string
}

export const Canvas: FC<Props> = ({ city, className }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const scene = new Scene()
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new WebGLRenderer()
    renderer.setSize(containerRef.current?.clientWidth ?? 100, containerRef.current?.clientHeight ?? 100)
    containerRef?.current?.appendChild(renderer.domElement)
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    renderer.render(scene, camera)
    return () => {
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className={`relative h-full w-full flex flex-row ${className}`}>
      <div className="absolute top-10 bottom-10 left-10 right-11 z-30 bg-black items-stretch border-2 border-accent-original">
        <div ref={containerRef} className="h-full w-full"></div>
      </div>
      <Crystal />
    </div>
  )
}

export default Canvas