import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import relaxedDesignImage from '../Assets/buildings/beutiful_relaxed_design.jpg';
import perfectDesignImage from '../Assets/buildings/perfect_design.jpg';
import oldDesignImage from '../Assets/buildings/old_civilization_design.jpg';
import insideDesignImage from '../Assets/buildings/inside_is_no_less_important.jpg';

import workersVector from '../Assets/buildings/constructors_working.png';
import brainVector from '../Assets/buildings/constructing_brain.png';
import workerVector from '../Assets/buildings/construct_worker.png';
import workingVector from '../Assets/buildings/constructor_working.png';

import housePhoto from '../Assets/buildings/normal_design.jpg';
import apartmentPhoto from '../Assets/buildings/apartment_photo.jpg';
import SkyScraperPhoto from '../Assets/buildings/tall_building.jpg';

import Card from '../components/Card';
import { motion } from 'framer-motion';
import TypeAnimation from '../components/TypeAnimation';

const Hero = ({ windowScrollY}) => {

  const [isTriggered1, setIsTriggered1] = useState(false);
  const [isTriggered2, setIsTriggered2] = useState(false);
  const [isTriggered3, setIsTriggered3] = useState(false);
  const [isTriggered4, setIsTriggered4] = useState(false);
  const [isTriggeredServices, setIsTriggeredServices] = useState(false);

  const cardRef1 = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();
  const cardRef4 = useRef();
  const servicesRef = useRef();

  useEffect(() => {

    settingTriggers();

  }, [windowScrollY])
  

  const settingTriggers = () => {

    const y1 = cardRef1.current.offsetTop;
    const y2 = cardRef2.current.offsetTop;
    const y3 = cardRef3.current.offsetTop;
    const y4 = cardRef4.current.offsetTop;
    const servicesY = servicesRef.current.offsetTop;

    let y = window.scrollY;

    const vh = window.innerHeight;

    y = y + (vh / 3);

    if(y < y1){

      if(isTriggered1 === true)
        setIsTriggered1(false)

    } else if(y >= y1 && y < y2){

      if(isTriggered1 === false)
        setIsTriggered1(true)

      if(isTriggered2 === true)
        setIsTriggered2(false)


    } else if(y >= y2 && y < y3){

      if(isTriggered1 === true)
        setIsTriggered1(false)

      if(isTriggered2 === false)
        setIsTriggered2(true)

      if(isTriggered3 === true)
        setIsTriggered3(false)

    } else if(y >= y3 && y < y4){

      if(isTriggered2 === true)
        setIsTriggered2(false)

      if(isTriggered3 === false)
        setIsTriggered3(true)

      if(isTriggered4 === true)
        setIsTriggered4(false)

    } else if(y >= y4 && y < servicesY){

      if(isTriggered3 === true)
        setIsTriggered3(false)

      if(isTriggered4 === false)
        setIsTriggered4(true)

      if(isTriggeredServices === true)
        setIsTriggeredServices(false)

    } else if(y > servicesY - 200){
        setIsTriggered1(false)
        setIsTriggered2(false)
        setIsTriggered3(false)

        if(isTriggeredServices === false)
          setIsTriggeredServices(true)
    }
  }

  return (
    <div className='HeroContainer'>
      <div className='Hero'>

        <div className='cardSection'>

          <motion.div className='card' ref={cardRef1}
            style={{background: "#e9e9e9"}}
            initial={{
              x: -1000,
              opacity: 0
            }}
            animate={{
              x: isTriggered1 === true ? 0 : -1000,
              opacity: isTriggered1 === true ? 1 : 0,
              transition: {
                duration: 0.45,
                ease: "easeIn"
              }
            }}
          >
            <Card 
              image={relaxedDesignImage} 
              scale={1}
              translate={-350}
              type={1}
              isTriggered={isTriggered1}
            />

            <Card 
              title={"Modern Design"}
              details={"Modern designs have become the trend for the majority of real estate owners, due to the unique designs available to start with."}
              vectorImage={brainVector}
              type={2}
              isTriggered={isTriggered1}
            /> 
          </motion.div>
          
          <div className='card' ref={cardRef2}>
            
            <Card 
              title={"Perfect Design"}
              details={"Construction has become more precise in the last two centuries. You will find extremely precise designs without a millimeter of error."}
              vectorImage={workerVector}
              type={2}
              side={-1}
              isTriggered={isTriggered2}
            /> 

            <Card 
              image={perfectDesignImage} 
              scale={1.4}
              type={1}
              side={-1}
              isTriggered={isTriggered2}
            />
          </div>

          <motion.div className='card' ref={cardRef3}
            style={{background: "#e9e9e9"}}
            initial={{
              x: -1000,
              opacity: 0
            }}
            animate={{
              x: isTriggered3 === true ? 0 : -1000,
              opacity: isTriggered3 === true ? 1 : 0,
              transition: {
                duration: 0.45,
                ease: "easeIn"
              }
            }}
          >
            <Card 
              image={oldDesignImage} 
              type={1}
              isTriggered={isTriggered3}
            />

            <Card 
              title={"Old Design"}
              details={"Ancient archaeological buildings are not distinguished by their shape, but rather the way they were built at a time when such technology was not available."}
              vectorImage={workingVector}
              type={2}
              isTriggered={isTriggered3}
            /> 
          </motion.div>

          <div className='card' ref={cardRef4} >
            <Card 
              title={"Interior Design"}
              details={"The interior design of the building is no less important than the exterior. The exterior design is to make the building attractive and the interior design is for your comfort."}
              vectorImage={workersVector}
              type={2}
              side={-1}
              isTriggered={isTriggered4}
            /> 

            <Card 
              image={insideDesignImage} 
              type={1}
              side={-1}
              scale={1.2}
              isTriggered={isTriggered4}
            />
          </div>

        </div>

        <div className='OurServices' ref={servicesRef}>

            {isTriggeredServices === true &&
            <TypeAnimation text="Our Services" delay={125} />
            }
            
            <div className='servicesCards'>

              <Card 
                image={housePhoto}
                title={"House"}
                details={"design your dream house!"}
                type={3}
                isTriggeredServices={isTriggeredServices}
                myDelay={0 + 1620}
                cardAnimColor={"#d6e002"}
              /> 

              <Card 
                image={apartmentPhoto}
                title={"Apartment"}
                details={"get an amazing apartment!"}
                type={3}
                isTriggeredServices={isTriggeredServices}
                myDelay={1000 + 1620}
                cardAnimColor={"#d6e002"}
              /> 

              <Card 
                image={SkyScraperPhoto}
                title={"SkyScraper"}
                details={"Construct tall buildings"}
                type={3}
                isTriggeredServices={isTriggeredServices}
                myDelay={2000 + 1620}
                cardAnimColor={"#d6e002"}
              /> 

            </div>

        </div>

      </div>
    </div>
  )
};

export default Hero;
