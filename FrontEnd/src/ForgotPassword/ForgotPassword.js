import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ForgotPassword.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ForgotPassword() {

    const [emailAdressFGP, setEmailAddressFGP] = useState('');
    const [notEmail, setNotEmail] = useState('');

    //Biểu thức chính quy kiểm tra email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

        //Call API
        alert('reset thanh cong!');

    }

    return (
        <div className="AllFGPWrapper" >
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
    )
}

export default ForgotPassword;