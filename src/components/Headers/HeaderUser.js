import styled from "styled-components";
import { useState, useEffect } from "react";

import { ReactComponent as Globe } from '../../svg/globe.svg';
import { ReactComponent as User } from '../../svg/user.svg';
import { ReactComponent as Bars } from '../../svg/bars.svg';

import UserClick from "../UserClick";

function HeaderUser(props){

    
    const [showUserClick, setShowUserClick] = useState(false);
    return(
        <HeaderUserStyle>
            <div className="user-menu2">
                <div className="to-be-host2">호스트 되기</div>
                <div className="user-lang2"><Globe /></div>
                <button class="user2" onClick={e => setShowUserClick(!showUserClick)}>
                    <div className="user-bars2"><Bars /></div>
                    <div className="user-img2"><User /></div>
                </button>
                {showUserClick && <UserClick showUserClick={setShowUserClick} margin={props.margin}/>}
            </div>
            
        </HeaderUserStyle>
        
    )
}

const HeaderUserStyle = styled.div`
.user-menu2{
    display: flex;
}

.to-be-host2{
    font-size: 14px;
    font-weight: 600;
    padding: 10px 15px;
}

.user-lang2{
    width: 40px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.to-be-host2:hover, .user-lang2:hover{
    background-color: #F7F7F7;
    border-radius: 30px;
    cursor: pointer;
}
.user2{
    color: #717171;
    margin-left: 10px;
    padding: 5px 5px 5px 12px;
    display: flex;
    align-items: center;
    border-radius: 30px;
    border: 1px solid #dddddd;
    transition: 0.2s ease;
    position:relative;
}

.user2:hover{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}


.user-img2{
    width: 30px;
    height: 30px;
    margin-left: 7px;
}
`;

export default HeaderUser;