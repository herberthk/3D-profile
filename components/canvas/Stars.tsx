"use client";
import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Group } from "three";
// @ts-expect-error - maath types not available
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props: {}) => {
  const ref = useRef<Group>(null);

  // Memoize sphere generation to prevent recreation on re-renders
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(5000), { radius: 1.2 }),
    [],
  );

  // Optimize animation frame by reducing update frequency
  useFrame((state, delta) => {
    if (ref.current && state.clock.getElapsedTime() % 0.016 < delta) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} ref={ref}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]} // Limit device pixel ratio for performance
        performance={{ min: 0.8 }} // Adaptive performance
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
