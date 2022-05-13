import Modal from 'react-modal';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as X } from '../svg/x.svg';
import { useEffect, useState } from 'react';

import { useDispatch } from "react-redux";
import { LoginAction } from "../reducer/LoginReducer";


const useStyles = makeStyles((theme) => ({
        submit: {
        backgroundColor:"#ff385c",
        color:"white",
        fontWeight:"600",
        fontSize:"16px",
        height:"48px",
        borderRadius: "8px",
        margin: "16px 0 24px 0"
    }
}));

function Password(props){
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
            padding: "24px",
            transition: "all 0.5s ease",
            width:"568px",
            height: "404px"
        },
    };
    const [isLogin, setIsLogin] = useState(false);

    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
            localStorage.setItem('password', JSON.stringify(data.password));
            props.isClose();
            handleLogin();
        }
        

        //로그인 됐을때 화면 바뀌게 하기 위해 state 리덕스로 보냄
        const dispatch = useDispatch();
        const handleLogin = () => {
            dispatch(LoginAction(
                {isLogin},
                ),
            );
        }

   
    const classes = useStyles();

    return(
        <>
        <Modal 
    	    isOpen={props.openPassword}
			style={style}
			// onRequestClose={} // 오버레이나 esc를 누르면 핸들러 동작 ,
			ariaHideApp={false}
            closeTimeoutMS={500}
    	>
            <HeaderStyle>
                <button className='modal-close' onClick={props.isClose}><X/></button>
                <div className='modal-header__title'>로그인</div>
                
            </HeaderStyle>
            <div className='underline' style={{padding:"0 -24px"}}></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                        variant="outlined"
                        margin="normal"
                        type="password"
                        required
                        fullWidth
                        id="password"
                        label="비밀번호"
                        name="password"
                        autoComplete="current-password"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                />
                )}
                    rules={{ required: '비밀번호를 입력하세요.' ,
                                // validate: {
                                //     matchesPreviousPassword : (value)=>{
                                //         const { password } = getValues();
                                //         return password === value || "비밀번호가..";
                                //     }
                                // }
                            }}
                />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        
                    >
                        로그인
                    </Button>
            </form>
            
            <ForgetStyle>비밀번호를 잊으셨나요?</ForgetStyle>

        </Modal>
        </>

    )
}


const HeaderStyle = styled.div`
display:flex;
// height: 63px;
align-items:center;
// padding:0 24px 0 24px;
padding-bottom:24px;

.modal-header__title{
    font-size: 16px;
    font-weight:600;
    margin: 0 auto;
}
`;

const ForgetStyle = styled.div`
font-weight:600;
text-decoration:underline;
font-size:14px;
`;

export default Password;