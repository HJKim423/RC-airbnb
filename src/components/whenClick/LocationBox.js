import './LocationBox.css';
import {Link} from 'react-router-dom';

function LocationBox(){
    return(
        <div className='locationBox'>
            <div className='locationBox__text'>언제 어디로든 떠나는 여행</div>
            <Link to='/bPage'>
            <button className='locationBox__btn'>
                <div className='locationBox__btn__text'>유연한 검색</div>
                <div className='locationBox__btn__icon'>
                    <video autoPlay muted width="28" height="28">
                        <source src='/icon.mp4' type='video/mp4'></source>
                    </video>
                </div>
            </button>
            </Link>
        </div>
    )
}

export default LocationBox;