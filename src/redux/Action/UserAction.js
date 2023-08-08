import { toast } from "react-toastify";
import { Loginuser } from "../../reviceAPI/Userservice";

export const USER_LOGOUT = 'USER_LOGOUT';
export const FRECH_USER_LOGIN = 'FRECH_USER_LOGIN';
export const FRECH_USER_SUCCESS = 'FRECH_USER_SUCCESS';
export const FRECH_USER_ERROR = 'FRECH_USER_ERROR';
export const FRECH_RETSET = 'FRECH_RETSET';
export const handleLoginReducer = (email, password) => {
    return async (dispatch, getState) => {
        dispatch({ type: FRECH_USER_LOGIN });
        let res = await Loginuser(email, password);
        if (res && res.token) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("email", email);
            dispatch({
                type: FRECH_USER_SUCCESS,
                data: { email: email, token: res.token }
            })
        }
        else {
            if (res && res.status === 400) {
                toast.error(res.data.error)
            }
            dispatch({
                type: FRECH_USER_ERROR
            })
        }

    }
}
export const handleLogoutReducer = (email, password) => {
    return (dispatch, getState) => {
        dispatch({ type: USER_LOGOUT })
    }
}
export const handleReset = (email, password) => {
    return (dispatch, getState) => {
        dispatch({ type: FRECH_RETSET })
    }
}