import { useState, useEffect } from "react";

import styled from 'styled-components';
import { ReactComponent as Heart } from '../svg/heartD.svg';
import { ReactComponent as Star } from '../svg/star.svg';
import { ReactComponent as Right } from '../svg/right.svg';
import { ReactComponent as Left } from '../svg/left.svg';

import dummy from '../db/data.json';
import CareselD from './caresel/CareselD';

const TOTAL_SLIDES = dummy.dlistCaresel.length;
function DlistItem(props){
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
    return(
        <DlistStyle>
        <div className="list-item"
                onMouseEnter={()=> {setShowBtn(true)}} 
                onMouseLeave={()=> {setShowBtn(false)}}>

                <div className="list-item-img">
                    <CareselD direction={currentSlide} img={props.item.img}/>     
                
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
    
            <div className="list-item-content">
                <div className="list-item-content__top">
                    <div className="list-item-content__top__text">
                        <div className="list-item-content__sub">{props.item.sub}</div>
                        <div className="list-item-content__title">{props.item.title}</div>
                    </div>
                    <div className="list-item-content__top__heart"><Heart/></div>
                </div>
                <div className='underbar'></div>
                <div className='list-item-content__middle'>
                    <div className='list-item-content__rooms'>{props.item.rooms}</div>
                    <div className='list-item-content__filtered'>{props.item.filtered}</div>
                </div>
                <div className='list-item-content__bottom'>
                    <div className='list-item-content__score'>
                        <div className='star'><Star/></div>
                        <div className='score'> {props.item.score}</div>
                    </div>
                    <div className='list-item-content__review'>(후기 {props.item.review}개)</div>
                </div>
            </div>
        </div>
        <div className='underline'></div>
        </DlistStyle>
    )
}

const DlistStyle = styled.div`
.list-item{
    display:flex;
    padding 24px 0;
}

.list-item-img{
    width:300px;
    height:200px;
    border-radius:8px;
    margin-right:16px;
    overflow:hidden;
    position:relative;
}

.list-item-img>img{
    width:300px;
    height:200px;
    border-radius:8px;
    object-fit: fill;
}



.list-item-content{
    height:200px;
    width:476px;
    position: relative;
}

.list-item-content__top{
    display:flex;
    justify-content:space-between;
}

.list-item-content__sub{
    color:#717171;
    margin-bottom:4px;
}

.list-item-content__title{
    font-size:18px;
}

.underbar{
    margin-top:11px;
    width:32px;
    height:1px;
    background-color:#dddddd;
}

.list-item-content__rooms{
    margin-top:9px;
    color:#717171;
}

.list-item-content__filtered{
    color:#717171;
}

.list-item-content__bottom{
    display:flex;
    position:absolute;
    bottom:0;
}

.list-item-content__score{
    display:flex;
    align-items:center;
}

.score{
    font-weight:600;
    margin:0 4px;
}

.list-item-content__top__heart{
    stroke: black;
    stroke-width: 2px;
}

.list-item-content__review{
    color: #717171;
}
`;

export default DlistItem;