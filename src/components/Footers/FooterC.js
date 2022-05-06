import { ReactComponent as Facebook } from '../../svg/facebook.svg';
import { ReactComponent as Twitter } from '../../svg/twitter.svg';
import { ReactComponent as Insta } from '../../svg/insta.svg';
import { ReactComponent as Blog } from '../../svg/blog.svg';
import { ReactComponent as Post } from '../../svg/post.svg';
import { ReactComponent as Globe } from '../../svg/globe.svg';

import './FooterC.css';

function FooterC(){
    
    
    return(
        <footer className="footerC">
        <div className="footer-list">
            <div className="lists">
                <div className="list-title">에어비앤비 지원</div>
                <ul className="list-content">
                    <li>도움말 센터</li>
                    <li>안전 정보</li>
                    <li>예약 취소 옵션</li>
                    <li>에어비앤비의 코로나19 대응 방안</li>
                    <li>장애인 지원</li>
                    <li>이웃 민원 신고</li>
                </ul>
                
            </div>
            <div className="lists">
                <div className="list-title">커뮤니티</div>
                <ul className="list-content">
                    <li>Airbnb.org: 재난 구호 숙소</li>
                    <li>아프간 난민 지원</li>
                    <li>차별 철폐를 위한 노력</li>
                </ul>
                
            </div>
            <div className="lists">
                <div className="list-title">호스팅</div>
                <ul className="list-content">
                    <li>호스팅 시작하기</li>
                    <li>에어커버: 호스트를 위한 보호 프로그램</li>
                    <li>호스팅 자료 둘러보기</li>
                    <li>커뮤니티 포럼 방문하기</li>
                    <li>책임감 있는 호스팅</li>
                </ul>
                
            </div>
            <div className="lists">
                <div className="list-title">소개</div>
                <ul className="list-content">
                    <li>뉴스룸</li>
                    <li>새로운 기능에 대해 알아보기</li>
                    <li>에어비앤비 공동창업자의 메시지</li>
                    <li>채용정보</li>
                    <li>투자자 정보</li>
                    <li>에어비앤비 Luxe</li>
                </ul>
                
            </div>
        </div>
        <div className="footer-line"></div>
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
    )
    
}

export default FooterC;