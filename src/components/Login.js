import { useEffect, useState } from "react";
import './Login.css';

import {ReactComponent as Error} from '../svg/error.svg';

function Login(){
    const ment = "전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다. 개인정보 처리방침";
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(ment);
    const [submit, setSubmit] = useState(false);
    const [color, setColor] = useState("black");
    const [border, setBorder] = useState("1px solid yellow");

    useEffect(() => {
            if(submit && password.length === 0){
                setValid(`전화번호는 필수 항목입니다.`);
                setColor("#c13515");
                setBorder("2px solid #c13515");
            }else if((password.length > 0 && password.length <6) || isNaN(password) === true){
                setValid("전화번호가 너무 짧거나 유효하지 않은 문자를 포함합니다.");
                setColor("#c13515");
                setBorder("2px solid #c13515");
            } else{
                setValid(ment);
                setColor("black");
                setBorder("1px solid black");
            }
    }, [submit]);

    const inputPassword = (event) => {
        setPassword(event.target.value);
    };

    return(
        <>
        <div className="nationAndNum">
            <div className='nation'>
                <div className='selectName'>국가/지역</div>
                <select className="nationSelect" name='국가/지역'>
                <option value="America">미국 (+1)</option>
                <option value="Korea">한국 (+82)</option>
            </select>
            </div>
            
            <input type="text" onChange={inputPassword}
            className="phoneNum" placeholder="전화번호" style={{border:`${border}`}}></input>
        </div>
        <div className="login-notice" style={{color:`${color}`}}>{valid}</div>
        <button className="login-continue" onClick={()=> {setSubmit(true)}}>계속</button>
        <div className="login-or">
            <div className="or-line"></div>
            <div className="or-text">또는</div>
            <div className="or-line"></div>
        </div>
        </>

    )
}

export default Login;