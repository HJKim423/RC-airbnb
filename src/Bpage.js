import { useState } from 'react';

import Header2 from './components/Headers/Header2';
import Footer from './components/Footers/Footer';
import Item from './components/caresel/Item';
import './Bpage.css';
import './BpageMedia.css';

import { ReactComponent as Toggle } from './svg/toggle.svg';
import { ReactComponent as Filter } from './svg/filter.svg';
import { ReactComponent as SearchMobile } from './svg/mobile/search.svg';
import { ReactComponent as HeartMobile } from './svg/mobile/heart.svg';
import { ReactComponent as LoginMobile } from './svg/mobile/login.svg';
import HeadcountBox from './components/whenClick/HeadcountBox';
import CelenderBox from './components/whenClick/CelenderBox';



function Bpage(){
    const [countHide, setCountHide] = useState(true);
    const [celHide , setCelHide] = useState(true);
    
    return(
    <body>
        <Header2/>
        <nav className="nav">
            <div className="nav__menu">
            <Menu />
                <div className="menu-item-more">
                    더 보기
                    <span className="toggle"><Toggle /></span>
                </div>
            </div> 
            <div className="filters">   
                <button className="filters__time" onClick={e=>{ celHide? setCelHide(false) : setCelHide(true)}}>
                    <span className="filters__text">언제든</span>
                    <span className="toggle"><Toggle /></span>
                </button>
                <div className={`boxB ${celHide ? "hide" : ""}`}>
                    <CelenderBox />
                </div>
                <button className="filters__headcount" onClick={e=>{ countHide? setCountHide(false) : setCountHide(true)}}>
                    <span className="filters__text">인원</span>
                    <span className="toggle"><Toggle /></span>
                </button>
                <div className={`boxB ${countHide ? "hide" : ""}`}>
                    <HeadcountBox />
                </div>
                <button className="filters__filter">
                    <Filter />
                    <span className="filters__text no">필터</span>
                </button>

            </div>
            
        </nav>

        <Item />
        <Footer />
        <div className='footer-mobile'>
            <button className='footer-mobile-list'>
                <div className='footer-mobile-list-icon' style={{color:"#ff385c"}}><SearchMobile/></div>
                <div className='footer-mobile-list-text'>둘러보기</div>
            </button>
            <button className='footer-mobile-list'>
                <div className='footer-mobile-list-icon'><HeartMobile/></div>
                <div className='footer-mobile-list-text'>위시리스트</div>
            </button>
            <button className='footer-mobile-list'>
                <div className='footer-mobile-list-icon'><LoginMobile/></div>
                <div className='footer-mobile-list-text'>로그인</div>
            </button>
        </div>
    </body>
    )
}

function Menu(){
    const [menus, setMenus] = useState(['성','멋진 수영장','해변 근처','농장','통나무집',
'A자형 주택','캠핑카','중국 전통 여인숙','료칸','개성 넘치는 숙소','키클라데스 주택']);
    return(
        <>
            {menus.map((menu, index) => (
                    <div key={index} className="menu-item">{menu}</div>
            ))}
        </>
    )
}



export default Bpage;