import React from "react"
import Facebook from "../images/facebook.png"
import Github from "../images/github.png"
import Instagram from "../images/instagram.png"
import Twitter from "../images/twitter.png"
export default function Footer(){
    return(
        <div className="footer--images">
            <img src={Twitter} alt="twitter" />
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
            <img src={Github} alt="github" />
        </div>
       
    )
}