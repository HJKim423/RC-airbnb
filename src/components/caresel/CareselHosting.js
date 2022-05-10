import { useRef, useState, useEffect } from 'react';

import styled from 'styled-components';
import dummy from '../../db/data.json';

import { ReactComponent as Right } from '../../svg/hosting/right.svg';
import { ReactComponent as Left } from '../../svg/hosting/left.svg';


const TOTAL_SLIDES = dummy.hostingCaresel.length;
function CareselHosting(props){
    const [currentSlide, setCurrentSlide] = useState(0);

    function handlePrev(direction){
        if(currentSlide === -1) return;
        else setCurrentSlide(currentSlide => currentSlide - direction);
    }

    function handleNext(direction){
        if(currentSlide >= TOTAL_SLIDES -2) return;
        else setCurrentSlide(currentSlide => currentSlide + direction);
    }
    const direction = currentSlide * 538.75;
    console.log(currentSlide);
    return(
        <>
        <CareselHostingstyle direction={direction}>
                {dummy.hostingCaresel.map((slide,index)=>(
                    <div key={index} className="caresel-item">
                        <img className='caresel-item__img' src={slide.img}></img>
                        <div className='caresel-item-content'>
                            <div className='caresel-item__text'>{slide.text}</div>
                            <img className='caresel-item__name' src={slide.name}></img>
                            <div className='caresel-item__loca'>{slide.loca}</div>
                        </div>
                        
                    </div>
                ))}                
        </CareselHostingstyle>
        <BtnStyle>
            <button className="prev" onClick={() => handlePrev(1)}>
                <span><Left /></span>
            </button>
            <button className="next" onClick={() => handleNext(1)}>
                <span><Right /></span>
            </button>
        </BtnStyle>
        
        </>
        
    )
}

const BtnStyle = styled.div`
display:flex;
justify-content: center;
transform: translate(210px, -80px);

.prev{
    margin-right:12px;
}
button{
    width:32px;
    height:32px;
    border-radius:50%;
    background-color:#ebebeb;
    display:flex;
    justify-content: center;
    align-items: center;
}
`;

const CareselHostingstyle = styled.div`
transition: all 0.3s ease;
width:1279px;
display: flex;
transform: translateX(${(props) =>(-props.direction)}px);


.caresel-item{
    height:770px;
    padding-right:18px;
    
}


.caresel-item__img{
    width:514.86px;
    height:514.86px;
    object-fit:cover;
    border-radius:4px;
    box-shadow: rgba(0, 0, 0, 0.44) 0px 3px 15px;
}

.caresel-item__text{
    margin: 48px 0 34px 0;
    font-size: 26px;
    line-height:30px;
    width:460px;
}

.caresel-item__name{
    height:32px;
}

.caresel-item__loca{
    color:#717171;
    font-size:16px;
    margin-top:24px;
}


`;

export default CareselHosting;