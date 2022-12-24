import React from "react"
import Profile from "../images/Profile.png"
import Email from "../images/Mail.png"
import LinkedIn from "../images/linkedin.png"
export default function Info(){
    return(
        <div className="about--Card">
            <img src={Profile} alt="image" />
            <h1 className="user--Name">Sriram Magesh</h1>
            <h2 className="title--Name">Product Designer</h2>
            <h3 className="website--Name">srirammagesh.com</h3>
            <div className="card--Links">
                <div className="email--Card">
                    <img src={Email} alt="mail logo" />
                    <h2>Email</h2>
                </div>
                <div className="linkedIn--Card">
                    <img src={LinkedIn} alt="mail logo" />
                    <h2>LinkedIn</h2>
                </div>
               
            </div>
        </div>
    )
}