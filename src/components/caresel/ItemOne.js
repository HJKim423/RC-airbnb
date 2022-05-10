
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from "react";

import dummy from '../../db/data.json';
import Caresel from './Caresel';

import { ReactComponent as Heart } from '../../svg/heart.svg';
import { ReactComponent as Right } from '../../svg/right.svg';
import { ReactComponent as Left } from '../../svg/left.svg';

const TOTAL_SLIDES = dummy.slides.length;
function ItemOne(props){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showBtn, setShowBtn] = useState(false);

    function handlePrev(direction){
        if(currentSlide === 0) return;
        else setCurrentSlide(currentSlide => currentSlide - direction);
    }

    function handleNext(direction){
        if(currentSlide >= TOTAL_SLIDES) return;
        else setCurrentSlide(currentSlide => currentSlide + direction);
    }


    // 스켈레톤
    const [item, setItem] = useState([]);

    useEffect(() =>{
        const skeleton = setTimeout(() => {
            setItem(dummy.items);
        },1000);

        return() => {
            clearTimeout(skeleton);
        };
    }, []);




    return(
        <>
        {item.length > 0 ? (
            <div className="section__item" 
                onMouseEnter={()=> {setShowBtn(true)}} 
                onMouseLeave={()=> {setShowBtn(false)}}>

                <div className="section__item__img">
                    <Caresel direction={currentSlide} img={props.item.img} link={props.link}/>     
                
                    <div className="item-heart"><Heart /></div>
                    <button className="item-prev" 
                    onClick={() => handlePrev(1)}
                    style={(showBtn && currentSlide !==0) ? {display: "flex"} : {display:"none"}}>
                        <span><Left /></span>
                    </button>
                    <button className="item-next" onClick={() => handleNext(1)}
                    style={(showBtn && currentSlide !== TOTAL_SLIDES) ? {display: "flex"} : {display:"none"}}>
                        <span><Right /></span>
                    </button>
                    <div className="item-count">
                        <span className="count__dot now"></span>
                        <span className="count__dot"></span>
                        <span className="count__dot"></span>
                        <span className="count__dot"></span>
                        <span className="count__dot"></span>
                    </div>
                </div>
                <Link to={`/cPage/${props.link}`}>
                    <div className="section__item__text">
                        <div className="item-locationAndPride">
                            <div className="item-location">{props.item.loca}</div>
                            <div className="item-price">{props.item.price}</div>
                        </div>
                        <div className="item-distanceAndDate">
                            <div className="item-distance">{props.item.dis}</div>
                            <div className="item-date">{props.item.date}</div>
                        </div>
                    </div>
                </Link>
                    
            </div>
        ) : (
            <div className="section__item">
                <div className="section__item__img" style={{backgroundColor:"#dddddd"}}>  
                </div>
                
                    <div className="section__item__text">
                        <div className="item-locationAndPride">
                            <div style={{
                                width:"60%",
                                height:"22px",
                                backgroundColor:"#dddddd",
                                borderRadius:"20px",
                                marginBottom:"10px"
                            }}></div>
                        </div>
                        <div className="item-distanceAndDate">
                        <div style={{
                                width:"40%",
                                height:"20px",
                                backgroundColor:"#dddddd",
                                borderRadius:"20px"
                            }}></div>
                        </div>
                    </div>
                </div>
        )}
        </>
    )
}

export default ItemOne;