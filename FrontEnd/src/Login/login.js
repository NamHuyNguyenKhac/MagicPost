import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import './Login.css'

function Login() {
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

                <button className="LoginBtn" type="submit">Log In</button>
            </form>
        </>
    );
}

export default Login;