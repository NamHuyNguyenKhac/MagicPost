import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash, faHouse, faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header () {
     //Chuyen route bang bien nay
     const navigate = useNavigate();

     //Xy ly nut tab
     const handleForgotTabBtnHomeClick = () => {
         navigate('/');
     }
     const handleForgotTabBtnSearchClick = () => {
         navigate('/search');
     }
     const handleForgotTabBtnLoginClick = () => {
         navigate('/login');
     }

    return (
        // {/* Header tab Dung lai cua forgotpassword*/}
        <div className='headerTab'>
            <div className='ForgotPasswordTabLogo'>
                <div className='ForgotPasswordTabLogoImg'>
                </div>
                <div className='ForgotPasswordLogoText'>MagicPost</div>
            </div>
            {/* Nut Home */}
            <button className='ForgotPasswordTabBtn' onClick={handleForgotTabBtnHomeClick}>
                <FontAwesomeIcon icon={faHouse}/>
                <div className='TextForgotPasswordTabBtn'>Home</div>
            </button>
            {/* Nut Search */}
            {/* <button className='ForgotPasswordTabBtn' onClick={handleForgotTabBtnSearchClick}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                <div className='TextForgotPasswordTabBtn'>Search</div>
            </button> */}
            {/* Nut Login */}
            <button className='ForgotPasswordTabBtnEnd' onClick={handleForgotTabBtnLoginClick}>
                <FontAwesomeIcon icon={faRightToBracket} />
                <div className='TextForgotPasswordTabBtn'>Login</div>
            </button>
        </div>
        // {/*  */}
     )
 
}

export default Header;