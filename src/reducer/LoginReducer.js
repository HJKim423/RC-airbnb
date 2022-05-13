const initialState = {
    isLogin: false,
};


export const LoginAction = (data) => {
        return{
            type: "LOGIN",
            isLogin: data,
        }
    
    
};


const LoginReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN": {
            return {
                isLogin: true
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
    
};

export default LoginReducer;