import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash, faHouse, faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import './ForgotPassword.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

function ForgotPassword() {

    const [emailAdressFGP, setEmailAddressFGP] = useState('');
    const [notEmail, setNotEmail] = useState('');

    //Biểu thức chính quy kiểm tra email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Chuyen route bang bien nay
    const navigate = useNavigate();

    //Xy ly nut tab
    // const handleForgotTabBtnHomeClick = () => {
    //     navigate('/');
    // }
    // const handleForgotTabBtnSearchClick = () => {
    //     navigate('/search');
    // }
    // const handleForgotTabBtnLoginClick = () => {
    //     navigate('/login');
    // }

    const handleEmailAddressFGPChange = (e) => {
        setEmailAddressFGP(e.target.value);
        setNotEmail('');
    }

    const handleEmailAddressFGPFocus = (e) => {
        setNotEmail('');
    }

    //Kiem tra email
    const handleResetPassword = (e) => {
        e.preventDefault();

        //Chua dien Email
        if (!emailAdressFGP) {
            setNotEmail('You must enter your email address !')
            return;
        }

        //Khong phai email
        if (!emailRegex.test(emailAdressFGP)) {
            setNotEmail('This is not an email address !');
            return;
        }

        //Call API de gui mat khau moi den hom thu 
        //alert('reset thanh cong!');

        navigate(`/forgotpasswordsuccess?data=${emailAdressFGP}`);
    }

    return (
        <div className='GWrapper'>
            <div className="AllFGPWrapper" >
                {/* Header tab */}
                {/* <div className='headerTab'>
                    <div className='ForgotPasswordTabLogo'>
                        <div className='ForgotPasswordTabLogoImg'>
                        </div>
                        <div className='ForgotPasswordLogoText'>MagicPost</div>
                    </div> */}
                    {/* Nut Home */}
                    {/* <button className='ForgotPasswordTabBtn' onClick={handleForgotTabBtnHomeClick}>
                        <FontAwesomeIcon icon={faHouse}/>
                        <div className='TextForgotPasswordTabBtn'>Home</div>
                    </button> */}
                    {/* Nut Search */}
                    {/* <button className='ForgotPasswordTabBtn' onClick={handleForgotTabBtnSearchClick}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        <div className='TextForgotPasswordTabBtn'>Search</div>
                    </button> */}
                    {/* Nut Login */}
                    {/* <button className='ForgotPasswordTabBtnEnd' onClick={handleForgotTabBtnLoginClick}>
                        <FontAwesomeIcon icon={faRightToBracket} />
                        <div className='TextForgotPasswordTabBtn'>Login</div>
                    </button>
                </div> */}
                {/*  */}

                <Header></Header>

                <form className="FormFGPContainer">
                    {/* Label: Forgot Password */}
                    <div className="LabelText">
                        Forgot Password
                    </div>

                    <div className="LabelFGP">Email address</div>
                    <div className={`BoxFGPWrapper${notEmail ? ' ErrorFGP' : ''}`}>
                        <FontAwesomeIcon className="IconFGP" icon={faEnvelope} />
                        <input
                            id="EmailAdressFGP"
                            className="InputFGP"
                            placeholder='Your email address'
                            value={emailAdressFGP}
                            onChange={(e) => handleEmailAddressFGPChange(e)}
                            onFocus={() => handleEmailAddressFGPFocus()}
                        />
                    </div>

                    {/* Thong bao loi chua dien email */}
                    {notEmail && <div className="ErrorMessage">{notEmail}</div>}

                    {/* Nut Reset Password */}
                    <button className="ResetPasswordBtn" type="submit" onClick={handleResetPassword}>Reset Password</button>
                </form>
            </div>
            
            <Footer></Footer>
        </div>
    )
}

export default ForgotPassword;