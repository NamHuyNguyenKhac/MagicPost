import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import './Login.css'
import { useEffect } from 'react';

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/getAllUsers")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                var users = data.data
                console.log('users:', users)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <form className="FormCointainer">
                <div className="Label">User Name</div>
                <div className="BoxWrapper">
                    <FontAwesomeIcon className="Icon" icon={faUser} />
                    <input className="Input" placeholder='Username'></input>
                </div>

                <div className="Label">Password</div>
                <div className="BoxWrapper">
                    <FontAwesomeIcon className="Icon" icon={faLock} />
                    <input type="password" className="Input" placeholder='Password'></input>
                </div>

                <button className="LoginBtn" type="submit" onClick={handleSubmit}>Log In</button>
            </form>
        </>
    );
}

export default Login;