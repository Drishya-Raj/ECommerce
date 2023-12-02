import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [username, setUserName] = useState('');
    const [password, SetPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = () =>{
        if (username === '') {
            alert("please enter a value");
            return;
        }
        if (password === '') {
            alert("please enter password")
            return;
        }
        if (username === '' && password === '') {
            alert("Please enter both username and password");
            return;
        }
        navigate('/home');        
    }
    return (
        <div className="signup">
            <form>
                <label htmlFor="uname">Username: </label><br />
                <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUserName(e.target.value)} /><br />

                <label htmlFor="pwd">Password:</label><br />
                <input type="password" placeholder="Enter password" value={password} onChange={(e) => SetPassword(e.target.value)} /><br />
                <input type="submit" value="Sign Up" className="submit" onClick={handleClick} /><br />
                <h3>Already have an account ?</h3><br />
                <input type="submit" value="Sign In" className="submit" />
            </form>
        </div>
    )
}
export default SignUp;