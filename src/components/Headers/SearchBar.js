import { useState, useEffect, useRef } from "react";

import { ReactComponent as Search } from '../../svg/search.svg';
import HeadcountBox from "../whenClick/HeadcountBox";
import CelenderBox from '../whenClick/CelenderBox';
import LocationBox from "../whenClick/LocationBox";
import LocBoxSeoul from "../whenClick/LocBoxSeoul";
import styled from "styled-components";



function SearchBar(props){
    const [countHide, setCountHide] = useState(false);
    const [celHide , setCelHide] = useState(false);
    const [locHide, setLocHide] = useState(false);
    const [seoul, setSeoul] = useState(false);

    //"서울"입력시 하단 박스 변화
    const inputLoc = (e)=>{
        if(e.target.value === "서울"){
            setSeoul(true);
        }else{
            setSeoul(false);
        }
    }

    
    //search Bar 외부 클릭시 감지
    // const myMenuRef = useRef();
    // useEffect(() => {
    //     function handleClickOutside(e){
    //         if (myMenuRef.current && !myMenuRef.current.contains(e.target) ) {
    //             setLocHide(!locHide);
    //             console.log(locHide);
    //         }
    //     }
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [myMenuRef]);

    
    return(
        <>
        <SearchBarStyle isScroll={props.isScroll}>
        <div className={`search-barA ${locHide || countHide ? "hide" : ""}`} >
            <div className="search__location" onClick={() => setLocHide(!locHide)} >
                <div className="search__text">위치</div>
                <input type="text" class="location__input" placeholder="어디로 여행가세요?"/>
            </div>
            <div className="right-line"></div>
            <div className="search__check-in">
                <div className="search__text" onClick={() => setCelHide(!celHide)}>체크인</div>
                <div className="check-in__text">날짜 입력</div>
            </div>
            <div className="right-line"></div>
            <div className="search__check-out" onClick={() => setCelHide(!celHide)}>
                <div className="search__text">체크아웃</div>
                <div className="check-out__text">날짜 입력</div>
            </div>
            <div className="right-line"></div>
            <div className="search__headcount" onClick={e=> setCountHide(!countHide)}>
                <div className="search__text">인원</div>
                <div className="headcount__text">게스트 추가</div>
            </div>
            <button className="search__btn" onClick={() => setLocHide(!locHide)}>
                <Search />
                <span></span>
            </button>
        </div>

        {/* 위치 클릭시 */}
        <div className={`search-barA ${locHide ? "" : "hide"}`} style={{backgroundColor:"#f7f7f7"}} >
        <div className="search__location" style={{backgroundColor:"white", borderRadius:"32px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 20px"}}> 
            <div className="search__text" onClick={() => setLocHide(!locHide)}>위치</div>
            <input type="text" class="location__input" placeholder="어디로 여행가세요?" onChange={inputLoc} />
        </div>
        <div className="right-line"></div>
        <div className="search__check-in">
            <div className="search__text">체크인</div>
            <div className="check-in__text">날짜 입력</div>
        </div>
        <div className="right-line"></div>
        <div className="search__check-out">
            <div className="search__text">체크아웃</div>
            <div className="check-out__text">날짜 입력</div>
        </div>
        <div className="right-line"></div>
        <div className="search__headcount">
            <div className="search__text">인원</div>
            <div className="headcount__text">게스트 추가</div>
        </div>
        <button className="search__btn" style={{width:"92px", borderRadius:"32px"}}>
            <span><Search /></span>
            <span style={{fontSize:"16px", fontWeight:"600", padding:"0 4px 0 8px", lineHeight:"16px", writingMode:"vertical-lr"}}>검색</span>
        </button>
    </div>
    {locHide && (!seoul) && <LocationBox />}
    {seoul &&<LocBoxSeoul />}


    {/* 인원 클릭시 */}
    <div className={`search-barA ${countHide ? "" : "hide"}`}  style={{backgroundColor:"#f7f7f7"}}>
        <div className="search__location">
            <div className="search__text">위치</div>
            <input type="text" class="location__input" placeholder="어디로 여행가세요?"/>
        </div>
        <div className="right-line"></div>
        <div className="search__check-in">
            <div className="search__text">체크인</div>
            <div className="check-in__text">날짜 입력</div>
        </div>
        <div className="right-line"></div>
        <div className="search__check-out">
            <div className="search__text">체크아웃</div>
            <div className="check-out__text">날짜 입력</div>
        </div>
        <div className="right-line"></div>
        <div className="search__headcount" onClick={e=> setCountHide(!countHide)} style={{backgroundColor:"white", borderRadius:"32px 0 0 32px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 20px"}}>
            <div className="search__text">인원</div>
            <div className="headcount__text">게스트 추가</div>
        </div>
        <div style={{backgroundColor:"white", borderRadius:"0 32px 32px 0", display: "flex"}}>
        <button className="search__btn" style={{width:"92px", borderRadius:"32px"}}>
            <span><Search /></span>
            <span style={{fontSize:"16px", fontWeight:"600", padding:"0 4px 0 8px", lineHeight:"16px", writingMode:"vertical-lr"}}>검색</span>
        </button>
        </div>
    </div>

    {countHide && <div className="boxA"><HeadcountBox /></div> }


        <div className="boxA">
            {celHide && <CelenderBox />}
        </div>
        </SearchBarStyle>


        <ScrollSearchBarStyle isScroll={props.isScroll}>
            <div className="search-bar1" >
                <span className="search-ment1">검색 시작하기</span>
                <span className="search-icon1"><Search /></span>
            </div>
        </ScrollSearchBarStyle>
        </>
    )
}


const SearchBarStyle = styled.div`
// transform: ${(props) => (props.isScroll? "scaleX(0.5)" : "scaleX(1)")};
transition: 0.2s ease-in-out;
.search-barA{
    display: ${(props) => (props.isScroll? "none" : "flex")};
    background-color: white;
    border-radius: 32px;
    margin: auto;
    width: 848px;
}

.search__text{
    color: black;
    font-size: 12px;
    font-weight: 600;
}

.search__location{
    padding: 14px 24px 14px 35px;
    width: 270px;
}

.location__input{
    background-color: transparent;
}

.location__input::placeholder{
    color: gray;
    font-size: 14px;
}

.search__check-in, .search__check-out{
    padding: 14px 24px;
    width: 178px;
}

.check-in__text, .check-out__text, .headcount__text{
    color: gray;
    font-size: 14px;
}

.search__headcount{
    padding: 14px 24px;
    width: 170px;
}

.search__location:hover, .search__check-in:hover,
.search__check-out:hover, .search__headcount:hover{
    cursor: pointer;
    background-color: #dddddd;
    border-radius: 32px;
}

.right-line{
    width: 1px;
    height: 32px;
    background-color: #dddddd;
    margin-top: 16px;
}

.search__btn{
    display: flex;
    background-color: #FF385C;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 16px;
    font-size: 16px;
    color: white;
    margin: auto 0;
    margin-right: 7px; 
}

.hide{
    display: none;
}
`;


const ScrollSearchBarStyle = styled.div`

height: 0;

.search-bar1{
    margin: auto;
    width: 300px;
    height: 48px;
    display: ${(props) => (props.isScroll? "flex" : "none")};
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    border: 1px solid #dddddd;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
    transform: translateY(-60px);
    

}


.search-ment1{
    font-size: 14px;
    font-weight: 700;
    width: 251px;
    padding: 0 24px;
}

.search-icon1{
    width: 32px;
    height: 32px;
    background-color: #FF385C;
    border-radius: 50%;
    color: white;
    margin-right: 7px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

`;


export default SearchBar;