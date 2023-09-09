import React, { useEffect, useRef, useState } from 'react';
import './Welcom.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import mousePng from '../Assets/icons/mouse_png.png';
import downArrowPng from '../Assets/icons/down_arrow.png';
import SkyScraper1 from '../Assets/3dModels/SkyScraper1';

const Welcom = ({ windowScrollY, setExploreBtn, setWelcomVH }) => {


    const duration = 300;
    const [isP, setIsP] = useState(false);
    const [isButton, setIsButton] = useState(false);
    const [isMouseScroll, setIsMouseScroll] = useState(false);
    const [isModel, setIsModel] = useState(false);
    const [toggleModel, setToggleModel] = useState(false);

    const welcomRef = useRef();

    const setAnimation = () => {
        setTimeout(() => {
            setIsP(true);
        }, duration);

        setTimeout(() => {
            setIsButton(true);
        }, 1200)
        
        setTimeout(() => {
            setIsModel(true);
        }, 2400)

        setTimeout(() => {
            setIsMouseScroll(true);
        }, 4200)
    }

    useEffect(() => {
        setAnimation();
    }, [])

    useEffect(() => {
        handleModel();
    }, [windowScrollY])

    const handleModel = () => {
        if(window.scrollY < 300){
            if(toggleModel === false){
                setToggleModel(true)
            }
        } else {
            if(toggleModel === true){
                setToggleModel(false)
            }
        }
    }

    return (
        <div className='WelcomContainer' ref={welcomRef}>

            <div className='Welcom'>

                <div className='WelcomText'>

                    <motion.h1
                        initial={{ 
                            x: -3000, 
                            opacity: 0,
                            
                        }}
                        animate={{ 
                            x: 0, 
                            opacity: [0,0,1],
                            transition: {
                                type: "spring",
                                damping: 30,
                                stiffness: 100
                            }
                        }}
                    >Archituct.</motion.h1> 

                    <motion.p
                        initial={{ 
                            x: 300, 
                            opacity: 0,
                            
                        }}
                        animate={{ 
                            x: isP ? 0 : 300, 
                            opacity: isP ? [0,0,1] : 0,
                            transition: {
                                type: "spring",
                                damping: 30,
                                stiffness: 100
                            }
                        }}
                    > Architects create designs for new construction projects, 
                        alterations and redevelopments. They use their specialist 
                        construction knowledge and high-level drawing skills to design 
                        buildings that are functional, safe, sustainable and 
                        aesthetically pleasing.</motion.p> 

                    <motion.button
                        initial={{
                            opacity: 0
                        }}
                        animate={{ 
                            opacity: isButton ? 1 : 0,
                            transition: {
                                duration: 2,
                                type: "tween",
                                ease: "easeInOut"
                            }
                        }}
                        onClick={() => {
                            setExploreBtn(true); 
                            setWelcomVH(welcomRef.current.offsetHeight)}
                        }
                    >Explore</motion.button> 

                </div>

                <motion.div className='scrollDownDiv' 
                    initial={{
                        y: 0,
                        opacity: 0
                    }}
                    animate={{
                        y: window.scrollY > 300 ? -40 : 0,
                        opacity: window.scrollY > 300 ? 0 : isMouseScroll === true ? 1 : 0 ,
                        transition: {
                            duration: 0.5,
                            ease: "easeIn"
                        }
                    }}
                >
                    <img className='mouseScrollDown' src={mousePng} />
                    <motion.img className='arrowDown' src={downArrowPng} 
                        animate={{
                            y: [0, 8, 0, 8, 0],
                            transition:{
                                repeat: Infinity,
                                repeatDelay: 4
                            }
                        }}
                    />
                </motion.div>
                

                <motion.div className='Model'
                    initial={{
                        opacity: 0,
                        y: -100
                    }}
                    animate={{
                        y: isModel === true && toggleModel === true ? 0 : -100,
                        opacity: isModel === true && toggleModel === true ? 1 : 0,
                        transition: {
                            duration: 0.7,
                            ease: "easeInOut"
                        }
                    }}
                    style={{
                        top: window.innerWidth < 960 ? "50%" : null,
                        width: window.innerWidth < 960 ? "300px" : "fit-content",
                        height: window.innerWidth < 960 ? "300px" : "fit-content",
                        scale: window.innerWidth < 960 ? 0.8 : 1,
                    }}
                >
                    <Canvas frameloop='always' camera={{position:[0 ,50 ,80], fov: 30}} 
                            style={{width: "450px", height: "450px"}}>
                        <ambientLight intensity={50.7}/> 
                        <directionalLight position={[0, 30, 30]} intensity={3.1} />
                        <OrbitControls enableZoom={false} 
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 4}
                            max
                        />
                        
                        <SkyScraper1 scale={0.15} position={[0, -18, 0]}/>
                    </Canvas>
                </motion.div>

            </div>
        
        </div>
    )
};

export default Welcom;
