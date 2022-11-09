import { FC, useEffect, useRef } from "react"
import Crystal from "./Crystal"
import { DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

type Props = {
  city?: string
  className?: string
}

export const Canvas: FC<Props> = ({ city, className }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!containerRef.current) throw Error("no ref")
    const renderer = new WebGLRenderer()
    const scene = new Scene()
    containerRef.current.appendChild(renderer.domElement)
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)

    // カメラを作成
    const camera = new PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 1, 1000)
    camera.position.set(0, 0, 10)

    const loader = new GLTFLoader()

    loader.load(
      "monkey.gltf",
      (tmpGltf) => {
        scene.add(tmpGltf.scene)
        console.log("loaded")
      }, () => { },
      (error) => {
        console.log(error)
      }
    )


    // 平行光源
    const directionalLight = new DirectionalLight(0xFFFFFF)
    directionalLight.position.set(1, 1, 1)
    // シーンに追加
    scene.add(directionalLight)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 0, 0)
    controls.enablePan = false
    controls.enableZoom = false
    controls.enableDamping = true
    controls.dampingFactor = 0.2

    const tick = () => {
      controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(tick)
    }

    tick()

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