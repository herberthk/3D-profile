"use client";
import React, { FC, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

type BallProps = {
  imgUrl: string;
};

const Ball: FC<BallProps> = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  // Cleanup texture on unmount
  useEffect(() => {
    return () => {
      if (decal) {
        decal.dispose();
      }
    };
  }, [decal]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

type Props = {
  icon: string;
};

const BallCanvas: FC<Props> = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        antialias: false, // Disable for better performance
        powerPreference: "high-performance",
      }}
      performance={{ min: 0.8 }} // Adaptive performance
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableDamping dampingFactor={0.05} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
