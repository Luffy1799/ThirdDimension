import React from "react";
import { Link } from "react-router-dom";
import InputLabel from "./inputLabel";


export default function LogIn() {
    return (
        <div className="logInPage">
            <Link className="fabrikImg" to="/"><img src="public/images/whitefabriklogo.webp" alt="" /></Link>
            <div className="logInCard">
                <h3>LOG INTO YOUR ACCOUNT</h3>
                <form action="">
                    
                    <InputLabel name="Email address" type = "email"/>
                    <InputLabel name="Password" type = "password"/>

                    <div className="remember">
                        <label >
                            <input type="checkbox" name="" id="" />
                            <h3>Remember me</h3>
                        </label>
                        <h3 className="forgotPass"><Link to= "/forgot-password">Forgot password?</Link></h3>
                    </div>

                    <input className="formBtn" type="button" value="Log in" />
                    <div className="left">
                        <h3>Not registered? <Link to="/signup"> Sign up.</Link></h3>
                    </div>
                    
                </form>
                
                <div className="policy">
                    <h3><a href="https://fabrik.space/privacy-policy/">Privacy policy</a></h3>
                    <h3 className="terms"><a href="https://fabrik.space/terms-and-conditions/">Terms of service</a></h3>
                </div>
            </div>
        </div>
    )
}