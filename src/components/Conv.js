import {useState} from 'react';

import { ReactComponent as Conv1 } from '../svg/convs/conv1.svg';
import { ReactComponent as Conv2 } from '../svg/convs/conv2.svg';
import { ReactComponent as Conv3 } from '../svg/convs/conv3.svg';
import { ReactComponent as Conv4 } from '../svg/convs/conv4.svg';
import { ReactComponent as Conv5 } from '../svg/convs/conv5.svg';
import { ReactComponent as Conv6 } from '../svg/convs/conv6.svg';
import { ReactComponent as Conv7 } from '../svg/convs/conv7.svg';
import { ReactComponent as Conv8 } from '../svg/convs/conv8.svg';
import { ReactComponent as Conv9 } from '../svg/convs/conv9.svg';
import { ReactComponent as Conv10 } from '../svg/convs/conv10.svg';


function Conv(){
    const [convs, setConvs] = useState([
        {
            icon: <Conv1/>,
            text : '무선 인터넷'
        },
        {
            icon: <Conv2/>,
            text : '파티오 또는 발코니'
        },
        {
            icon: <Conv3/>,
            text : '여행 가방 보관 가능'
        },
        {
            icon: <Conv4/>,
            text : '유아용 식탁의자'
        },
        {
            icon: <Conv5/>,
            text : '업무 전용 공간'
        },
        {
            icon: <Conv6/>,
            text : '건물 내 무료 주차'
        },
        {
            icon: <Conv7/>,
            text : '뒷마당'
        },
        {
            icon: <Conv8/>,
            text : '아기 침대'
        },
        {
            icon: <Conv9/>,
            text : '헤어드라이어'
        },
        {
            icon: <Conv10/>,
            text : '일산화탄소 경보기'
        }

    ])
    return(
        <div className="left__convenience">
                <div className="convenience__title">숙소 편의시설</div>
                <div className="convenience__box">
                    {convs.map((conv,index) =>(
                        <div key={index} className="convenience__box__item">
                            <div className="convenience__box__item__icon">{conv.icon}</div>
                            <div className="convenience__box__item__text">{conv.text}</div>
                        </div>
                    
                    ))}
                </div>
                <button className="convenience__btn">편의시설 21개 모두 보기</button>
            </div>
    )
}

export default Conv;