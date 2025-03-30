import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Gerador de pontos aleatórios - Reduzindo número para melhorar performance
const generateRandomPoints = (count: number, radius: number = 5): Float32Array => {
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360); 
    const phi = THREE.MathUtils.randFloatSpread(360);
    
    positions[i * 3] = (radius + Math.random() * 5) * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = (radius + Math.random() * 5) * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = (radius + Math.random() * 5) * Math.cos(theta);
  }
  
  return positions;
};

const StarField = () => {
  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.05; // Reduzindo velocidade para melhorar performance
    if (pointsRef.current) {
      pointsRef.current.rotation.x = Math.sin(t / 4);
      pointsRef.current.rotation.y = Math.sin(t / 4);
    }
  });

  return (
    <Points ref={pointsRef} positions={generateRandomPoints(2000)} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8e44ad"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const MovingSpheres = () => {
  const group = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.05; // Reduzindo velocidade para melhorar performance
    }
  });
  
  return (
    <group ref={group}>
      {[...Array(3)].map((_, i) => ( // Reduzindo número de esferas
        <mesh 
          key={i} 
          position={[
            Math.sin(i / 3 * Math.PI * 2) * 3,
            Math.cos(i / 4 * Math.PI * 2) * 3,
            Math.sin(i / 5 * Math.PI * 2) * 3
          ]}
        >
          <sphereGeometry args={[0.2, 8, 8]} /> {/* Reduzindo complexidade */}
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#8e44ad" : "#3498db"} 
            emissive={i % 2 === 0 ? "#8e44ad" : "#3498db"}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

// Componente de fallback simples para quando ocorrer erro no WebGL
const BackgroundFallback = () => {
  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #1e1e1e 0%, #2d3436 100%)',
        zIndex: -1
      }}
    />
  );
};

interface ThreeBackgroundProps {
  className?: string;
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ className }) => {
  const [hasError, setHasError] = useState(false);

  // Manipulador de eventos para erro de contexto WebGL
  useEffect(() => {
    const handleContextLost = () => {
      console.log('WebGL context lost, showing fallback background');
      setHasError(true);
    };

    window.addEventListener('webglcontextlost', handleContextLost);
    
    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost);
    };
  }, []);

  // Se houver erro, mostra o fallback
  if (hasError) {
    return <BackgroundFallback />;
  }

  return (
    <div className={className} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Suspense fallback={<BackgroundFallback />}>
        <Canvas 
          camera={{ position: [0, 0, 12], fov: 60 }} // Reduzindo FOV para melhorar performance
          gl={{ 
            powerPreference: 'default', // low-power para dispositivos móveis
            antialias: false, // Desligando antialias para melhorar performance
            stencil: false,
            depth: false
          }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <StarField />
          <MovingSpheres />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ThreeBackground; 