import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { AddOrderContext } from '../Context/AddOrderContext.js';

function Login() {
    const {setRootUserId, rootUserId} = useContext(AddOrderContext);
   
    const [hidden, setHidden] = useState(true);
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    //chuyen route bang bien nay
    const navigate = useNavigate();

    //Xu ly khi quen mat khau
    const handleForgotPassword = (e) => {
        e.preventDefault();
    }

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

            // console.log('UserName:', usernameValue);
            // console.log('Password:', passwordValue);

            //Call API
            fetch(`http://localhost:8080/users/checkUserAccount/${usernameValue}/${passwordValue}`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    // console.log(data.data[0]);
                    if (data.data.length === 1) {
                        setRootUserId(data.data[0].roleId);
                        // console.log("???", rootUserId, ' ',data.data[0].roleId);
                        navigate("/transleader");
                    }
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
        setLoginError('');
    }

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
        setPasswordError('');
        setLoginError('');
    }

    //Xu ly khi focus
    const handleUsernameFocus = (e) => {
        setUsernameError('');
        setLoginError('');
    }

    const handlePasswordFocus = (e) => {
        setPasswordError('');
        setLoginError('');
    }

    // Hàm xu ly thay doi gia tri hidden
    const toggleHidden = (e) => {
        e.preventDefault();
        setHidden(!hidden);
    }

    // Hàm render ra Icon mat
    const renderEyeIcon = () => {
        if (hidden) return (<FontAwesomeIcon icon={faEye} />);
        return (<FontAwesomeIcon icon={faEyeSlash} />);
    }

    return (
        
        <div className='GWrapper'>
            <div className="AllLoginWrapper">
                <Header></Header>

                <form className="FormLoginCointainer">
                    {/* Label: Welcome back */}
                    <div className="LabelText">
                        Welcome Back!
                    </div>

                    <div className="Label">Username</div>
                    <div className={`BoxWrapper${usernameError ? ' Error' : ''}`}>
                        <FontAwesomeIcon className="Icon" icon={faUser} />
                        <input
                            id="UserName"
                            className="Input"
                            placeholder='Username'
                            value={usernameValue}
                            onChange={(e) => handleUsernameChange(e)}
                            onFocus={() => handleUsernameFocus()}
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
                            onFocus={() => handlePasswordFocus()}
                        />
                        <button className='EyeBtn' onClick={toggleHidden}>
                            {renderEyeIcon()}
                        </button>
                    </div>
                    {/* The bao loi khi chua nhap passWord */}
                    {passwordError && <div className="ErrorMessage">{passwordError}</div>}
                    {/* The bao loi khi nhap sai thong tin*/}
                    {loginError && <div className="ErrorMessage">{loginError}</div>}

                    {/* Nut quen mat khau */}
                    <div className="ForgotPasswordWrapper">
                        <Link className="ForgotPasswordBtn" to='/forgotPassword'
                        >Forgotten your password?</Link>
                    </div>

                    {/* Nut login */}
                    <button className="LoginBtn" type="submit" onClick={handleSubmit}>Log In</button>
                </form>
            </div>
            {/* <div>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {data.data?.map((d, i) => (
                            <tr key = {i}>
                            <td>{d.ID}</td>
                            <td>{d.Username}</td>
                            <td>{d.Password}</td>
                            <td>{d.Email}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
            <Footer/>
        </div>
    );
}

export default Login;