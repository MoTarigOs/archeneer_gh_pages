import React, { Suspense } from 'react';
import './LoadingCanvas.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Canvas2d from '../components/Canvas2d';

const LoadingCanvas = () => {

  return (
    
    <div className='myOwn3dModelDiv'>
        
        <div className='loadingScreenContainer'>
          <div className='circleDrawing'>
            
            <Canvas2d />

          </div>
          
          <div className='threeJScontainer'>

            <Suspense fallback={() => {console.log("error in suspense")}}>
              <Canvas frameloop='always'  
                camera={{position:[80, 75, -10], fov: 30}}>

                  <ambientLight intensity={1} position={[20, 25, 50]}/> 
                  <directionalLight position={[70, 10, 50]} intensity={1} castShadow="#9d55f2" />
                  <directionalLight position={[-40, -10, 50]} intensity={10} castShadow="#9d55f2"/>
                  <pointLight intensity={0} position={[0,0,50]}/>
                  <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} enableDamping={false}/>

              </Canvas>
            </Suspense>
              
          </div>   
        </div>
         
    </div>

  )
};

export default LoadingCanvas;
