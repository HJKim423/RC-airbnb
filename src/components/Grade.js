import { ReactComponent as Star } from '../svg/star.svg';


function Grade(){
    return(
        <span style={{display:"flex", alignItems:"center"}}>
                <span className="star"><Star /></span>
                <span className="grade">4.81 ·</span>
                <span className="review">후기 48개</span>
        </span>
    )
}

export default Grade;