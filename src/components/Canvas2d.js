import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
    const canvasRef = useRef(null);

    let endAngle = 0;
    
    const draw = ctx => {

        setInterval(() => {
            ctx.beginPath()
            ctx.arc(137, 71.4, 40, 0, endAngle)
            ctx.strokeStyle = '#000000'
            ctx.lineWidth = 0.1
            ctx.stroke();
            endAngle += 0.025
        }, 30)
    }

    
    
    useEffect(() => {
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        draw(context)
        
    }, [])
    
    return <canvas ref={canvasRef} {...props}/>
}

export default Canvas