import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";


import SearchBar from "./SearchBar";
import UserClick from "../UserClick";

import { ReactComponent as Globe } from '../../svg/globe.svg';
import { ReactComponent as User } from '../../svg/user.svg';
import { ReactComponent as Bars } from '../../svg/bars.svg';
import { ReactComponent as LogoWhite } from '../../svg/logo-white.svg';



function Header1Black(){
    const [offset, setOffset] = useState(0);
    const [isScroll, setIsScroll] = useState(false);
    const [showUserClick, setShowUserClick] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
        setOffset(window.pageYOffset)
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(offset>52) setIsScroll(true);
            else setIsScroll(false);
        });
        return ()=>{
            window.removeEventListener("scroll", ()=>{
                if(offset>52) setIsScroll(true);
                else setIsScroll(false);
            })
        } 
        
    }, [offset]);

    const clickUser=()=>{
        setShowUserClick(!showUserClick)
    }
    console.log(showUserClick);


    return (
        <HeaderStyle isScroll={isScroll}>

        <header className="header">
        <div className="covid"><Link to="/">에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</Link></div>
        <div className="navbarA">
            <Link to="/" className="navbar__logo"><LogoWhite /></Link>
            <div className="navbarA__menu">
                <div className="menu__list selected">
                    <span>숙소</span>
                    <div className="menu__list-under-bar"></div>
                </div>
                <div className="menu__list">
                    <span>체험</span>
                    <div className="menu__list-under"></div>
                </div>
                <div className="menu__list">
                    <span>온라인 체험</span>
                    <div className="menu__list-under"></div>
                </div>
            </div>


            <div className="user-menu">
                <div className="to-be-host"><Link to="/">호스트 되기</Link></div>
                <div className="user-lang">
                    <Globe />
                </div>
                <button className="user" onClick={clickUser}>
                    <div className="user-bars">
                        <Bars />
                    </div>
                    <div className="user-img">
                        <User />
                    </div>
                </button>
                {showUserClick && <UserClick clickUser={clickUser}
                margin={isScroll?"0px 80px 0 0":"50px 80px 0 0"}/>}
            </div>
        </div>
        <div className="searchBar">
            <SearchBar isScroll={isScroll} />
        </div>
        
    </header>
    
    

        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
.header{
    background-color : ${(props) => (props.isScroll? "white" : "black")};
    color : ${(props) => (props.isScroll? "black" : "white")};
    position: fixed;
    top: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    z-index:1;
}


.covid{
    display : ${(props) => (props.isScroll? "none" : "block")};
    padding: 16px 40px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    text-decoration: underline;
}

.covid>a{
    color: white;
}

.covid>a:hover{
    color: #dddddd;
    cursor: pointer;
}

.navbarA{
    display : flex;
    padding: 0 80px;
    height: 80px;
    color: ${(props) => (props.isScroll? "black" : "white")};
    justify-content: space-between;
    align-items: center;
}

.navbar__logo{
    color: ${(props) => (props.isScroll? "#FF385C;" : "white")};
}


.navbarA__menu{
    display: ${(props) => (props.isScroll? "none" : "flex")};
    margin-left: 130px;
}

.menu__list{
    padding: 10px 16px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.menu__list-under-bar{
    width: 50%;
    height: 2px;
    background-color: white;
    margin-top: 10px;
}

.menu__list-under{
    width: 4px;
    height: 2px;
    background-color: white;
    margin-top: 10px;
    transition: 0.2s transform;
    transform: scaleX(0);
}




.menu__list:hover{
    color: #B0B0B0;
}

.selected:hover{
    color: white;
}



.user-menu{
    display: flex;
}

.to-be-host{
    font-size: 14px;
    font-weight: 600;
    padding: 10px 15px;
}

.to-be-host>a{
    color: ${(props) => (props.isScroll? "black" : "white")};
}


.user-lang{
    display: flex;
    align-items: center;
    padding: 10px 15px;
}

.to-be-host:hover, .user-lang:hover{
    background-color: ${(props) => (props.isScroll? "#f7f7f7" : "#222222")};
    border-radius: 30px;
    cursor: pointer;
}

.user{
    margin-left: 10px;
    padding: 6px 7px;
    display: flex;
    align-items: center;
    border-radius: 30px;
    border: 1px solid #dddddd;
    transition: 0.2s ease;
    position:relative;
}

.user-bars>i{
    font-size: 15px;
    padding: 5px;
    color: #717171;
}

.user-img{
    color: #717171;
    font-size: 30px;
    margin-left: 10px;
    width: 30px;
}

`;




export default Header1Black;