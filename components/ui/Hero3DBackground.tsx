"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Hero3DBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    
    // Slight fog to seamlessly blend 3D elements into dark slate background
    scene.fog = new THREE.FogExp2(0x020617, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse parallax tilt
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- 1. Central Floating 3D Geometric Structure ---
    // Outer Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(11, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // Inner Concentric Octahedron Wireframe
    const innerGeo = new THREE.OctahedronGeometry(6, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // Core Glowing Sphere Nodes
    const nodeCount = 18;
    const nodesGeo = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      const radius = 8 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      nodePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      nodePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      nodePositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    nodesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(nodePositions, 3)
    );

    const nodeMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.7,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const nodePoints = new THREE.Points(nodesGeo, nodeMat);
    mainGroup.add(nodePoints);

    // --- 2. Ambient 3D Particle Constellation Field ---
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 300 : 750;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorSky = new THREE.Color(0x38bdf8);
    const colorPurple = new THREE.Color(0xa855f7);
    const colorCyan = new THREE.Color(0x06b6d4);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 120;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      // Random blend between sky blue, purple, and cyan
      const rand = Math.random();
      const c = rand < 0.4 ? colorSky : rand < 0.7 ? colorPurple : colorCyan;
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }

    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particlesGeo.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // --- 3. Dynamic Lighting ---
    const pointLight1 = new THREE.PointLight(0x38bdf8, 2, 50);
    pointLight1.position.set(15, 15, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 2, 50);
    pointLight2.position.set(-15, -15, 10);
    scene.add(pointLight2);

    // --- 4. Interactive Mouse Parallax Tracking ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) / windowHalfX;
      mouseY = (e.clientY - windowHalfY) / windowHalfY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // --- 5. Animation Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth target interpolation (lerp)
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Rotate 3D geometries gently
      outerMesh.rotation.x = elapsedTime * 0.08;
      outerMesh.rotation.y = elapsedTime * 0.12;

      innerMesh.rotation.x = -elapsedTime * 0.14;
      innerMesh.rotation.y = -elapsedTime * 0.18;

      nodePoints.rotation.y = elapsedTime * 0.05;

      // Particle system rotation
      particleSystem.rotation.y = elapsedTime * 0.02;
      particleSystem.rotation.x = elapsedTime * 0.01;

      // Mouse Parallax camera angle adjustment
      mainGroup.rotation.y = targetX * 0.25;
      mainGroup.rotation.x = -targetY * 0.25;

      camera.position.x = targetX * 3;
      camera.position.y = -targetY * 3;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on Unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Geometries and Materials
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      nodesGeo.dispose();
      nodeMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-85"
      aria-hidden="true"
    />
  );
};

export default Hero3DBackground;
