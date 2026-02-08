import { useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


export default function Model({ ...props }) {
  const { animations, scene } = useGLTF('/assets/walle/scene.gltf')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    scene.rotation.y = Math.PI * 0.15
    actions.Scene.play()
  }, [actions, scene])
  return (
    <primitive {...props} object={scene} />
  )
}

useGLTF.preload('/assets/walle/scene.gltf')
