import React from "react";
import { Link } from "react-router-dom";
import InputLabel from "./inputLabel";


export default function ForgotPassword() {
    return (
        <div className="logInPage">
            <Link className="fabrikImg" to="/"><img src="./images/whitefabriklogo.webp" alt="" /></Link>
            <div className="logInCard">
                <h3>RESET PASSWORD</h3>
                <form action="">
                    <InputLabel name="Email address" type="email"/>
                    <input className="formBtn signUpBtn" type="button" value="Send email" />
                    <div className="left">
                        <h3><Link to="/signup">New user? </Link>|<Link to="/login"> Existing user.</Link></h3>
                    </div>
                    
                </form>
                
                <div className="policy">
                        <h3><Link className="fabrikImg" to="/">Privacy policy</Link></h3>
                        <h3 className="terms"><Link className="fabrikImg" to="/">Terms of service</Link></h3>
                    </div>
            </div>
        </div>
    )
}