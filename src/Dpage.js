import styled from "styled-components";

import dummy from './db/data.json';

import Footer from "./components/Footers/Footer";
import HeaderUser from "./components/Headers/HeaderUser";
import DlistItem from "./components/DlistItem";
import GoogleMap from "./components/GoogleMap";
import { Link } from 'react-router-dom';

import { ReactComponent as LogoPink } from './svg/logo-pink.svg';
import { ReactComponent as Search } from './svg/search.svg';
import { ReactComponent as Toggle } from './svg/toggle.svg';
import { ReactComponent as Filter } from './svg/filter.svg';
import { ReactComponent as Trophy } from './svg/trophy.svg';
import { ReactComponent as Left } from './svg/left.svg';
import { ReactComponent as Right } from './svg/right.svg';
import { useState } from "react";

function Dpage(){
    const [filterItem,setFilterItem] = useState(["취소 수수료 없음","수변에 인접","무선 인터넷","주방",
"세탁기","에어컨","셀프 체크인","무료 주차 공간","건조기","업무 전용 공간","헬스장","다리미"]);

    return (
        <>
        <HeaderDstyle>
            <div className="headerD">
                <Link to="/" className="navbar__logo3"><LogoPink /></Link>
                    <div className="search-bar3">
                        <div className="search-ment">지도 표시 지역</div>
                        <div className="rightline" style={{margin:0}}></div>
                        <div className="search-ment">날짜 입력</div>
                        <div className="rightline" style={{margin:0}}></div>
                        <div className="search-ment" style={{fontWeight:300}}>게스트 추가</div>
                        <span className="search-icon3"><Search /></span>
                    </div>
                    <HeaderUser margin={"0 24px 0 0"}/>
            </div>
            <div className="navbarD">
                <div className="navbarD-left">
                    <div className="navbarD-left__text">요금</div>
                    <div className="navbarD-left__icon"><Toggle/></div>
                </div>
                <div className="navbarD-left">
                    <div className="navbarD-left__text">숙소 유형</div>
                    <div className="navbarD-left__icon"><Toggle/></div>
                </div>
                <div className="rightline"></div>
                    <div className="navbarD-filter-items">
                        {filterItem.map((filterItem,index)=>(
                            <div key={index} className="navbarD-filter-item">{filterItem}</div>
                        ))}
                        <div className="navbarD-filter-filter">
                            <div className="navbarD-filter__icon"><Filter/></div>
                            <div className="navbarD-filter__text">필터</div>
                        </div>
                </div>
            </div>
            
            <div className="underline"></div>
        </HeaderDstyle>
        <MainDstyle>
            <div className="mainD-list">
                <div className="mainD-list__top">
                    <div>대한민국 서울특별시에 위치한 300개 이상의 숙소</div>
                    <div style={{color:"#717171"}}>여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.</div>
                    <div>
                            <Trophy/>
                            <span>390,000명의 게스트가 서울의 숙소에 머물렀습니다. 게스트는 평균적으로 이 숙소를 별 5개 만점에 4.8점으로{'\n'}
                                 평가했습니다.</span>
                    </div>
                </div>
                <div className="underline"></div>
                {dummy.dlist.map(item =>(
                    <DlistItem item={item}/>
                ))}

                <div className="mainD-list__bottom">
                    <div className="mainD-list__pages">
                        <div className="prevPages"><Left/></div>
                        <div className="pageNumber">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>...</div>
                            <div>15</div>
                        </div>
                        <div className="nextPages"><Right/></div>
                    </div>
                    <div className="mainD-list__pages__text">총 300개 이상의 숙소 중 1 ~20번째</div>
                    <div className="mainD-list__bottom__text">전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이 추가될 수 있습니다.</div>
                </div>
                
            </div>
            <div className="mainD-map">
                    <GoogleMap/>
            </div>
        </MainDstyle>
            
            <Footer/>
        </>
    )
}

const HeaderDstyle = styled.header`

position:sticky;
top:0;
background-color:white;
z-index:1;

.headerD{
    display:flex;
    width:100%;
    height:80px;
    justify-content:space-between;
    align-items:center;
    padding: 0 24px;
}

.search-bar3{
    padding-left:8px;
}
.search-ment{
    font-size:14px;
    padding: 0 16px;
    font-weight:600;
}

.navbarD{
    padding:8px 24px 12px 24px;
    display:flex;
    align-items:center;
    
}

.navbarD-left{
    margin:4px 8px 4px 0;
    display:flex;
    border: 1px solid #dddddd;
    border-radius:30px;
    padding:9px 16px;
    align-items:center;
    cursor:pointer;
    transition: all 0.2s ease;
}

.navbarD-left__text{
    margin-right:9.5px;
    font-size:14px;
}

.rightline{
    width:1px;
    height:20px;
    margin:0 16px 0 8px;
    background-color:#dddddd;
}

.navbarD-filter-items{
    display:flex;
}

.navbarD-filter-item{
    margin:4px 8px 4px 0;
    display:flex;
    border: 1px solid #dddddd;
    border-radius:30px;
    padding:9px 16px;
    align-items:center;
    font-size:14px;
    cursor:pointer;
    transition: all 0.2s ease;
}

.navbarD-left:hover, .navbarD-filter-item:hover{
    border: 1px solid black;
}

.navbarD-filter-filter{
    margin:4px 8px 4px 0;
    display:flex;
    border: 1px solid #dddddd;
    border-radius:30px;
    padding:9px 16px;
    align-items:center;
    font-size:14px;
    cursor:pointer;
    transition: all 0.2s ease;
}

.navbarD-filter__icon{
    margin-right:6px;
}


`;
const MainDstyle = styled.main`
display:grid;
grid-template-columns:1fr 1fr;
height:807px;

.mainD-list{
    padding:24px;
    font-size:14px;
    overflow-y:scroll;
}

.mainD-list::-webkit-scrollbar {
    display: none; 
}

.mainD-list__top>div{
   margin-bottom:24px;
   display:flex;
   white-space:pre-line;
   align-items:center;
}

.mainD-list__top>div>span{
    margin-left:12px;
}

.mainD-list__bottom{
    text-align:center;
}

.mainD-list__pages{
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:40px;
}

.prevPages>svg, .nextPages>svg{
    width:16px;
    height:16px;
}

.mainD-list__pages__text{
    margin-top:16px;
}

.mainD-list__bottom__text{
    font-size:12px;
    margin-top:32px;
    margin-bottom:8px;
    color:#717171;
}

.pageNumber{
    display:flex;
    align-items:center;
}

.pageNumber>div{
    width:32px;
    height:32px;
    margin: 0 8px;
    font-size:14px;
    font-weight:600;
    display:flex;
    align-items:center;
    justify-content:center;
}

.pageNumber>div:hover, .nextPages:hover{
    border-radius:50%;
    background-color:#f7f7f7;
}

.mainD-map{
    position:sticky;
    width:100%;
}
`;


export default Dpage;