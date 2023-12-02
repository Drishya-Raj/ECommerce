import React from "react";
import Button from "./button"; 
import user from '../assets/images/user.png';

const LoginPage = () => {

    return (
        <div className="loginContainer">
            <div className="flex-container">
                <div className="imgContainer">
                    <img src={user} alt="profile" />
                </div>
                <p>Hi user, <br />Let's get started.</p>
            </div>
            <ul>
               <Button className="joinbutton">Join now</Button>
                <Button className="loginbutton">Login now</Button>

            </ul>

        </div>
    )

}
export default LoginPage;