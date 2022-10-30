import React from "react";
import { Link } from "react-router-dom";
import InputLabel from "./inputLabel";


export default function SignUp() {
    
        return (
            <div className="logInPage">
                <Link className="fabrikImg" to="/"><img src="./images/whitefabriklogo.webp" alt="" /></Link>
                <div className="logInCard">
                    <h3>REGISTER</h3>
                    <form action="">

                        <div className="splitInput">
                            <InputLabel name="First name" type = "text"/>
                            <InputLabel name="Last name" type = "text"/>
                        </div>

                            <InputLabel name="Email address" type = "email"/>
                        
                        <div className="splitInput">
                            <InputLabel name="Password" type = "password"/>
                            <InputLabel name="Confirm password" type = "password"/>
                        </div>
                        
    
                        <input className="formBtn signUpBtn" type="button" value="Register" />
                        <div className="left">
                            <h3>Already registered? <Link to="/login"> Log In.</Link></h3>
                        </div>
                        
                    </form>
                    
                    <div className="policy">
                        <h3><a href="">Privacy policy</a></h3>
                        <h3 className="terms"><a href="">Terms of service</a></h3>
                    </div>
                </div>
            </div>
        )
    
}