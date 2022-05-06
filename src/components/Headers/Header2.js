import { Link } from 'react-router-dom';
import styled from "styled-components";

import HeaderUser from './HeaderUser';

import { ReactComponent as LogoPink } from '../../svg/logo-pink.svg';
import { ReactComponent as LogoMobile } from '../../svg/logo-mobile.svg';
import { ReactComponent as Left } from '../../svg/left.svg';
import { ReactComponent as Filter } from '../../svg/filter.svg';



function Header2(){
    return(
        <Header2style>
            <header className="header2">
                <div className="navbar2">
                    <Link to="/" className="navbar__logo2"><LogoPink /></Link>
                    <HeaderUser margin={"0 80px 0 0"} />
                </div>
            </header>

            <header className='header2-mobile'>
                <button className='mobile-backBtn'><Left/></button>
                <div className='header2-mobile__center'>
                    <div style={{paddingRight:"8px"}}>언제든</div>
                    <div style={{paddingLeft:"8px", color:"#717171" }}>게스트 추가</div>
                </div>
                <button className='mobile-filter'><Filter/></button>
            </header>
        </Header2style>
        

    )
}

const Header2style = styled.div`

.header2-mobile{
    display:none;
    justify-content:space-between;
    height:70px;
    padding: 18px 24px 0 24px;
    align-items:center;
    position:fixed;
    top:0;
    z-index:10;
    background-color:white;
    width:100%;
}

.header2-mobile__center{
    display:flex;
    align-items:center;
    border-radius:24px;
    background-color:#f7f7f7;
    height:48px;
    padding:0 24px;
    font-size:14px;
    font-weight:600;
}

.navbar2{
    padding: 0 80px;
    border-bottom: 1px solid #dddddd;
    color: black;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar__logo2{
    color: #FF385C;
}
`;
export default Header2;