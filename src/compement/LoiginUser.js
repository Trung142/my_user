import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginReducer } from "../redux/Action/UserAction";
const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [isShowpassword, setShowpassword] = useState(false);
    //reducer
    const isloading = useSelector(state => state.user.isloading);
    const count = useSelector(state => state.user.count);
    const Navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLogin = async () => {

        if (!email && !password) {
            toast.error("email/password is request !");
            return;
        }
        dispatch(handleLoginReducer(email, password));
    }
    const handleLogout = () => {
        Navigate("/");
    }
    useEffect(() => {
        if (count && count.auth === true) {
            Navigate("/");
        }
    }, [count])
    return (

        <>
            <div className="login-container col-sm-8 col-lg-4">

                <h2><b>Log in</b></h2>
                <a>eve.holt@reqres.in</a>
                <div className="tile">
                    <h5>Email or username</h5>
                    <a>Log in with phone</a>
                </div>
                <div className="input-1">
                    <input type="text" placeholder="Email or user"
                        value={email}
                        onChange={(event) => setemail(event.target.value)}
                    />
                </div>
                <div className="input-2">
                    <input type={isShowpassword === false ? "password" : "text"} placeholder="password"
                        value={password}
                        onChange={(event) => setpassword(event.target.value)}
                    />
                    <i className={isShowpassword === true ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}
                        onClick={() => setShowpassword(!isShowpassword)}></i>

                </div>
                <span className="title">Forgot password!</span>
                <button
                    className={email && password ? "active" : ""}
                    disabled={email && password ? false : true}
                    onClick={() => handleLogin()}
                >{isloading && <i className="fa-solid fa-rotate-right fa-spin"></i>} Log in</button>
                <div className="goback">
                    <i className="fa-solid fa-angles-left"></i>
                    <span onClick={() => handleLogout()} >Go back</span>

                </div>
                <hr />
                <div className="signup">
                    Don’t have an account?
                    <Link to="/signup" className="link"> Sign up</Link>
                </div>

            </div>
        </>
    )
}
export default Login;