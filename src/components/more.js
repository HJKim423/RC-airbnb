import { ReactComponent as Right } from '../svg/right.svg';

function More(){
    return(
        <div className="content__more">
                    <span className="more-text">더 보기</span>
                    <span className="more-icon"><Right/></span>
                </div>
    )
}

export default More;