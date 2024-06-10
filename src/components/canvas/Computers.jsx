import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import  CanvasLoader  from '../Loader';


const Computers = ( { isMobile } ) => {
  const computer = useGLTF('./hms_london/scene.gltf')

  return (
    <mesh>
      <hemisphereLight 
      intensity={3}
      groundColor="white" />
      <pointLight intensity={1}  />
      <spotLight 
        position={[-20,50,10]}
        angle={0.15}
        distance={20}
        penumbra={1}
        intensity={500}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.255}
        position={[0.3,-2.8,-1.5]}
        rotation={ isMobile ?[0,0.64,0] :[0,0.54,0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },)

  return(

    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [5,5,5], fov: 100}}
      gl={{ preserveDrawingBuffer: true }}
    >
        <Suspense fallback={<CanvasLoader />} >
          <OrbitControls 
          enableZoom={true} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all/>
    </Canvas>

  )

}

export default ComputersCanvas;