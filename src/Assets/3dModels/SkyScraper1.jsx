import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/skyscraper1.gltf");

    const [mainColor, setMainColor] = useState("#d4c03f");
    const [secondColor, setSecondColor] = useState("#5c5b54");

  return (
    <motion.group {...props} dispose={null}
        onPointerEnter={() => {
            setMainColor("#2a55b0");
            setSecondColor("#9a9a9a");
        }}
        onPointerLeave={() => {
            setMainColor("#d4c03f");
            setSecondColor("#5c5b54");
        }}
        animate={{
            rotateY: [0,Math.PI * 2],
            transition: {
                duration: 18,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0
            }
        }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh026.geometry}
        material={materials["matte_white.001"]}
      >
            <motion.meshBasicMaterial attach="material"
              animate={{
                  color: secondColor
              }}/>
      </mesh>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh026_1.geometry}
        material={materials.Cemento}
        >
            <meshBasicMaterial attach="material" color="#000" />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh026_2.geometry}
        material={materials.Acciaio}
        >
            <motion.meshBasicMaterial attach="material"
              animate={{
                  color: secondColor
              }}/>
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh026_3.geometry}
        material={materials["glass_architectural.005"]}
        >
            <motion.meshBasicMaterial attach="material" 
                animate={{
                    color: mainColor
                }}/>
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh026_4.geometry}
        material={materials.Glossy}
        >
            <motion.meshBasicMaterial attach="material"
                animate={{
                    color: mainColor
                }}/>
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh026_5.geometry}
        material={materials["Acciaio.001"]}
        >
            <motion.meshBasicMaterial attach="material"
                animate={{
                    color: secondColor
                }}/>
        </mesh>
    </motion.group>
  );
}

useGLTF.preload("/skyscraper1.gltf");