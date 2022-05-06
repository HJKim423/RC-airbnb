import { Link } from "react-router-dom";

import { ReactComponent as LogoPink } from './svg/logo-pink.svg';
import { ReactComponent as Facebook } from './svg/facebook.svg';
import { ReactComponent as Twitter } from './svg/twitter.svg';
import { ReactComponent as Insta } from './svg/insta.svg';
import { ReactComponent as Blog } from './svg/blog.svg';
import { ReactComponent as Post } from './svg/post.svg';
import { ReactComponent as Globe } from './svg/globe.svg';
import { ReactComponent as Left } from './svg/left.svg';
import { ReactComponent as FB } from './svg/fb.svg';
import { ReactComponent as Google } from './svg/google.svg';
import { ReactComponent as Apple } from './svg/apple.svg';
import { ReactComponent as Mail } from './svg/mail.svg';

import Login from "./components/Login";
import Fee from "./components/Fee";


import './Reservation.css';

function Reservation(){
    return (
        <body>
            <header className="reservation-header">
                <Link to='/' className="reservation-header-logo"><LogoPink /></Link>
            </header>
            <main className="reservation-main">
                <section className="reservation-left">
                    <div className="reservation-left__top">
                        <Link to='/cPage' className="reservation-left__title__icon"><Left/></Link>
                        <div className="reservation-left__title__text">예약 요청</div>
                    </div>
                    <div className="reservation-left__info">
                        <div className="reservation-left__title">예약 정보</div>
                        <div className="reservation-left__info__date">
                            <div className="reservation-left__info__date__left">
                                <div className="reservation-left__info__date__title">날짜</div>
                                <div className="reservation-left__info__date__content">11월 27일 ~ 12월 4일</div>
                            </div>
                            <button className="reservation-left__info__date__modify">수정</button>
                        </div>
                        <div className="reservation-left__info__guest">
                            <div className="reservation-left__info__guest__left">
                                <div className="reservation-left__info__guest__title">게스트</div>
                                <div className="reservation-left__info__guest__content">게스트 1명</div>
                            </div>
                            <button className="reservation-left__info__guest__modify">수정</button>
                        </div>
                    </div>

                    <div className="underline"></div>

                    <div className="reservation-left__pay">
                        <div className="reservation-left__title">결제 방식 선택하기</div>
                        <div className="reservation-left__pay__box">
                        <div className="reservation-left__pay__box__item1">
                            <div className="reservation-left__pay__box__top">
                                <div className="reservation-left__pay__box__title">전액 결제</div>
                                <div className="reservation-left__pay__box__right">
                                    <div className="reservation-left__pay__box__price">₩1,333,781</div>
                                    <input type="radio" className="reservation-left__pay__box__radio"></input>
                                </div>
                            </div>
                            <div className="reservation-left__pay__box__content">총액을 결제하시면 모든 절차가 완료됩니다</div>
                        </div>
                        <div className="reservation-left__pay__box__item2">
                            <div className="reservation-left__pay__box__top">
                                <div className="reservation-left__pay__box__title">요금 일부는 지금 결제, 나머지는 나중에 결제</div>
                                <div className="reservation-left__pay__box__right">
                                    <div className="reservation-left__pay__box__price">₩666,891</div>
                                    <input type="radio" className="reservation-left__pay__box__radio"></input>
                                </div>
                            </div>
                            <div className="reservation-left__pay__box__content">지금 ₩666,891을(를) 결제하시면, 나머지 금액(₩666,890)은 동일한 {"\n"}
                            결제수단으로 2022년 10월 20일 자동 청구됩니다. 추가 수수료는 {"\n"}
                            없습니다.</div>
                            <div style={{fontWeight:"600", textDecoration:"underline", marginTop:"8px"}}>상세 정보</div>
                        </div>  
                        </div>
                    </div>

                    <div className="underline"></div>

                    <div className="reservation-left__login">
                        <div className="reservation-left__title">예약하려면 로그인 또는 회원 가입하세요</div>
                        <div><Login /></div>
                        <div className="reservation-left__login__sns">
                            <button className="login-sns"><FB/></button>
                            <button className="login-sns"><Google/></button>
                            <button className="login-sns"><Apple/></button>
                        </div>
                        <button className="reservation-left__login__email">
                            <div className="email-icon"><Mail/></div>
                            <div className="email-text">이메일로 로그인하기</div>
                        </button>
                    </div>
                </section>

                <section className="reservation-right">
                    <div className="reservation-right__box">
                        <div className="reservation-right__box__top">
                            <img src="./img/items/item1.webp"></img>
                            <div className="reservation-right__box__top__info">
                                <div className="top__info__title">
                                    <div className="top__info__title__type">성</div>
                                    <div className="top__info__title__name">Torzimmer auf Schloss Arenfels</div>
                                </div>
                                <div className="top__info__host">슈퍼호스트</div>
                            </div>
                        </div>
                        <div className="underline">
                            <div className="reservation-right__box__fee">
                                <div className="reservation-right__title">요금 세부정보</div>
                                <Fee />
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <footer>
            <div className="footer-info">
            <div className="info-links">
                <span>© 2022 Airbnb, Inc.</span>
                <span>·</span>
                <a>개인정보 처리방침</a>
                <span>·</span>
                <a>이용약관</a>
                <span>·</span>
                <a>사이트맵</a>
                <span>·</span>
                <a>한국의 변경된 환불 정책</a>
                <span>·</span>
                <a>회사 세부정보</a>
            </div>
            <div className="info-right">
                <div className="info-country">
                    <div className="country-lang">
                        <Globe />
                        <span>한국어 (KR)</span>
                    </div>
                    <div className="country-exchange">
                        ₩
                        <span>KRW</span>
                    </div>
                </div>
                <div className="info-sns">
                    <Facebook />
                    <Twitter />
                    <Insta />
                    <Blog />
                    <Post />
                </div>
            </div>
            
        </div>
            </footer>
        </body>
    )
}

export default Reservation;