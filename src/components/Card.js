import React, { useEffect, useState } from 'react';
import'./Card.css';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import brickStaticIcon from '../Assets/icons/brick_static_icon_part.png';
import brickMovingIcon from '../Assets/icons/brick_moving_icon_part.png';
 
const Card = ({ 
  image, translate, scale, 
  title, details, vectorImage, 
  type, side, isTriggered,
  myDelay, cardAnimColor, isTriggeredServices
}) => {
  
  const translating = translate ? translate : 0;
  const whichSide = side ? side : 1

  const [isImageCard, setIsImageCard] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [isH, setIsH] = useState(false);
  const [isP, setIsP] = useState(false);
  const [isImg, setIsImg] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [isTiltCard, setIsTiltCard] = useState(false);

  const waitingTime = whichSide === -1 ? 300 : 680;

  useEffect(() => {

    if(isTriggered === true){

      setTimeout(() => {
        setIsImageCard(true);
      }, waitingTime);
    
      setTimeout(() => {
        setIsCard(true);
      }, waitingTime + 300);
    
      setTimeout(() => {
        setIsH(true);
      }, waitingTime + (300 * 3.5));
    
      setTimeout(() => {
        setIsP(true);
      }, waitingTime + (300 * 4.3));
    
      setTimeout(() => {
        setIsImg(true);
      }, waitingTime + (300 * 5.6));
    
      setTimeout(() => {
        setIsButton(true);
      }, waitingTime + (300 * 6.9));

      return () => {clearTimeout();}

    } else {
      
      setTimeout(() => {
        setIsImageCard(false);
      }, waitingTime);
    
      setTimeout(() => {
        setIsCard(false);
      }, waitingTime + 300);
    
      setTimeout(() => {
        setIsH(false);
      }, waitingTime + (300 * 3.5));
    
      setTimeout(() => {
        setIsP(false);
      }, waitingTime + (300 * 4.3));
    
      setTimeout(() => {
        setIsImg(false);
      }, waitingTime + (300 * 5.6));
    
      setTimeout(() => {
        setIsButton(false);
      }, waitingTime + (300 * 6.9));

      return () => {clearTimeout();}

    }

  }, [isTriggered])

  useEffect(() => {

    if(isTriggeredServices === true){
      if(isTiltCard === false)
        setTimeout(() => {
          setIsTiltCard(true);
        }, myDelay)
    } else {
      if(isTiltCard === true)
        setIsTiltCard(false);
    }

  }, [isTriggeredServices])
  
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            45,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.075,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  const brickVariant = {
    initial:{
      y: -10,
      x: 5,
      rotateZ: 35
    },
    hovered:{
      y: 5,
      x: 0,
      rotateZ: 0
    }
  }

  const [cardStyle, setCardStyle] = useState(window.innerWidth > 680 ? ({
    height: window.innerHeight > 1060 ? 700 : 450,
    maxWidth: window.innerHeight > 1060 ? 550 : 330,
    boxShadow: whichSide === 1 ? "1px 4px 8px rgb(130, 130, 130)" : 'none'
  }) : ({
    maxWidth: window.innerHeight > 1060 ? 550 : 330,
    boxShadow: whichSide === 1 ? "1px 4px 8px rgb(130, 130, 130)" : 'none'
  }));

  useEffect(() => {
    window.addEventListener("resize", () => {setCardStyle(window.innerWidth > 680 ? ({
      height: window.innerHeight > 1060 ? 700 : 450,
      maxWidth: window.innerHeight > 1060 ? 550 : 330,
      boxShadow: whichSide === 1 ? "1px 4px 8px rgb(130, 130, 130)" : 'none'
    }) : ({
      maxWidth: window.innerHeight > 1060 ? 550 : 330,
      boxShadow: whichSide === 1 ? "1px 4px 8px rgb(130, 130, 130)" : 'none'
    }))});

    return () => {
      window.removeEventListener("resize", () => {setCardStyle(window.innerWidth > 680 ? ({
        height: window.innerHeight > 1060 ? 700 : 450,
        maxWidth: window.innerHeight > 1060 ? 550 : 330,
        boxShadow: whichSide === 1 ? "1px 4px 8px rgb(130, 130, 130)" : 'none'
      }) : ({
        maxWidth: window.innerHeight > 1060 ? 550 : 330,
        boxShadow: whichSide === 1 ? "1px 4px 8px rgb(130, 130, 130)" : 'none'
      }))});
    }
  }, [])

  return (

    <>

      {type === 1 &&

          <motion.div className='Card1'
            style={cardStyle}
            initial={{
              scale: 1.1,
              opacity: 0
            }}
            animate={{
              scale: isImageCard ? 1 : 1.1,
              opacity: isImageCard ? 1 : 0,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
              }
            }}
            
          >
            <img src={image} 
                style={{ 
                  transform: scale ? `scale(${scale}) translateX(${translating}px)` : null
                }} 
                />
          </motion.div>

      }

      
      {type === 2 &&

        <motion.div 
          style={cardStyle}
          className='Card2'
          initial={{
              opacity: 0,
              x: 350 * whichSide
          }}
          animate={{ 
              opacity: isCard ? [0,0,1] : 0,
              x: isCard ? 0 : 350 * whichSide,
              transition: {
                  duration: 0.75,
                  type: "tween",
                  ease: "easeOut"
              }
          }}
        >

          <motion.h1
            initial={{ 
              x: 300, 
              opacity: 0,
              
            }}
            animate={{ 
                x: isH ? 0 : 300, 
                opacity: isH ? [0,0,1] : 0,
                transition: {
                    type: "spring",
                    damping: 30,
                    stiffness: 100
                }
            }}
          >{title}</motion.h1>

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
          >{details}</motion.p>

          <motion.img src={vectorImage} 
            initial={{ 
              opacity: 0,
              scale: 0
            }}
            animate={{ 
                opacity: isImg ? [0,0,1] : 0,
                scale: isImg ? 0.6 : 0,
                transition: {
                    type: "spring",
                    damping: 30,
                    stiffness: 100
                }
            }}
          />

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
          >Constuct Your Dream</motion.button>

        </motion.div>

      }

      {type === 3 && 

        <Tilt className='Card3' options={defaultOptions}>

            <motion.span
              style={{background: '#e9e9e9', position: "absolute", top: "-16px", width: "100%", height: "calc(100% + 32px)"}}
              initial={{
                y: 0,
                transformOrigin: "50% top"
              }}
              animate={{
                y: isTiltCard === true ? "-100%" : 0,
                transition: {
                  duration: 0.7,
                  delay: 0.35,
                  ease: "linear"
                }
              }}
            ></motion.span>

            <motion.span
              style={{background: '#e9e9e9', position: "absolute", top: "calc(64px + 55%)", width: "100%", height: "calc(100% + 32px)"}}
              initial={{
                x: 0,
                transformOrigin: "50% top"
              }}
              animate={{
                x: isTiltCard === true ? "100%" : 0,
                transition: {
                  duration: 0.8,
                  delay: 1.2,
                  ease: "linear"
                }
              }}
            ></motion.span>

            <motion.span
              style={{background: cardAnimColor, position: "absolute", top: "-16px", width: "100%", height: "calc(100% + 32px)"}}
              initial={{
                y: "200%",
                transformOrigin: "50% bottom"
              }}
              animate={{
                y: isTiltCard === true ? "-100%" : "200%",
                transition: {
                  duration: 1.05,
                  ease: "linear"
                }
              }}
            ></motion.span>

            <img src={image} />

            <div>
                <h3>{title}</h3>
                <p>{details}</p>
                <motion.div 
                  initial="initial"
                  whileHover="hovered"
                >
                  <motion.img className='brickIconMoving' src={brickMovingIcon} 
                      variants={brickVariant}
                  />
                  <img className='brickIconStatic' src={brickStaticIcon} />
                </motion.div>
                
            </div>
        </Tilt>

      }

    </>
  )
}

export default Card;
