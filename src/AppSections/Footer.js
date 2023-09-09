import React from 'react';
import './Footer.css';
import facebookIcon from '../Assets/icons/facebook.svg';
import whatsappIcon from '../Assets/icons/whatsapp.svg';
import behanceIcon from '../Assets/icons/behance_icon.png';

const Footer = () => {

  const myWhatsappURL = "https://wa.me/00249994597261";
  const myFacebookURL = "https://www.facebook.com/profile.php?id=100029916982623";
  const myBehanceURL = "https://www.behance.net/moTarigOs";

  return (
    <div className='Footer'>
      <h2>Mohammed Tarig &copy;</h2>

      <div className='footerIcons'>
        
        <a href={myFacebookURL} target='_blank'>
          <img src={facebookIcon} alt='' />
        </a>  

        <a href={myWhatsappURL} target='_blank'>
          <img src={whatsappIcon} alt='' />
        </a>

        <a href={myBehanceURL} target='_blank' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src={behanceIcon} alt='' 
                style={{background: "white", boxSizing: "border-box", 
                padding: 8, height: "36px", width: "36px", borderRadius: 4}}/>
        </a>
        
      </div>
    </div>
  )
};

export default Footer;
