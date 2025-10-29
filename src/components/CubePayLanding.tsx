import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

// Rotating 3D Cube Component with Text
const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.01;
    }
  });

  const texts = [
    "Enter Spatia",
    "AgentSphere",
    "AR Viewer",
    "Onboard To\nCrypto",
    "CubePay",
    "Private\nPayments",
  ];

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#00ff66"
          metalness={0.8}
          roughness={0.2}
          emissive="#00ff66"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Front */}
      <Text
        position={[0, 0, 1.01]}
        fontSize={0.25}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {texts[0]}
      </Text>
      {/* Back */}
      <Text
        position={[0, 0, -1.01]}
        fontSize={0.25}
        color="#ff00ff"
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI, 0]}
        fontWeight="bold"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {texts[1]}
      </Text>
      {/* Top */}
      <Text
        position={[0, 1.01, 0]}
        fontSize={0.25}
        color="#ffff00"
        anchorX="center"
        anchorY="middle"
        rotation={[-Math.PI / 2, 0, 0]}
        fontWeight="bold"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {texts[2]}
      </Text>
      {/* Bottom */}
      <Text
        position={[0, -1.01, 0]}
        fontSize={0.2}
        color="#ff6600"
        anchorX="center"
        anchorY="middle"
        rotation={[Math.PI / 2, 0, 0]}
        fontWeight="bold"
        outlineWidth={0.02}
        outlineColor="#000000"
        maxWidth={1.8}
        textAlign="center"
      >
        {texts[3]}
      </Text>
      {/* Right */}
      <Text
        position={[1.01, 0, 0]}
        fontSize={0.25}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI / 2, 0]}
        fontWeight="bold"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {texts[4]}
      </Text>
      {/* Left */}
      <Text
        position={[-1.01, 0, 0]}
        fontSize={0.2}
        color="#0099ff"
        anchorX="center"
        anchorY="middle"
        rotation={[0, -Math.PI / 2, 0]}
        fontWeight="bold"
        outlineWidth={0.02}
        outlineColor="#000000"
        maxWidth={1.8}
        textAlign="center"
      >
        {texts[5]}
      </Text>
    </group>
  );
};

const CubePayLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-slate-950 flex flex-col items-center justify-center p-8">
      {/* 3D Cube Logo */}
      <div className="w-64 h-64 mb-8">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color="#00ff66"
          />
          <RotatingCube />
        </Canvas>
      </div>

      {/* CubePay Title */}
      <h1 className="text-7xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
        Spatia
      </h1>

      <p className="text-2xl text-gray-300 mb-12 text-center max-w-2xl font-semibold">
        Your Augmented Finance
      </p>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {/* Enter Spatia Bank Button */}
        <a
          href="#register"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = "register";
            window.dispatchEvent(new HashChangeEvent("hashchange"));
          }}
          className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-2xl p-8 text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="text-4xl mb-3">�</div>
            <h3 className="text-xl font-bold mb-2">Enter Spatia Bank</h3>
            <p className="text-sm text-blue-100">
              Your Spatial Financial Layer
            </p>
          </div>
        </a>

        {/* AgentSphere Button */}
        <a
          href="http://localhost:5178/deploy"
          className="group relative overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-800 text-white rounded-2xl p-8 text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-500/50"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="text-xl font-bold mb-2">AgentSphere</h3>
            <p className="text-sm text-slate-100">Deploy Your AR Agent</p>
          </div>
        </a>

        {/* AR Viewer Button */}
        <a
          href="http://localhost:5173/"
          className="group relative overflow-hidden bg-gradient-to-br from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 text-white rounded-2xl p-8 text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="text-xl font-bold mb-2">AR Viewer</h3>
            <p className="text-sm text-green-100">
              Enter the AR World and Interact with Agents
            </p>
          </div>
        </a>

        {/* CubePay Button */}
        <a
          href="http://localhost:5173/ar"
          className="group relative overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 text-white rounded-2xl p-8 text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-2">CubePay</h3>
            <p className="text-sm text-emerald-100">
              Create Your Own Spatial Payment Gate
            </p>
          </div>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          Powered by blockchain technology • Secure • Private • Fast
        </p>
      </div>
    </div>
  );
};

export default CubePayLanding;
