import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {createStore} from "redux";

import './Apage.css';
import Header1Black from "./components/Headers/Header1-black";
import Footer from './components/Footers/Footer';
import Ukraine from "./components/Ukraine";


function Apage(){
    // const [offset, setOffset] = useState(0);

    // useEffect(() => {
    //     window.onscroll = () => {
    //     setOffset(window.pageYOffset)
    //     }
    // }, []);

    return(
<body>  
        
        <Header1Black />
        <Ukraine/>
    

    <section className="flexibleSearch">
        <div className="fs-box">
            <img src='img/flexible.webp'></img>
            <div className="fs-ment">호기심을 자극하는 숙소로 떠나보세요</div>
            <Link to='/bPage'>
                <button className="fs-btn"><span>유연한 검색</span></button>
            </Link>
        </div>
    </section>

    <section className="idea">
        <div className="idea-ment">설레는 다음 여행을 위한 아이디어</div>
        <div className="cities">
            <IdeaCard idx={0}/>
            <IdeaCard idx={1}/>
            <IdeaCard idx={2}/>
            <IdeaCard idx={3}/>
        </div>
    </section>
    
        

    <section className="experience">
        <div className="exp-ment">에어비앤비 체험 둘러보기</div>
        <div className="exps">
            <div className="exps-travel">
                <div className="exps-ment display">여행 중 만나는{"\n"}
                이색적인 즐길 거리</div>
                <button className="exps-btn">체험</button>
            </div>
            <div className="exps-home">
                <div className="exps-ment">집에서 만나는{"\n"}
                다양한 즐길 거리</div>
                <button className="exps-btn">온라인 체험</button>
            </div>
        </div>
    </section>

    <section className="superHostSection">
        <div className="host-bg">
            <div className="host-ment">호스팅에 관해{"\n"}
            궁금하신 점이{"\n"} 
            있나요?</div>
            <button className="host-btn">슈퍼호스트에게 물어보세요</button>
        </div>
    </section>

    <Footer />
</body>
    );
}

function IdeaCard(props){
    const cityImg = ['img/seoul.webp','img/incheon.webp','img/deagu.webp','img/daejeon.webp'];
    const cityName = ['서울','인천','대구','대전'];
    const cityDis= [2, 29,237,140];
    const bgColor=['#D93B30','#CC2D4A','#DE3151','#BC1A6E'];

    return(
        <div className="city" style={{backgroundColor:bgColor[props.idx]}}>
            <img className='city-img' src={cityImg[props.idx]}></img>
            <div className="city-name">{cityName[props.idx]}</div>
            <div className="city-distance">{cityDis[props.idx]}km 거리</div>
        
        </div>
    )

}

export default Apage;