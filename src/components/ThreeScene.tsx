import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron, OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#ec4899" // pink
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.5;
      ref.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5}>
      <Torus ref={ref} args={[0.6, 0.2, 32, 64]} position={[2.5, 1, -1]}>
        <meshStandardMaterial color="#a855f7" metalness={0.9} roughness={0.2} />
      </Torus>
    </Float>
  );
}

function FloatingBox() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.8}>
      <Box ref={ref} args={[0.5, 0.5, 0.5]} position={[-2.5, -0.5, -0.5]}>
        <meshStandardMaterial color="#9333ea" metalness={0.8} roughness={0.2} />
      </Box>
    </Float>
  );
}

function FloatingIcosahedron() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2}>
      <Icosahedron ref={ref} args={[0.4, 1]} position={[-1.8, 1.5, 0]}>
        <meshStandardMaterial color="#f472b6" metalness={0.7} roughness={0.3} />
      </Icosahedron>
    </Float>
  );
}

function ParticleField() {
  const count = 150;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#ec4899" opacity={0.6} transparent />
    </points>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 70 }}>

        {/* LIGHTING CINEMATIC */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#ec4899" />
        <pointLight position={[5, 5, 5]} intensity={1} color="#a855f7" />

        {/* OBJECT */}
        <AnimatedSphere />
        <FloatingTorus />
        <FloatingBox />
        <FloatingIcosahedron />
        <ParticleField />

        {/* OPTIONAL: subtle camera movement */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />

      </Canvas>
    </div>
  );
}