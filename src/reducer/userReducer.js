const initialState = {
    guest: "게스트 추가"
};

export const userAction = (data) => {
    let adult=0;
    let kid=0;
    if(data.adult !== undefined) adult += data.adult;
    else if(data.kid !== undefined) kid += data.kid;
    return {
        type: "USER",
        data: (adult+kid),
    };
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER": {
            return {
                ...state,
                guest: `게스트${action.data}명`,
                
            };
        }
        default: {
            return {
                ...state,
            }; 
        }
    }
};

export default userReducer;
