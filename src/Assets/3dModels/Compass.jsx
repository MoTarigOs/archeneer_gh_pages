import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from 'framer-motion-3d';

export default function Compass(props) {
  const { nodes, materials } = useGLTF("/compass.glb");
  return (
    <Suspense>
      <motion.group {...props} dispose={null}
      initial={{
          rotateY: 0
        }}
    
        animate={{
          rotateY: -Math.PI * 2
        }}
    
        transition={{
          duration: 3.75,
          ease: "linear"
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["16739_compass_for_drawing_circles_v1"].geometry}
          material={nodes["16739_compass_for_drawing_circles_v1"].material}
          rotation={[-0.213, 0, 0]}
        >
          <meshLambertMaterial attach="material" color="#e6ed1c"  />
        </mesh>
      </motion.group>
    </Suspense>
  );
}

useGLTF.preload("/compass.glb");