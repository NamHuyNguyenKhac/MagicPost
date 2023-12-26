import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash, faHouse, faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import './ForgotPasswordSuccess.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

function ForgotPasswordSuccess() {

    //Email nhan duoc tu forgotpass
    //const myEmail = ' test@gmail.com';
    const location = useLocation();
    const myEmail = new URLSearchParams(location.search).get('data');

    console.log(myEmail);

    // //Chuyen route bang bien nay
    const navigate = useNavigate();

    // //Xy ly nut tab
    // const handleForgotTabBtnHomeClick = () => {
    //     navigate('/');
    // }
    // const handleForgotTabBtnSearchClick = () => {
    //     navigate('/search');
    // }
    // const handleForgotTabBtnLoginClick = () => {
    //     navigate('/login');
    // }

    //Tro ve login
    const handleBackToLogin = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    return (
        <div className='GWrapper'> 

            <div className="AllFGPWrapper" >
                {/* Header tab Dung lai cua forgotpassword*/}
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
                        Reset Success!
                    </div>

                    <div className="TextFGPSuccess"> 
                        We have sent to email address:
                    </div>

                    {/* Dia chi email da gui thu */}
                    <div className="EmailFGPSuccess">
                    {myEmail}
                    </div>

                    <div className="TextFGPSuccess">
                        Check your email to receive a new password. If you don't receive the email, please check your spam folder or try again.
                    </div>

                    {/* Nut Reset Password */}
                    <button className="BackToLoginBtn" onClick={handleBackToLogin}>Back to Login</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ForgotPasswordSuccess;