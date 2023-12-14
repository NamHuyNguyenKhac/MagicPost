import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faUser, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function HeaderTeller () {
     //Chuyen route bang bien nay
     const navigate = useNavigate();

     //Xy ly nut tab
     const handleForgotTabBtnHomeClick = () => {
         navigate('/teller');
     }
     const handleForgotTabBtnSearchClick = () => {
         navigate('/search');
     }
     const handleForgotTabBtnLoginClick = () => {
         navigate('/profile');
     }

    return (
        // {/* Header tab Dung lai cua forgotpassword*/}
        <div className='headerTab'>
            <div className='ForgotPasswordTabLogo'>
                <div className='ForgotPasswordTabLogoImg'>
                </div>
                <div className='ForgotPasswordLogoText'>MagicPost</div>
            </div>
            {/* Nut Table */}   
            <button className='ForgotPasswordTabBtn' onClick={handleForgotTabBtnHomeClick}>
                <FontAwesomeIcon icon={faTable} />
                <div className='TextForgotPasswordTabBtn'>Table</div>
            </button>
            {/* Nut Search */}
            <button className='ForgotPasswordTabBtn' onClick={handleForgotTabBtnSearchClick}>
                <FontAwesomeIcon icon={faChartSimple} />
                <div className='TextForgotPasswordTabBtn'>Statistic</div>
            </button>
            {/* Nut Profile */}
            <button className='ForgotPasswordTabBtnEnd' onClick={handleForgotTabBtnLoginClick}>
                <FontAwesomeIcon icon={faUser} />
                <div className='TextForgotPasswordTabBtn'>Profile</div>
            </button>
        </div>
        // {/*  */}
     )
 
}

export default HeaderTeller;