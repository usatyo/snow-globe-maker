import { FC, useEffect, useRef, useState } from "react";
import Crystal from "./Crystal";
import {
  AmbientLight,
  BufferGeometry,
  CubeTextureLoader,
  Float32BufferAttribute,
  PerspectiveCamera,
  PointLight,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type Props = {
  path: string;
  onLoading?: (percent: number) => void;
  onError?: (error: ErrorEvent) => void;
  className?: string;
};

export const Canvas: FC<Props> = ({ path, onLoading, onError, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) throw Error("no ref");
    const renderer = new WebGLRenderer({ antialias: true });
    const scene = new Scene();
    containerRef.current.appendChild(renderer.domElement);
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);

    // カメラを作成
    const camera = new PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 10);

    // ICO球の作成
    // const geometry = new IcosahedronGeometry(2, 5)
    // const material = new MeshBasicMaterial({
    //   blending: NormalBlending,
    //   transparent: true,
    //   opacity: 0.4,
    // })
    // const sphere = new Mesh(geometry, material)
    // scene.add(sphere)

    // gltfファイルの読み込み、シーンへの追加
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      path,
      (tmpGltf) => {
        const model = tmpGltf.scene;
        scene.add(model);
        console.log("gltf loaded");
      },
      (xhr) => {
        // オブジェクトを読み込んでいるタイミングで実行
        onLoading?.((xhr.loaded / xhr.total) * 100);
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        // 読み込みエラー時
        onError?.(error);
        console.log(error);
      }
    );

    // 背景画像の読み込み、設定
    const skyLoader = new CubeTextureLoader();
    skyLoader.load(
      ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
      (tmpTexture) => {
        scene.background = tmpTexture;
        console.log("texture loaded");
      },
      () => {},
      (error) => {}
    );

    // ライトを作成
    const pointLight1 = new PointLight(0xffffff, 1, 1, 0.3);
    pointLight1.position.set(2, 1, 2);
    scene.add(pointLight1);

    const pointLight2 = new PointLight(0xffffff, 5, 10, 0.3);
    pointLight2.position.set(2, 1, -2);
    scene.add(pointLight2);

    const pointLight3 = new PointLight(0xffffff, 5, 10, 0.3);
    pointLight3.position.set(-2, 1, 0);
    scene.add(pointLight3);

    const ambientLight = new AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    // コントロール（回転のみ許可）
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.enableDamping = true;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 6;
    controls.dampingFactor = 0.2;

    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    tick();

    return () => {
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [path]);

  return (
    <div className={`relative h-full w-full flex flex-row ${className}`}>
      <div className="absolute top-10 bottom-10 left-10 right-11 z-30 bg-black items-stretch border-2 border-accent-original">
        <div ref={containerRef} className="h-full w-full"></div>
      </div>
      <Crystal />
    </div>
  );
};

export default Canvas;
