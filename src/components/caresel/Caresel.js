import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from "react";


import dummy from '../../db/data.json';

function Caresel(props){
    const [imgWidth, setImgWidth] = useState(0);
    const imgRef = useRef(null);
    
    useEffect(() => {
        setImgWidth(imgRef.current.offsetWidth);
      },[])

    return(
         <div className = "slideContainer" //캐러셀
        style={{transform: `translateX(${-(imgWidth+20) * props.direction}px)`}}>

                <Link to="/cPage"><img className='imgNow' src={props.img} ref={imgRef}></img></Link>
                 {dummy.slides.map((slide,index)=>(
                    <img className='imgCaresel' key={index} src={slide.img}></img>
                ))} 
        </div>
       
        
    )
}

    

export default Caresel;