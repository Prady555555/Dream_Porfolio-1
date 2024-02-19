import { useRef } from "react";

import sky from "../assets/3d/sky.glb";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
const Sky = ({ isRotating }) => {
  const skyScene = useGLTF(sky);
  const ref = useRef();
  useFrame((_, delta) => {
    if (isRotating) {
      ref.current.rotation.y += 0.25 * delta;
    }
  });
  return (
    <mesh ref={ref}>
      <primitive object={skyScene.scene} />
    </mesh>
  );
};

export default Sky;
