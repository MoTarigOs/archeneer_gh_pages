import React from 'react';
import './LoadingScreen.css';
import compassVideo from '../Assets/compass_out_video.mp4';

const LoadingScreen = () => {

  return (
    
    <div className='loadingVideo'>

      <video src={compassVideo} autoPlay muted/>
         
    </div>

  )
};

export default LoadingScreen;
