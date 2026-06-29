import { Environment, Float, Lightformer, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import type { Group } from 'three';

function useReducedMotion() {
  const reduced = useRef(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduced.current = media.matches;
    const update = () => {
      reduced.current = media.matches;
    };
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return reduced;
}

function Artifact() {
  const group = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 0.5;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 0.35;
    };

    window.addEventListener('pointermove', handlePointer, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointer);
  }, []);

  useFrame((_, delta) => {
    if (!group.current || reduced.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x += (pointer.current.y - group.current.rotation.x) * 0.04;
    group.current.position.x += (pointer.current.x - group.current.position.x) * 0.05;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.55}>
        <mesh castShadow rotation={[0.72, 0.42, -0.28]}>
          <boxGeometry args={[2.3, 2.3, 2.3, 5, 5, 5]} />
          <MeshTransmissionMaterial
            anisotropicBlur={0.06}
            attenuationColor="#ffd0bb"
            attenuationDistance={1.4}
            backside
            chromaticAberration={0.025}
            clearcoat={0.9}
            color="#f47a50"
            distortion={0.1}
            ior={1.36}
            resolution={256}
            roughness={0.16}
            samples={4}
            thickness={0.36}
            transmission={0.88}
          />
        </mesh>
        <mesh rotation={[0.72, 0.42, -0.28]} scale={1.004}>
          <boxGeometry args={[2.3, 2.3, 2.3, 5, 5, 5]} />
          <meshBasicMaterial color="#fff2e8" transparent opacity={0.12} wireframe />
        </mesh>
        <mesh rotation={[1.2, 0.4, 0.25]}>
          <torusGeometry args={[1.85, 0.018, 16, 120]} />
          <meshBasicMaterial color="#151515" transparent opacity={0.35} />
        </mesh>
        <mesh position={[0.86, -0.64, 0.92]}>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial color="#151515" roughness={0.35} metalness={0.55} />
        </mesh>
      </Float>
    </group>
  );
}

function ParticleVeil() {
  const positions = useMemo(() => {
    const count = 120;
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (Math.random() - 0.5) * 6;
      values[index * 3 + 1] = (Math.random() - 0.5) * 4.6;
      values[index * 3 + 2] = (Math.random() - 0.5) * 3.2;
    }
    return values;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#151515" size={0.018} transparent opacity={0.32} sizeAttenuation />
    </points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.35]}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      performance={{ min: 0.7 }}
    >
      <ambientLight intensity={1.8} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      <directionalLight position={[-4, -2, 3]} intensity={0.7} color="#f06b43" />
      <Environment resolution={128}>
        <Lightformer color="#ffffff" intensity={2.2} position={[0, 2, 4]} scale={[5, 3, 1]} />
        <Lightformer color="#f06b43" intensity={1.4} position={[-3, -1, 2]} scale={[3, 2, 1]} />
        <Lightformer color="#151515" intensity={0.8} position={[4, 1, -2]} scale={[4, 2, 1]} />
      </Environment>
      <Sparkles count={28} scale={[4.5, 3.2, 2]} size={2.3} speed={0.18} opacity={0.32} color="#f06b43" />
      <ParticleVeil />
      <Artifact />
    </Canvas>
  );
}
