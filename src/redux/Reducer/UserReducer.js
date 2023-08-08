import { FRECH_USER_LOGIN, FRECH_USER_ERROR, FRECH_USER_SUCCESS, USER_LOGOUT, FRECH_RETSET } from "../Action/UserAction";


const INITIAL_STATE = {
    count: {
        email: '',
        auth: null,
        token: ''
    },
    isloading: false,
    isError: false

};

const UserReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FRECH_USER_LOGIN:

            return {

                ...state,
                isloading: true,
                isError: false
            };

        case FRECH_USER_SUCCESS:
            return {
                ...state, count: {
                    token: action.data.token,
                    email: action.data.email,
                    auth: true
                },
                isloading: false,
                isError: false

            };
        case FRECH_USER_ERROR:
            return {
                ...state,
                count: {
                    token: "",
                    email: "",
                    auth: false
                },
                isloading: false,
                isError: true
            }
        case USER_LOGOUT:
            localStorage.removeItem("token")
            localStorage.removeItem("email")
            return {
                ...state,
                count: {
                    token: "",
                    email: "",
                    auth: false
                },
            };
        case FRECH_RETSET:


            return {
                ...state,
                count: {
                    token: localStorage.getItem("token"),
                    email: localStorage.getItem("email"),
                    auth: true
                },
            };
        default: return state;

    }

};

export default UserReducer;