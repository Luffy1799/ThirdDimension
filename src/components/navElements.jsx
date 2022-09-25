import { Link } from "react-router-dom"
import themeSwitch from "./functionaity/themeSwitch"

export default function NavElements() {
    return (
        <div className="navElements">
                <div className="navLog">
                    <Link id= "navText1" className="navBtns" to= "/login">
                        <img src="public/images/usericon.png" alt="" />
                        <p>Login</p>
                    </Link>
                    <Link id= "navText2" className="navBtns" to= "/signup">
                        <img src="public/images/signup.png" alt="" />
                        <p>Register</p>
                    </Link>
                </div>
            
            
                <div className="themeBtn">
                    <label id="themeSwitch" className="switch">
                        <input onClick={themeSwitch} type="checkbox"/>
                        <span  className="slider"></span>
                    </label>
                </div>
        </div>
        
    )
}