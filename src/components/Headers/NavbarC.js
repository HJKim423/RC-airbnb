import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Grade from "../Grade";

function NavbarC(props){

        const goMain = () =>{
            const goHeight = props.main.current.offsetTop - 80;
            window.scrollTo({top: goHeight, behavior: 'smooth'});
        }

        const goConv = () =>{
            const goHeight = props.conv.current.offsetTop - 80;
            window.scrollTo({top: goHeight, behavior: 'smooth'});
        }
        const goReview = () =>{
            const goHeight = props.review.current.offsetTop - 80;
            window.scrollTo({top: goHeight, behavior: 'smooth'});
        }
        const goPlace = () =>{
            const goHeight = props.place.current.offsetTop - 80;
            window.scrollTo({top: goHeight, behavior: 'smooth'});
        }
    
    return (
        <nav className="navbar">
        <ul className="navbar__menu">
            <li className="navbar__menu__item"  onClick={goMain}>사진</li>
            <li className="navbar__menu__item"  onClick={goConv}>편의시설</li>
            <li className="navbar__menu__item"  onClick={goReview}>후기</li>
            <li className="navbar__menu__item"  onClick={goPlace}>위치</li>
        </ul>
        {props.offset > 2340 ? <NavbarRes /> : ""}
        

    </nav>
    )
}

export default NavbarC;



function NavbarRes(){
    return(
        <div className="navbar__reservation">
            <div className="navbar__reservation__text">
                <div className="right__box__title n">
                    <span className="line-through">₩226,102</span>
                    <span>₩185,404</span>
                    <span className="line-small n"> / 박</span>
                </div>
                <div className="right__box__review n">
                    <Grade />
                </div>
            </div>
            <Link to='/reservation'>
                <button className="navbar__reservation__btn">예약하기</button>
            </Link>
            
        </div>
    )
}