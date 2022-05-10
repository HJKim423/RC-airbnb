import Modal from 'react-modal';
import Login from "./Login";
import styled from "styled-components";

import { ReactComponent as FB } from '../svg/fb.svg';
import { ReactComponent as Google } from '../svg/google.svg';
import { ReactComponent as Apple } from '../svg/apple.svg';
import { ReactComponent as Mail } from '../svg/mail.svg';
import { ReactComponent as X } from '../svg/x.svg';
import { useState } from 'react';

import './LoginModal.css';
import EmailLogin from './EmailLogin';

import Password from './Password';


function LoginModal(props){
        const [text,setText] = useState("이메일로 로그인하기");
        const [email,setEmail] = useState(false);
        const [openPassword, setOpenPassword] = useState(false);
        const style = {          
            overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 10,
                overflow:"hidden",
            },
            content: {
                display: "flex",
                flexDirection: "column",
                background: "transparent",
                overflow: "auto",
                top: "42vh",
                margin:"auto",
                bottom: "42vh",
                WebkitOverflowScrolling: "touch",
                outline: "none",
                zIndex: 10,
                padding: 0,
                transition: "all 0.5s ease",
                width:"568px",
                height: "682px",
                border:"none",
            
            },
        };

        const getPassword = (e) => {
            setOpenPassword(e);
        }
        
        const goEmailLogin= () =>{
            setText("전화번호로 로그인하기");
            setEmail(!email);
        }

  return (
    <>
		<Modal 
    	    isOpen={props.isOpen}
			style={style}
			onRequestClose={props.isClose} // 오버레이나 esc를 누르면 핸들러 동작 ,
			ariaHideApp={false}
            closeTimeoutMS={500}
    	>
            <ModalStyle openPassword={openPassword}>
    		<div className='modal-header'>
                <button className='modal-close' onClick={props.isClose}><X/></button>
                <div className='modal-header__title'>로그인 또는 회원가입</div>
            </div>
            <div className='underline'></div>
            <div className='modal-login'>
                <div className='modal-login__title'>에어비앤비에 오신 것을 환영합니다.</div>
                <LoginStyle email={email}><Login /></LoginStyle>
                <EmailLoginStyle email={email}><EmailLogin getPassword={getPassword}/></EmailLoginStyle>
                <button className="reservation-left__login__email">
                    <div className="email-icon"><FB/></div>
                    <div className="email-text">페이스북으로 로그인하기</div>
                </button>
                <button className="reservation-left__login__email">
                    <div className="email-icon"><Google/></div>
                    <div className="email-text">구글로 로그인하기</div>
                </button>
                <button className="reservation-left__login__email">
                    <div className="email-icon"><Apple/></div>
                    <div className="email-text">애플로 로그인하기</div>
                </button>
                <button className="reservation-left__login__email" style={{marginBottom:"0"}} onClick={goEmailLogin}>
                    <div className="email-icon"><Mail/></div>
                    <div className="email-text">{text}</div>
                </button>
            </div>
            </ModalStyle>
    	</Modal>
        
        {openPassword && <Password openPassword={openPassword} isClose={props.isClose}/>}
    </>
  );
    
}

const LoginStyle = styled.div`
display: ${(props) => (props.email? "none" : "block")};
`;

const EmailLoginStyle = styled.div`
display:${(props) => (props.email? "block" : "none")};
`;

const ModalStyle = styled.div`
display: ${(props) => (props.openPassword ? "none" : "block")};
background-color: white;
border-radius:12px;

.modal-header{
    display:flex;
    height: 63px;
    align-items:center;
    padding:0 24px 0 24px;
}

.modal-header__title{
    font-size: 16px;
    font-weight:600;
    margin: 0 auto;
}

.modal-login{
    padding:24px;
}

.modal-login__title{
    font-size:22px;
    font-weight:600;
    margin-bottom:20px;
}

.reservation-left__login__email{
    margin-bottom: 16px;
}
`;

export default LoginModal;