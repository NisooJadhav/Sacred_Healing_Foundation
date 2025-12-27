"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

function StarField() {
  const ref = useRef<any>(null);
  // `maath/random.inSphere` returns a TypedArray (Float32Array or Float64Array depending
  // on environment). Three.js / @react-three/fiber expects positions as Float32Array.
  // We pass a Float32Array buffer and assert the returned typed array as Float32Array
  // because maath writes into the provided buffer. This removes the TypedArray union
  // ambiguity that causes overload incompatibilities (e.g. findLast) between Float32/64.
  const sphere = random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 }) as Float32Array;

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <StarField />
      </Canvas>
    </div>
  );
}