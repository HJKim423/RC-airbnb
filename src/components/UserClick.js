import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from 'react-modal';
import LoginModal from "./LoginModal";
import { useSelector } from "react-redux";

function UserClick(props){
    const [modalOpen, setModalOpen] = useState(false);
    const [closeUser, setCloseUser] = useState(false);
    const { isLogin} = useSelector((state) => state.LoginReducer);

    const openModal = () => {
    setModalOpen(true);
    setCloseUser(!closeUser);
    };
    const closeModal = () => {
    setModalOpen(false);
    };

    return(
    <>
        <UserClickStyle closeUser={closeUser} margin={props.margin} isLogin={isLogin}>
            <div className="user-click">
                <div className="user-click__item" style={{fontWeight:"600"}}>회원가입</div>
                <div className="user-click__item" onClick={openModal}>로그인</div>
                <div className="underline"></div>
                <div className="user-click__item">숙소 호스트 되기</div>
                <div className="user-click__item">체험 호스트 되기</div>
                <div className="user-click__item">도움말</div>
            </div>
            {modalOpen && <LoginModal isOpen={modalOpen} isClose={closeModal}/>}
        </UserClickStyle>
        <LoginUserClickStyle  closeUser={closeUser}  margin={props.margin} isLogin={isLogin}>
            <div className="user-click">
                <div className="user-click__item" style={{fontWeight:"600"}}>메시지</div>
                <div className="user-click__item" style={{fontWeight:"600"}}>알림</div>
                <div className="user-click__item" style={{fontWeight:"600"}}>여행</div>
                <div className="user-click__item" style={{fontWeight:"600"}}>위시리스트</div>
                <div className="underline"></div>
                <div className="user-click__item">숙소 호스트 되기</div>
                <div className="user-click__item">체험 호스트 되기</div>
                <div className="user-click__item">계정</div>
                <div className="underline"></div>
                <div className="user-click__item">도움말</div>
                <div className="user-click__item">로그아웃</div>
            </div>
        </LoginUserClickStyle>
        
    </>


    )
}

const LoginUserClickStyle = styled.div`
display: ${(props) => (props.isLogin? "block" : "none")};

.user-click{
    display : ${(props) => (props.closeUser? "none" : "block")};
    color:black;
    z-index:2;
    background-color: white;
    border-radius: 8px;
    padding: 8px 0 8px 0;
    position: absolute;
    top: 70px;
    right:0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: ${(props) => (props.margin)};
}

.user-click__item{
    padding:10px 20px;
    font-size: 14px;
    width: 240px
}

.user-click__item:hover{
    cursor:pointer;
    background-color: #f7f7f7;
}

.underline{
    margin:10px 0 10px 0;
}
`;

const UserClickStyle = styled.div`
display: ${(props) => (props.isLogin? "none" : "block")};
.user-click{
    color:black;
    display : ${(props) => (props.closeUser? "none" : "block")};
    z-index:2;
    background-color: white;
    border-radius: 8px;
    padding: 8px 0 8px 0;
    position: absolute;
    top: 70px;
    right:0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: ${(props) => (props.margin)};
}

.user-click__item{
    padding:10px 20px;
    font-size: 14px;
    width: 240px
}

.user-click__item:hover{
    cursor:pointer;
    background-color: #f7f7f7;
}

.underline{
    margin:10px 0 10px 0;
}
`;

export default UserClick;