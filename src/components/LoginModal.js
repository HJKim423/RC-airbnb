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


function LoginModal(props){
    
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
                background: "white",
                overflow: "auto",
                top: "42vh",
                margin:"auto",
                bottom: "42vh",
                WebkitOverflowScrolling: "touch",
                borderRadius: "12px",
                outline: "none",
                zIndex: 10,
                width: "568px",
                height: "682px",
                padding: 0,
                transition: "all 0.5s ease",
            },
        };

        

  return (
    <>
		<Modal 
    	    isOpen={props.isOpen}
			style={style}
			onRequestClose={props.isClose} // 오버레이나 esc를 누르면 핸들러 동작 ,
			ariaHideApp={false}
            closeTimeoutMS={500}
    	>
            <ModalStyle>
    		<div className='modal-header'>
                <button className='modal-close' onClick={props.isClose}><X/></button>
                <div className='modal-header__title'>로그인 또는 회원가입</div>
            </div>
            <div className='underline'></div>
            <div className='modal-login'>
                <div className='modal-login__title'>에어비앤비에 오신 것을 환영합니다.</div>
                <Login />
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
                <button className="reservation-left__login__email" style={{marginBottom:"0"}}>
                    <div className="email-icon"><Mail/></div>
                    <div className="email-text">이메일로 로그인하기</div>
                </button>
            </div>
            </ModalStyle>
    	</Modal>
        
    </>
  );
    
}

const ModalStyle = styled.div`

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