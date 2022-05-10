import Footer from './components/Footers/Footer';
import './Hosting.css';
import GoogleMap from './components/GoogleMap';
import Ukraine from './components/Ukraine';

import styled from "styled-components";
import CareselHosting from './components/caresel/CareselHosting';

import { ReactComponent as LogoWhite } from './svg/logo-white.svg';
import { Link } from 'react-router-dom';

function Hosting(){

    return(
        <>
        <section className="section-top">
            <div className='section-top__left'>
                <Link to="/">
                    <div className='section-top-icon'><LogoWhite/></div>
                </Link>
                
                <div className='section-top-content'>
                    <div className='section-top-content__text'>
                        호스팅을{"\n"}
                        시작해보세요</div>
                        <button className='section-top-content__btn'>호스팅 시작하기</button>
                </div>
            </div>
            <div className='section-top__video'>
                <video autoPlay muted width="100%" height="">
                    <source src='/hosting1.webm' type='video/mp4'></source>
                </video>
            </div>
        </section>
        <section className='section-income'>
            <div className='section-title'>
                호스팅으로 올릴 수 있는{"\n"}
                수입을 확인하세요
            </div>
            <div className='section-income-boxes'>
                    <div className='section-income-box'>
                        <div className='income-box-title'>동일 지역 내 호스트의 평균 수입은 다음과 같습니다.*</div>
                        <div className='income-box-content' style={{color:"#ff385c"}}>₩2,454,937 <span>/월</span></div>
                    </div>
                    <div className='section-income-box'>
                        <div className='income-box-title'>호스팅 수입</div>
                        <div className='income-box-content'>₩98,197 <span>/박</span></div>
                    </div>
                    <div className='section-income-box'>
                        <div className='income-box-title'>예약 일수:</div>
                        <div className='income-box-content'>25 <span>박/월</span></div>
                    </div>
            </div>
            <div className='section-income__map-title'>숙소를 소개해주세요</div>
            <div className='section-income__map'><GoogleMap/></div>
            <div className='section-income__map-text'>*에어비앤비가 예상 수입을 산정하는 방법</div>
        </section>
        <section className='section-caresel'>
            <div className='section-title'>
                언제 어디서든{"\n"}
                호스팅하실 수 있습니다
            </div>
            <CareselHosting/>
        </section>
        <UkrStyle><Ukraine/></UkrStyle>
        <section className='section-superHost'>
            <div className='section-superHost-text'>
                호스팅에 관해 궁금하신 점이 있나요?{"\n"}
                슈퍼호스트에게 물어보세요.
            </div>
            <button className='section-btn'>자세히 알아보기</button>
        </section>
        <section className='section-airCover'>
            <div className='section-airCover-content'>
                <img src='./img/hosting/aircover.webp'></img>
                <div className='airCover-content-text'>
                호스팅 전반에 대한 보호.{"\n"}
                모든 예약에 항상 무⁠료⁠로 제⁠공.{"\n"}
                오직 에어비앤비에서만.
                </div>
                <button className='section-btn'>자세히 알아보기</button>
            </div>
            <div className='section-airCover-img'>
                <img src='./img/hosting/sofa.webp'></img>
            </div>
        </section>
        <section className="section-top">
            <div className='section-top__video'>
                <video autoPlay muted width="100%" height="">
                    <source src='/hosting2.webm' type='video/mp4'></source>
                </video>
            </div>
            <div className='section-top__left'>
                <div className='section-top-content'>
                    <div className='section-bottom-content__text'>
                        에어비앤비에서{"\n"}
                        호스팅을 시작해보세요</div>
                    <div className='section-bottom-content__text__text'>
                        에어비앤비에서 호스트가 되어보세요. 에어비앤비가{"\n"}
                        모든 단계에서 도와드립니다.</div>

                        <button className='section-top-content__btn'>시작하기</button>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
const UkrStyle = styled.div`
.Ukraine{
    background-color:white;
    padding:0;
    margin:96px 48px 0 48px;
}

.uk-box{
    height:450px;
    
}

`;

export default Hosting;