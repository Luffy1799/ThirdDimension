import React from "react";
import { useEffect } from "react";
import '../index.css'

import NavDefault from "./navDefault";
import NavElements from "./navElements";





            
export default function Nav() {


    useEffect(() => {

        // handles resize of window

        function handleResize() {
          if(window.innerWidth > 900) {
            document.getElementById('navMobileId').style.display = 'none';
            document.getElementById('hamLogoId').style.display = "none";
            document.getElementById('closeNavLogoId').style.display = "none";
          }
          else if(window.innerWidth < 900 ) {
            document.getElementById('hamLogoId').style.display = "flex";
            document.getElementById('navMobileId').style.display = 'flex';
            document.getElementById('navMobileId').style.height = '0%';
            document.getElementById('closeNavLogoId').style.display = "none";
          }
        
    }
    
        window.addEventListener('resize', handleResize)
      })
    
// nav bar hamburger button

        function navOn() {
            document.getElementById('navMobileId').style.height = "200%";
            document.getElementById('hamLogoId').style.display = "none";
            document.getElementById('closeNavLogoId').style.display = "flex";
        }
        function navOff() {
            document.getElementById('navMobileId').style.height = "0%";
            document.getElementById('hamLogoId').style.display = "flex";
            document.getElementById('closeNavLogoId').style.display = "none";
        }
    
    return (
        <div id="navId" className="navbar">
            <div className="navLogo">
                <img className="logoImg" src="public/images/fabriklogo.png" alt="" />
            </div>
            <NavDefault/>
            <div id= "navMobileId" className="navMobile">
              <NavElements/>
            </div>
            <div onClick = {navOn} id = "hamLogoId" className="hamLogo">
                <img className="hamImg" src="public/images/hamburgermenu.png" alt="" />
            </div>
            <div onClick = {navOff} id="closeNavLogoId" className="closeNavLogo">
                <img className="hamImg" src="public/images/upicon.png" alt="" />
            </div>
        </div>
    )
    
}

