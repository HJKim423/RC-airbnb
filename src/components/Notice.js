import { useState } from "react";

import More from "./more";
import { ReactComponent as Notice1 } from '../svg/notices/notice1.svg';
import { ReactComponent as Notice2 } from '../svg/notices/notice2.svg';
import { ReactComponent as Notice3 } from '../svg/notices/notice3.svg';
import { ReactComponent as Notice4 } from '../svg/notices/notice4.svg';
import { ReactComponent as Notice5 } from '../svg/notices/notice5.svg';
import { ReactComponent as Notice6 } from '../svg/notices/notice6.svg';
import { ReactComponent as Notice7 } from '../svg/notices/notice7.svg';
import { ReactComponent as Notice8 } from '../svg/notices/notice8.svg';

function Notice(){
    const [notices1, setNotices1] = useState([
        {
            icon: <Notice1 />,
            text: '체크인: 오후 3:00 - 오후 11:00'
        },
        {
            icon: <Notice2 />,
            text: '흡연 금지'
        },
        {
            icon: <Notice3 />,
            text: '반려동물 동반 불가'
        },
        {
            icon: <Notice4 />,
            text: '파티나 이벤트 금지'
        }
        
    ])

    const [notices2, setNotices2] = useState([
        {
            icon: <Notice5 />,
            text: `에어비앤비의 강화된 청소 절차 준수에
             동의했습니다.`
        },
        {
            icon: <Notice6 />,
            text: `에어비앤비의 사회적 거리 두기 및 관련
             가이드라인이 적용됩니다.`
        },
        {
            icon: <Notice7 />,
            text: '일산화탄소 경보기 없음'
        },
        {
            icon: <Notice8 />,
            text: '화재경보기'
        }
    ])
    return(
        <div className="notice__lists">
            <div className="notice__list">
                <div className="notice__list__title">
                    숙소 이용규칙
                </div>
                {notices1.map((notice,index) => (
                    <div key={index} className="notice__list__content">
                        <div className="list__content__icon">{notice.icon}</div>
                        <div className="list__content__text">{notice.text}</div>
                </div>
                ))}
            </div>

            <div className="notice__list">
                <div className="notice__list__title">
                    건강과 안전
                </div>
                {notices2.map((notice,index) => (
                    <div key={index} className="notice__list__content">
                        <div className="list__content__icon">{notice.icon}</div>
                        <div className="list__content__text">{notice.text}</div>
                </div>
                ))}
                <More />
            </div>

            <div className="notice__list">
                <div className="notice__list__title">
                    환불정책
                </div>
                <div className="notice__list__content">
                    <div className="list__content__text">10월 28일 전까지 무료로 취소하실 수 있습니다.</div>
                </div>
                <More />
            </div> 
            </div>
    )
}

export default Notice;