'use client';
import Scene from './Scene.jsx'
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";


function WallE() {

  const [WallEAudioList, setAudio] = useState(null)

  useEffect(() => {

    setAudio([new Audio("../assets/walle/sounds/wallE-1.MP3"),new Audio("../assets/walle/sounds/wallE-2.MP3"), new Audio("../assets/walle/sounds/wallE-3.MP3")])}, [])
  return (

    <div className="mt-12 h-60 animate-beat">
    <p className="text-md text-center italic animate-pulse">Click me! 🔊</p>
    <Canvas camera={{pov: 100, position: [3, 3, 6.5] }}
    onClick={() => WallEAudioList[Math.floor(Math.random() * WallEAudioList.length)].play()}>
      <Suspense fallback={null}>

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
        <Stars radius={200} saturation={500} />
        <ambientLight intensity={1} />
        <directionalLight />

        <Scene position={[1, -1, 2]}></Scene>
      </Suspense>
    </Canvas>
  </div>
  )
}

export default WallE