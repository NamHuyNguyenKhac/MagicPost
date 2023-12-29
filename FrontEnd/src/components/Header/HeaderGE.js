import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faUser, faChartSimple, faCircleUser, faLocationDot, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function HeaderGPE() {
     //Chuyen route bang bien nay
     const navigate = useNavigate();

     //Xy ly nut tab
     const handleForgotTabBtnHomeClick = () => {
         navigate('/gpemployee/Orders');
     }
    //  const handleForgotTabBtnSearchClick = () => {
    //      navigate('/gatheringleader/Staff');
    //  }
     const handleForgotTabBtnLoginClick = () => {
         navigate('/gpemployee/Profile');
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
            <FontAwesomeIcon icon={faTruckFast} />
                <div className='TextForgotPasswordTabBtn'>Orders</div>
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

export default HeaderGPE;