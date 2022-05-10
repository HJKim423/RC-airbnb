import { useState } from 'react';
import './HeadcountBox.css';

import { ReactComponent as Plus } from '../../svg/plus.svg';
import { ReactComponent as Minus } from '../../svg/minus.svg';

import { userAction } from "../../reducer/userReducer";
import { useDispatch } from "react-redux";

function HeadcountBox(){
    let [adult, setAdult] = useState(0);
    let [kid, setKid] = useState(0);
    let [baby, setBaby] = useState(0);
    let [pet, setPet] = useState(0);

    const dispatch = useDispatch();

    const handleAdult = (adult) => {
        const guest= {adult};
        dispatch(
            userAction(
                guest,
        ),
        );
    };

    const handleKid = (kid) => {
        const guest= {kid};
        dispatch(
            userAction(
                guest,
        ),
        );
    };

  
    return(
        <div className='headcount-box'>
            <div className='headcount-box__age'>
                <div className='headcount-box__age__text'>
                    <div className='headcount-box__age__title'>성인</div>
                    <div className='headcount-box__age__sub'>만 13세 이상</div>
                </div>
                <div className='headcount-box__age__btn'>
                    <button className='headcount-box__age__minus' 
                    onClick={e =>{if(adult > 0) {setAdult(adult-1);  handleAdult(adult-1); }}}
                    style={{color: `${adult >0 ? "#717171" : "#dddddd"}`, border: `${adult >0 ? "1px solid #717171" : "1px solid #dddddd"}`}}><Minus /></button>
                    <div className='headcount-box__age__value'>{adult}</div>
                    <button className='headcount-box__age__plus' onClick={e =>{if(adult < 16) {setAdult(adult+1); handleAdult(adult+1)}}}
                    style={{color: `${adult <16 ? "#717171" : "#dddddd"}`, border: `${adult <16 ? "1px solid #717171" : "1px solid #dddddd"}`}}><Plus /></button>
                </div>
            </div>
            <div className='underline'></div>

            <div className='headcount-box__age'>
                <div className='headcount-box__age__text'>
                    <div className='headcount-box__age__title'>어린이</div>
                    <div className='headcount-box__age__sub'>만 2~12세</div>
                </div>
                <div className='headcount-box__age__btn'>
                    <button className='headcount-box__age__minus' onClick={e =>{if(kid > 0) {setKid(kid-1); handleKid(kid-1);}}}
                    style={{color: `${kid >0 ? "#717171" : "#dddddd"}`, border: `${kid >0 ? "1px solid #717171" : "1px solid #dddddd"}`}}><Minus /></button>
                    <div className='headcount-box__age__value'>{kid}</div>
                    <button className='headcount-box__age__plus' onClick={e =>{if(kid < 16) {setKid(kid+1); handleKid(kid+1)}}}
                    style={{color: `${kid <16 ? "#717171" : "#dddddd"}`, border: `${kid <16 ? "1px solid #717171" : "1px solid #dddddd"}`}}><Plus /></button>
                </div>
            </div>
            <div className='underline'></div>

            <div className='headcount-box__age'>
                <div className='headcount-box__age__text'>
                    <div className='headcount-box__age__title'>유아</div>
                    <div className='headcount-box__age__sub'>만 2세 미만</div>
                </div>
                <div className='headcount-box__age__btn'>
                    <button className='headcount-box__age__minus' onClick={e =>{if(baby > 0) setBaby(baby-1)}}
                     style={{color: `${baby >0 ? "#717171" : "#dddddd"}`, border: `${baby >0 ? "1px solid #717171" : "1px solid #dddddd"}`}}><Minus /></button>
                    <div className='headcount-box__age__value'>{baby}</div>
                    <button className='headcount-box__age__plus' onClick={e =>{if(baby < 16) setBaby(baby+1)}}
                    style={{color: `${baby <16 ? "#717171" : "#dddddd"}`, border: `${baby <16 ? "1px solid #717171" : "1px solid #dddddd"}`}}><Plus /></button>
                </div>
            </div>
            <div className='underline'></div>

            <div className='headcount-box__age'>
                <div className='headcount-box__age__text'>
                    <div className='headcount-box__age__title'>반려동물</div>
                    <div className='headcount-box__age__sub'
                    style={{textDecoration:"underline", fontWeight:600}}>보조동물을 동반하시나요?</div>
                </div>
                <div className='headcount-box__age__btn'>
                    <button className='headcount-box__age__minus' onClick={e =>{if(pet > 0) setPet(pet-1)}}
                     style={{color: `${pet >0 ? "#717171" : "#dddddd"}`, border: `${pet >0 ? "1px solid #717171" : "1px solid #dddddd"}`}}><Minus /></button>
                    <div className='headcount-box__age__value'>{pet}</div>
                    <button className='headcount-box__age__plus' onClick={e =>{if(pet < 16) setPet(pet+1)}}
                    style={{color: `${pet <16 ? "#717171" : "#dddddd"}`, border: `${pet <16 ? "1px solid #717171" : "1px solid #dddddd"}`}}><Plus /></button>
                </div>
            </div>

            <div className='headcount-box__notice'>반려동물을 3마리 이상 동반하는 경우, 반드시{"\n"}
            호스트에게 알려주세요.</div>

        </div>
    )

}

export default HeadcountBox;