import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LocationBox.css';

import { ReactComponent as Location } from "../../svg/location.svg";



function LocBoxSeoul(){
    const [seoulText,setSeoulText]=useState(["서울특별시","서울 강남구","서울 마포구","서울 종로구","서울 중구"]);
    const navigate = useNavigate();

    const goToD= (index) =>{
        if(index===0){
            navigate("/dPage");
        }
        
    }

    return(
        <div className='locationBoxSeoul'>
            {seoulText.map((seoul,index) =>(
                <div key={index} onClick={()=>goToD(index)} className="locBox-seoul">
                <div className="locBox-seoul__icon"><Location /></div>
                <div className="locBox-seoul__text">{seoul}</div>
            </div>
            ))}
            
            
        </div>
    )
}



export default LocBoxSeoul;

