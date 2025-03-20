'use client'
import CanvasLoader from '@/components/canvas-loader'
import Globe from '@/components/globe'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const HeroSection = () => {
    return (
        <Canvas className='h-full'>
            <Suspense fallback={<CanvasLoader />} />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate />

            <color attach={'background'} args={['#1e1e1e']} />

            <Globe scale={12.3} position={[0, 0, 0]} rotation={[0, 0, 0]} />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 0]} intensity={0.5} />
        </Canvas>
    )
}

export default HeroSection
