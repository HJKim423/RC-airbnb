import { useState, useEffect, useRef} from "react";
import { useParams } from 'react-router-dom';

import Header3 from './components/Headers/Header3';
import NavbarC from "./components/Headers/NavbarC";
import FooterC from './components/Footers/FooterC';
import Grade from './components/Grade';
import More from './components/more';
import Conv from './components/Conv';
import Review from './components/Review';
import Notice from './components/Notice';
import Calender from './components/Calender';
import Fee from "./components/Fee";

import './Cpage.css';

import { ReactComponent as Toggle } from './svg/toggle.svg';
import { ReactComponent as Right } from './svg/right.svg';
import { ReactComponent as Star } from './svg/star.svg';
import { ReactComponent as Medal } from './svg/medal.svg';
import { ReactComponent as Warning } from './svg/warning.svg';
import { ReactComponent as Share } from './svg/share.svg';
import { ReactComponent as Store } from './svg/store.svg';
import { ReactComponent as Bed } from './svg/bed.svg';
import { ReactComponent as Report } from './svg/report.svg';
import { ReactComponent as Translate } from './svg/translate.svg';
import { ReactComponent as Keyboard } from './svg/keyboard.svg';
import { ReactComponent as Summary1 } from './svg/summary1.svg';
import { ReactComponent as Summary2 } from './svg/summary2.svg';
import { ReactComponent as Summary3 } from './svg/summary3.svg';
import { ReactComponent as Certify } from './svg/certify.svg';
import { Link } from "react-router-dom";


import dummy from './db/data.json';

function Cpage(){
    const [offset, setOffset] = useState(0);
    const main = useRef();
    const conv = useRef();
    const review = useRef();
    const place = useRef();

    const id = useParams().id;

    useEffect(() => {
        window.onscroll = () => {
        setOffset(window.pageYOffset);
        }
    }, []);

    
    return(
        
    <body>
        <Header3 />
        
        {/* Yoffset 755 기준으로 navbar 변경 */}
        {offset > 755 ? 
        <NavbarC 
        offset={offset}
        main={main} 
        conv={conv} 
        review={review} 
        place={place}/> :
        ""}

    <section className="main" ref={main}>
        <div className="main__info">
            <div className="info__name">{dummy.items[id].loca}</div>
            <div className="info__etc">
                <div className="etc__reviewAndPlace">
                    <Grade />
                    <span className="dot">·</span>
                    <span className="heart">❣</span>
                    <span className="superHost">슈퍼호스트</span>
                    <span className="dot">·</span>
                    <span className="place">Bad Hönningen, Rheinland-Pfalz, 독일</span>
                </div>
                <div className="etc__shareAndStore">
                    <div className="share">
                        <span className="icon"><Share /></span>
                        <span className="text">공유하기</span>
                    </div>
                    <div className="store">
                        <span className="icon"><Store /></span>
                        <span className="text">저장</span>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        <div className="main__img">
            <div className="img__big">
                <img src={dummy.items[id].img} />
            </div>
            <div className="img__small">
            <img src="../img/main/imgSmall1.webp" />
            <img src="../img/main/imgSmall2.webp" />
            <img src="../img/main/imgSmall3.webp" />
            <img src="../img/main/imgSmall4.webp" />
            </div>
            
        </div>
        <button className="img__all-btn">
            <span></span>
            <span>사진 모두 보기</span>
        </button>
    </section>

    <section className="leftAndRight">
        <div className="left">
            <div className="left__title">
                <div className="title__nameAndImg">
                    <div className="title__name">
                        <div className="title__name__id">Benedikt님이 호스팅하는 성</div>
                        <div className="title__name__rooms">최대 인원 2명 · 침실 1개 · 침대 1개 · 욕실 1개</div>
                    </div>
                    <div className="title__img">
                        <img src='../img/host.webp'></img>
                        <div className="title__img__medal"><Medal /></div>
                    </div>
                </div>
            </div>
            <div className="underline"></div>

            <div className="left__summary">
                <div className="summary__content">
                    <div className="summary__content__icon"><Summary1 />
                    </div>
                    <div className="summary__content__text">
                        <div className="summary__content__text-title">Benedikt님은 슈퍼호스트입니다</div>
                        <div className="summary__content__text-sub">
                            슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 
                            편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
                        </div>
                    </div>
                </div>
                <div className="summary__content">
                    <div className="summary__content__icon"><Summary2 />
                    </div>
                    <div className="summary__content__text">
                        <div className="summary__content__text-title">무선 인터넷</div>
                        <div className="summary__content__text-sub">게스트가 자주 찾는 편의시설</div>
                    </div>
                </div>
                <div className="summary__content">
                    <div className="summary__content__icon"><Summary3 />
                    </div>
                    <div className="summary__content__text">
                        <div className="summary__content__text-title">10월 28일 전까지 무료로 취소하실 수 있습니다.</div>
                        <div className="summary__content__text-sub"></div>
                    </div>
                </div>
            </div>

            <div className="underline"></div>

            <div className="left__content">
                <div className="content__translate">
                    <span className="translate-icon"><Translate /></span>
                    <span className="trnaslate-text">일부 정보는 원어로 표시됩니다.</span>
                    <button className="translate-btn">번역</button>
                </div>
                <div className="content__content">Sie mieten unserer Torzimmer im Ostflüel des Schlosses. {"\n"}
Das Schloss blickt auf eine 800 Jahre alte Geschichte zurück und ist DAS Wahrzeichens  {"\n"}
Bad Hönningens. {"\n"}
Schloss Arenfels liegt mitten in den Weinbergen. {"\n"}
Der Wald, die Weinberge und der Rhein laden zum spazieren und wandern ein. {"\n"}
Der Ortskern ist fußläufig innerhalb von 15 Minuten erreichbar.
                </div>
                <More />
            </div>

            <div className="underline"></div>

            <div className="left__bed-room">
                <div className="bed-room__title">숙박 장소</div>
                <div className="bed-room__box">
                    <div className="bed-room__box__icon"><Bed /></div>
                    <div className="bed-room__box__title">침실</div>
                    <div className="bed-room__box__sub">킹사이즈 침대 1개</div>
                </div>
            </div>

            <div className="underline"></div>

            <div ref={conv}>
            <Conv />
            </div>
            

            <div className="underline"></div>

            <div className="left__stay">
                <div className="stay__title">Bad Hönningen에서 7박</div>
                <div className="stay__sub">2022년 11월 27일 - 2022년 12월 4일</div>
                <Calender />
                <div className="stay__btns">
                    <button className="stay__btns__keyboard"><Keyboard /></button>
                    <button className="stay__btns__clean">날짜 지우기</button>
                </div>
            </div>

        </div>
        

        <div className="right">
            <div className="right-all">
                <div className="right__box">
                    <div className="right__box__title">
                        <span className="line-through">₩226,102</span>
                        <span>₩185,404</span>
                        <span className="line-small"> / 박</span>
                    </div>
                    <div className="right__box__review">
                        <Grade />
                    </div>
                    <div className="right__box__check-box">
                        <div className="check-box__top">
                            <div className="check-box__top__in">
                                <div className="check-box__content__text">체크인</div>
                                <div className="check-box__content__date">2022. 11. 27.</div>
                            </div>
                            <div className="check-box__top__out">
                                <div className="check-box__content__text">체크아웃</div>
                                <div className="check-box__content__date">2022. 12. 4.</div>
                            </div>
                        </div>
                        <div className="check-box__bottom">
                            <div className="check-box__bottom__content">
                                <div className="check-box__content__text">인원</div>
                                <div className="check-box__content__date">게스트 1명</div>
                            </div>
                            <div className="check-box__contetn__icon">
                                <Toggle />
                            </div>
                        </div>
                        
                        
                    </div>
                    
                    <Link to='/reservation'>
                        <button className="right__box__btn">예약하기</button>
                    </Link>
                    <div className="right__box__notice">예약 확정 전에는 요금이 청구되지 않습니다.</div>
                    <Fee />
                </div>
                <button className="right__report">
                    <Report />
                    <span>숙소 신고하기</span>
                </button>
            </div>
            


        </div>
        

    </section>

    <div className="underline long"></div>

    <div ref={review}>
        <Review />
    </div>
    

    <div className="underline long"></div>

    <section className="placeSection" ref={place}>
        <div className="place__title">호스팅 지역</div>
        <div className="place__map">
            <img src="../img/map.png"/>
        </div>
        <div className="place__location">Bad Hönningen, Rheinland-Pfalz, 독일</div>
        <div className="place__content">Schloss Arenfels liegt mitten in den Weinbergen am Rande Bad Hönningens.
Es ist direkt am Rheinsteig gelegen und somit bietet es die ideale Ausgangslage für Wanderungen.
...</div>
        <More />
    </section>

    <div className="underline long"></div>

    <section className="host">
        <div className="host__host">
            <div className="host__img">
                <img src='../img/host.webp'></img>
                        <div className="host__img__medal">
                            <Medal />
                        </div>
            </div>
            <div className="host__info">
                <div className="host__info__name">호스트: Benedikt님</div>
                <div className="host__info__date">회원 가입일: 2019년 10월</div>
            </div>
        </div>
        <div className="host__leftAndRight">
            <div className="host__left">
                <div className="host__left__badge">
                    <span className="badge__icon">
                        <Star />
                    </span>
                    <span className="badge__text">후기 182개</span>
                    <span className="badge__icon"><Certify /></span>
                    <span className="badge__text">본인 인증 완료</span>
                    <span className="badge__icon">󰀃</span>
                    <span className="badge__text">슈퍼호스트</span>
                </div>
                <div className="host__left__content">Guten Tag, ich bin 32 Jahre alt und komme aus dem  {"\n"}
wunderschönen Bad Hönningen in Rheinland Pfalz. Zusammen {"\n"} 
mit meinem Partner betreibe ich seit Anfang 2020 Schloss  {"\n"}
Arenfels, welche… <span>더 읽기</span></div>
                <div className="host__left__title">Benedikt님은 슈퍼호스트입니다.</div>
                <div className="host__left__sub">슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 {"\n"} 
숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.</div>
            </div>

            <div className="host__right">
                <div className="host__right__response">
                    언어: English, Deutsch{"\n"}
                    응답률: 82%{"\n"}
                    응답 시간: 1시간 이내
                </div>
                <button className="host__right__call">호스트에게 연락하기</button>
                <div className="host__right__warning">
                    <div className="warning__icon"><Warning /></div>
                    <div className="warning__text">안전한 결제를 위해 에어비앤비 웹사이트나 앱 {"\n"} 
외부에서 송금하거나 대화를 나누지 마세요.</div>
                </div>
            </div>
            
        </div>
    </section>

    <div className="underline long"></div>

    <section className="notice">
        <div className="notice__title">알아두어야 할 사항</div>
        <Notice />
        
    </section>

    <div className="underline"></div>

        <div className="footer-option">
            <div className="options">
                <div className="option-title">Bad Hönningen 및 인근의 다른 옵션 살펴보기</div>
                <div className="option-items">
                    <div>본</div>
                    <div>쾰른</div>
                    <div>Aachen</div>
                    <div>Düsseldorf</div>
                    <div>마스트리히트</div>
                    <div>Liège</div>
                    <div>프랑크푸르트</div>
                    <div>Eindhoven</div>
                    <div>하이델베르크</div>
                    <div>브뤼셀</div>
                    <div>위트레흐트</div>
                    <div>스트라스부르</div>
                </div>
                <div className="option-selected">
                    <span className="option-selected__country">에어비앤비</span>
                    <Right />
                    <span className="option-selected__country">독일</span>
                    <Right />                    
                    <span className="option-selected__country">Rhineland-Palatinate</span>
                    <Right />                    
                    <span className="option-selected__country">Ahrweiler</span>
                    
                </div>
            </div>
        </div>

        <div className="underline"></div>

        <FooterC />
</body>
    )
}

export default Cpage;