import { useForm, Controller } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from "react";
import Password from "./Password";

import styled from "styled-components";

// import {ReactComponent as Error} from './svg/error.svg';

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

let loginData = [];

function EmailLogin(props){
    const { control, handleSubmit } = useForm();
    // const [openPassword, setOpenPassword] = useState(false);


    const getPass = (e) =>{
        props.getPassword(e);
    }


    const onSubmit = (data) => {
        loginData.push(data);
        localStorage.setItem('email', JSON.stringify(data.email));
        getPass(true);
    };


   
    const classes = useStyles();
    
    return(
        <>
            <dlv className="EmailLogin">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="nationAndNum">
                <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="이메일"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    
                />
                )}
                rules={{ required: '이메일이 필요합니다.', 
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: "이메일을 입력하세요."
                    } }}
            />
                </div>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    
                >
                    계속
                </Button>

            </form>
            <div className="login-or">
                    <div className="or-line"></div>
                    <div className="or-text">또는</div>
                    <div className="or-line"></div>
            </div>
            </dlv>
        </>
        

    )
}

export default EmailLogin;
