import { valuesIn } from "lodash";
import { useState } from "react"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import ValidateUser from "./validateUser";
export const Signup = () => {
    const [isShowpassword, setShowpassword] = useState(false);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const Navigate = useNavigate();
    //check email and password
    const password_patern = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/;
    const email_patern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [values, setvalue] = useState({});
    const [errors, seterror] = useState({});

    console.log(errors);

    const handleNext = () => {

    }
    const handlegoback = () => {
        Navigate("/");
    }
    return (
        <>
            <div className="signup-container col-sm-8 col-lg-4 ">
                <h2 className="tilte">Sign Up</h2>
                <div className="tite">
                    <span>Email and username</span>
                    <a>Email or password</a>
                </div>
                <div>
                    <input type="texts" placeholder="Full name"
                        value={name}
                        onChange={(event) => setname(event.target.value)}
                    />

                </div>

                <div>
                    <input type="text" placeholder="Email"
                        value={email}
                        name="email"
                        onChange={(event) => (setemail(event.target.value))}
                    />

                </div>
                <div className="input1">
                    <input type={isShowpassword === false ? "password" : "text"} placeholder="Passwword"
                        value={password}
                        onChange={(event) => setpassword(event.target.value)}
                    />
                    <i className={isShowpassword === true ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}
                        onClick={() => setShowpassword(!isShowpassword)}
                    ></i>

                </div>

                <button type=""
                    className={email && password && name && "active"}
                    onClick={(event) => handleNext(event)}
                >Next</button>
                <div className="go-back">
                    <i className="fa-solid fa-angles-left"></i>
                    <span onClick={() => handlegoback()}>Go back</span>
                </div>
                <div className="signup">
                    You have an account?
                    <Link to="/login" className="link"> Log in</Link>
                </div>
            </div>
        </>
    )
}