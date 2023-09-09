import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';
import LogoImage from './Assets/myLogo.png';

const Header = ({ setScrollToTop }) => {

    const [widthSetting, setWidthSetting] = useState(1300);
    const [isSideNav, setIsSideNav] = useState(false);

    const handleWidth = () => {
        const inWidth = window.innerWidth
        setWidthSetting(inWidth);
        if(widthSetting > 730)
            setIsSideNav(false);
    };

    const handleSideNavBar = () => {
        setIsSideNav(!isSideNav);
    }

    useEffect(() => {
        handleWidth();
        window.addEventListener("resize", handleWidth);
        return() => {
            window.removeEventListener("resize", handleWidth);
        }
    }, [])

    const topBarVariant = {
        rest : {
            rotate: 0,
            y: 0,
            x: 0,
            backgroundColor: "#fff"
        },
        anim: {
            rotate: -45,
            y: 9.5,
            x: 4,
            backgroundColor: "#000"
        }
    }

    const midBarVariant = {
        rest : {
            opacity: 1,
        },
        anim: {
            opacity: 0,
        }
    }

    const btmBarVariant = {
        rest : {
            rotate: 0,
            y: 0,
            x: 0,
            backgroundColor: "#fff"
        },
        anim: {
            rotate: 45,
            y: -9.5,
            x: 4,
            backgroundColor: "#000"
        }
    }

    return (
        <div className='Header'>
            <div className='Logo' onClick={() => {setScrollToTop(true)}}>
                <img src={LogoImage}/>
                <strong>ARCHENEER.</strong>
            </div>

            {(widthSetting > 1200) && 
                <>
                    <ul>
                        <li className='selected'>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>

                    <div className='HeaderRight'>
                        <i className='icon notif_icon'/>
                        <i className='icon settings_icon'/>
                    </div>
                </>
            } 

            {widthSetting <= 1200 && widthSetting > 730 && 
                <>
                    <ul style={{ paddingRight: "16px"}}>
                        <li className='selected'>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </>
            } 

            {(widthSetting <= 730) && 
                <>
                    <motion.div className='menuBar' 
                        initial="rest" 
                        onClick={handleSideNavBar}
                    >
                        <motion.span variants={topBarVariant} animate={isSideNav ? "anim" : "rest"}></motion.span>
                        <motion.span variants={midBarVariant} animate={isSideNav ? "anim" : "rest"} style={{background: "white"}}></motion.span>
                        <motion.span variants={btmBarVariant} animate={isSideNav ? "anim" : "rest"}></motion.span>
                    </motion.div>

                    <div className='sideNav'>
                        <motion.ul 
                            style={{ paddingRight: 0 }}
                            initial={{
                                y: 0,
                            }}
                            animate={{
                                y: isSideNav ? 400 : 0,
                                transition: {
                                    type: "spring",
                                    damping: 18,
                                    stiffness: 90
                                }
                            }}
                        >
                            <li className='selected'>Home</li>
                            <li>Contact</li>
                            <li>About</li>
                        </motion.ul >
                    </div>
                </>
            } 

        </div>
    )
}

export default Header;




/* import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const textMotion = {
  rest: {
    color: "grey",
    x: 0,
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    color: "blue",
    x: 30,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
};

const slashMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn"
    }
  }
};

const HoverTest = () => {
  return (
    <Container initial="rest" whileHover="hover" animate="rest">
      <SlashContainer variants={slashMotion}>
        <svg width="1em" height="1em" viewBox="0 0 27 50">
          <path
            fill="#154FFF"
            d="M21.177 0L0 50h5.818L26.995 0z"
            fillRule="evenodd"
          />
        </svg>
      </SlashContainer>
      <motion.h1 variants={textMotion}>Hover me!</motion.h1>
    </Container>
  );
};
export default HoverTest;

const Container = styled(motion.div)`
  position: relative;
  max-width: 200px;
  cursor: pointer;
`;

const SlashContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 0;
  opacity: 0;

  transform: translateY(-50%);

  svg {
    width: auto;
    height: 50px;
    object-fit: scale-down;
  }
`;
 */
