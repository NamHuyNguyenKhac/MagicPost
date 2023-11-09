import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import './Login.css'

function Login() {
    return (
        <>
            <form>
                <div className="UserLabel">User Name</div>
                <div className="UsernameBox">
                    <FontAwesomeIcon className="UserIcon" icon={faUser} />
                    <input className="UsernameInput" placeholder='Username'></input>
                </div>

                <div className="PasswordLabel">Password</div>
                <div className="PasswordBox">
                    <FontAwesomeIcon className="PasswordIcon" icon={faLock} />
                    <input type="password" className="PasswordInput" placeholder='Password'></input>
                </div>

                <button className="LoginBtn" type="submit">Log In</button>
            </form>
        </>
    );
}

export default Login;