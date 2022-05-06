import './CelenderBox.css';
import Calender from '../Calender';

function CelenderBox(){
    return(
        <div className='celender-box'>
            <div className='celender-box__topBtns'>
                <button className='celender-box__topBtns__left'>달력</button>
                <button className='celender-box__topBtns__right'>유연한 일정</button>
            </div>
            <div className='celender-box__celender'>
                <Calender />
            </div>
            <div className='celender-box__bottomBtns'>
                <button className='celender-box__bottomBtns__exact' style={{border:"2px solid black"}}>정확한 날짜</button>
                <button className='celender-box__bottomBtns__1'>± 1일</button>
                <button className='celender-box__bottomBtns__2'>± 2일</button>
                <button className='celender-box__bottomBtns__3'>± 3일</button>
                <button className='celender-box__bottomBtns__7'>± 7일</button>
            </div>
            
        </div>
    )
}

export default CelenderBox;