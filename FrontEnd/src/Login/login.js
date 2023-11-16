import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import { useEffect, useState } from 'react';

function Login() {
    const [hidden, setHidden] = useState(true);
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Hàm submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!usernameValue) {
            setUsernameError('Username is required!');
        }

        if (!passwordValue) {
            setPasswordError('Password is required!');
        }

        if (usernameValue && passwordValue) {

            console.log('UserName:', usernameValue);
            console.log('Password:', passwordValue);

            //Call API
            fetch("http://localhost:8080/getAllUsers")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    var users = data.data;
                    console.log('users:', users);
                })
                .catch((err) => {
                    console.log(err);
                });
            //
        }

    }

    //Xu ly khi input nhap vao gia tri
    const handleUsernameChange = (e) => {
        setUsernameValue(e.target.value);
        setUsernameError('');
    }

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
        setPasswordError('');
    }

    // Hàm xu ly thay doi gia tri hidden
    const toggleHidden = (e) => {
        e.preventDefault();
        setHidden(!hidden);

        const Form = document.querySelector('.FormCointainer .BoxWrapper .InputPass');

        if (!hidden) {
            Form.setAttribute('type', 'password');
        } else {
            Form.setAttribute('type', 'text');
        }
    }

    // Hàm render ra Icon mat
    const renderEyeIcon = () => {
        if (hidden) return (<FontAwesomeIcon icon={faEye} />);
        return (<FontAwesomeIcon icon={faEyeSlash} />);
    }

    return (
        <div className="AllWrapper">
            <form className="FormCointainer">
                <div className="Label">Username</div>
                <div className={`BoxWrapper${usernameError ? ' Error' : ''}`}>
                    <FontAwesomeIcon className="Icon" icon={faUser} />
                    <input
                        id="UserName"
                        className="Input"
                        placeholder='Username'
                        value={usernameValue}
                        onChange={(e) => handleUsernameChange(e)}
                    />
                </div>
                {/* The bao loi khi chua nhap userName */}
                {usernameError && <div className="ErrorMessage">{usernameError}</div>}

                <div className="Label">Password</div>
                <div className={`BoxWrapper${passwordError ? ' Error' : ''}`}>
                    <FontAwesomeIcon className="Icon" icon={faLock} />
                    <input
                        type={hidden ? 'password' : 'text'}
                        className="InputPass"
                        placeholder='Password'
                        value={passwordValue}
                        onChange={(e) => handlePasswordChange(e)}
                    />
                    <button className='EyeBtn' onClick={toggleHidden}>
                        {renderEyeIcon()}
                    </button>
                </div>
                {/* The bao loi khi chua nhap passWord */}
                {passwordError && <div className="ErrorMessage">{passwordError}</div>}

                <button className="LoginBtn" type="submit" onClick={handleSubmit}>Log In</button>
            </form>
        </div>
    );
}

export default Login;
