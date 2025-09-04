"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";


const IMAGE_URL = "https://wsrv.nl/?url=https://assets.cube.nl/prod/afbeeldingen/q12025-meeting-26-2.jpg&output=webp&q=90&w=1620&h=860&fit=cover&a=center";

interface ThreeImageRevealProps {
  startAnimation?: boolean;
}

export default function ThreeImageReveal({ startAnimation }: ThreeImageRevealProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    if (!startAnimation || animationStarted.current) return;
    animationStarted.current = true;
    let renderer: THREE.WebGLRenderer | undefined;
    let scene: THREE.Scene | undefined;
    let camera: THREE.PerspectiveCamera | undefined;
    let group: THREE.Group | undefined;
    let animationFrameId: number | undefined;
    if (!mountRef.current) return;
    const width = mountRef.current.offsetWidth || 910;
    const height = mountRef.current.offsetHeight || 820;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.z = 1.6;
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? window.devicePixelRatio : 1.5);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    loader.load(IMAGE_URL, (texture) => {
      group = new THREE.Group();
      const rows = 6, cols = 8;
      const sliceW = 1 / cols, sliceH = 1 / rows;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const geometry = new THREE.BufferGeometry();
          const x0 = x * sliceW - 0.5, y0 = y * sliceH - 0.5;
          const x1 = (x + 1) * sliceW - 0.5, y1 = (y + 1) * sliceH - 0.5;
          const vertices = new Float32Array([
            x0, y0, 0,
            x1, y0, 0,
            x1, y1, 0,
            x0, y0, 0,
            x1, y1, 0,
            x0, y1, 0,
          ]);
          geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
          const u0 = x * sliceW, v0 = y * sliceH;
          const u1 = (x + 1) * sliceW, v1 = (y + 1) * sliceH;
          const uvs = new Float32Array([
            u0, v0,
            u1, v0,
            u1, v1,
            u0, v0,
            u1, v1,
            u0, v1,
          ]);
          geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
          const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.z = 0;
          group.add(mesh);
        }
      }
      scene.add(group);

      const tl = gsap.timeline();
      group.children.forEach((mesh: any) => {
        const delay = Math.random() * 0.7;
        mesh.position.x += (Math.random() - 0.5) * 1.5;
        mesh.position.y += (Math.random() - 0.5) * 1.5;
        mesh.material.opacity = 0;
        tl.to(mesh.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1.2,
          ease: 'expo.out',
          delay,
        }, 0);
        tl.to(mesh.material, {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay,
        }, 0);
      });

      const animate = () => {
        renderer!.render(scene!, camera!);
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    });

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (renderer) {
        renderer.dispose && renderer.dispose();
        if (mountRef.current && renderer.domElement)
          mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [startAnimation]);
  return <div ref={mountRef} style={{ width: "100%", height: "100%", minHeight: 420, minWidth: 600 }} />;
}
