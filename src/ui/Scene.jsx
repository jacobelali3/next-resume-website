/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Janis Zeps (https://sketchfab.com/zeps9001)
license: SKETCHFAB Standard (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/wall-eanimated-a6758de2e5a04f9e821596592ef4279c
title: Wall-E(Animated)
*/

import { useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Model({ ...props }) {
  const { animations, scene } = useGLTF('/assets/walle/scene.gltf')
  const { actions } = useAnimations(animations, scene)
  useFrame((state, delta) => {
    const { clock } = state
    scene.rotation.y = clock.getElapsedTime() * 0.6
  })

  useEffect(() => {
    actions.Scene.play()
  })
  return (
    <primitive {...props} object={scene} />
  )
}

useGLTF.preload('/assets/walle/scene.gltf')
