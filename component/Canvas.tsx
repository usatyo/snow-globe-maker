import { FC, useEffect, useRef } from "react"
import Crystal from "./Crystal"
import { BoxGeometry, DirectionalLight, Mesh, MeshStandardMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

type Props = {
  city?: string
  className?: string
}

export const Canvas: FC<Props> = ({ city, className }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!containerRef.current) throw Error("no ref")
    const renderer = new WebGLRenderer()
    const scene = new Scene();
    containerRef.current.appendChild(renderer.domElement)
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)

    // カメラを作成
    const camera = new PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 1, 10000);
    camera.position.set(0, 0, +1000);

    // 球体を作成
    const geometry = new BoxGeometry(300, 300, 300);
    const material = new MeshStandardMaterial({ color: 0xFF0000 });
    // メッシュを作成
    const mesh = new Mesh(geometry, material);
    // 3D空間にメッシュを追加
    scene.add(mesh);

    // 平行光源
    const directionalLight = new DirectionalLight(0xFFFFFF);
    directionalLight.position.set(1, 1, 1);
    // シーンに追加
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 0, 0)
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