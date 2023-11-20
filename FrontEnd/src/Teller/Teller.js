import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPlus, faUser, faLock, faEye, faEyeSlash, faHouse, faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import Header from '../Header/Header.js';

import './Teller.css';

function Teller() {
    const [topStatus,setTopstatus] = useState('Order');

    const fakeDataCustomer = [
        {
            id: 1,
            firstName: 'A Cong',
            lastName: 'Web',
            phoneNumber: '0888120903',
            emailAddress: 'mhp12092003@gmail.com',
        },
        {
            id: 2,
            firstName: 'Hong Minh',
            lastName: 'Pham',
            phoneNumber: '0889130903',
            emailAddress: 'mhp1209eaeq2003@gmail.com',
        },
        {
            id: 3,
            firstName: 'Ba Kha',
            lastName: 'Ngo',
            phoneNumber: '08391323903',
            emailAddress: 'dasdasdqew@gmail.com',
        },
        {
            id: 1,
            firstName: 'A Cong',
            lastName: 'Web',
            phoneNumber: '0888120903',
            emailAddress: 'mhp12092003@gmail.com',
        },
        {
            id: 2,
            firstName: 'Hong Minh',
            lastName: 'Pham',
            phoneNumber: '0889130903',
            emailAddress: 'mhp1209eaeq2003@gmail.com',
        },
        {
            id: 3,
            firstName: 'Ba Kha',
            lastName: 'Ngo',
            phoneNumber: '08391323903',
            emailAddress: 'dasdasdqew@gmail.com',
        },
        {
            id: 1,
            firstName: 'A Cong',
            lastName: 'Web',
            phoneNumber: '0888120903',
            emailAddress: 'mhp12092003@gmail.com',
        },
        {
            id: 2,
            firstName: 'Hong Minh',
            lastName: 'Pham',
            phoneNumber: '0889130903',
            emailAddress: 'mhp1209eaeq2003@gmail.com',
        },
        {
            id: 3,
            firstName: 'Ba Kha',
            lastName: 'Ngo',
            phoneNumber: '08391323903',
            emailAddress: 'dasdasdqew@gmail.com',
        },
        {
            id: 1,
            firstName: 'A Cong',
            lastName: 'Web',
            phoneNumber: '0888120903',
            emailAddress: 'mhp12092003@gmail.com',
        },
        {
            id: 2,
            firstName: 'Hong Minh',
            lastName: 'Pham',
            phoneNumber: '0889130903',
            emailAddress: 'mhp1209eaeq2003@gmail.com',
        },
        {
            id: 3,
            firstName: 'Ba Kha',
            lastName: 'Ngo',
            phoneNumber: '08391323903',
            emailAddress: 'dasdasdqew@gmail.com',
        },
        {
            id: 1,
            firstName: 'A Cong',
            lastName: 'Web',
            phoneNumber: '0888120903',
            emailAddress: 'mhp12092003@gmail.com',
        },
        {
            id: 2,
            firstName: 'Hong Minh',
            lastName: 'Pham',
            phoneNumber: '0889130903',
            emailAddress: 'mhp1209eaeq2003@gmail.com',
        },
        {
            id: 3,
            firstName: 'Ba Kha',
            lastName: 'Ngo',
            phoneNumber: '08391323903',
            emailAddress: 'dasdasdqew@gmail.com',
        },
        {
            id: 1,
            firstName: 'A Cong',
            lastName: 'Web',
            phoneNumber: '0888120903',
            emailAddress: 'mhp12092003@gmail.com',
        },
        {
            id: 2,
            firstName: 'Hong Minh',
            lastName: 'Pham',
            phoneNumber: '0889130903',
            emailAddress: 'mhp1209eaeq2003@gmail.com',
        },
        {
            id: 3,
            firstName: 'Ba Kha',
            lastName: 'Ngo',
            phoneNumber: '08391323903',
            emailAddress: 'dasdasdqew@gmail.com',
        },
        {
            id: 1,
            firstName: 'A Cong',
            lastName: 'Web',
            phoneNumber: '0888120903',
            emailAddress: 'mhp12092003@gmail.com',
        },
        {
            id: 2,
            firstName: 'Hong Minh',
            lastName: 'Pham',
            phoneNumber: '0889130903',
            emailAddress: 'mhp1209eaeq2003@gmail.com',
        },
        {
            id: 3,
            firstName: 'Ba Kha',
            lastName: 'Ngo',
            phoneNumber: '08391323903',
            emailAddress: 'dasdasdqew@gmail.com',
        },
        {
            id: 1,
            firstName: 'A Cong',
            lastName: 'Web',
            phoneNumber: '0888120903',
            emailAddress: 'mhp12092003@gmail.com',
        },
    ]

    //Render List customer
    const RenderCustomerList = (data) => {
        const renderElements = [];

        for (let i = 0; i < data.length; i++) {
            const customer = data[i];

            renderElements.push(
                <div key={customer.id} className='tellerCustomerItem'>
                    <div className='tellerCustomerId tellerCustomerText'>{customer.id}</div>
                    <div className='tellerCustomerFirstName tellerCustomerText'>{customer.firstName}</div>
                    <div className='tellerCustomerLastName tellerCustomerText'>{customer.lastName}</div>
                    <div className='tellerCustomerPhoneNumber tellerCustomerText'>{customer.phoneNumber}</div>
                    <div className='tellerCustomerEmailAddress tellerCustomerText'>{customer.emailAddress}</div>
                    <button className='tellerCustomerEdit' >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </div>
            )
        }

        return renderElements;
    }

    //Xu ly doi topBtn
    const handleCustomerListClicked = (e) => {
        setTopstatus('Customer');
    }
    
    const handleOrderListClicked = (e) => {
        setTopstatus('Order');
    }

    return (
        <div className="AllTellerWrapper"> 
            {/* Header tab */}
            <div className='testTab'></div>
            
            {/* 2 nut CustomerList va Order List */}
            <div className='topBtnWrapper'>
                <button className={`topBtn${topStatus == 'Order' ? ' ticked' : ' '}`} onClick={handleOrderListClicked}>Order List</button>
                <button className={`topBtn${topStatus == 'Customer' ? ' ticked' : ' '}`} onClick={handleCustomerListClicked}>Customer List</button>
            </div>
            {/* Bang thong ke so lieu */}
            <div className='tableWrapper'>

                {/* Bane customer */}
                {
                    topStatus == 'Customer' && 
                    <div className='customerTableWrapper'>
                        {/* Label */}
                        <div className='labelCustomerWrapper'>
                            {/* Id */}
                            <div className='customerId tellerLabelText'>
                                Id
                            </div>
                            {/* First name */}
                            <div className='customerFirstName tellerLabelText'>
                                First Name
                            </div>
                            {/* Last name */}
                            <div className='customerLastName tellerLabelText'>
                                Last Name
                            </div>
                            {/* Phone number */}
                            <div className='customerPhoneNumber tellerLabelText'>
                               Phone Number
                            </div>
                             {/* Email address */}
                            <div className='customerEmailAddress tellerLabelText'>
                               Email address
                            </div>
                            {/* Nut them khach hang */}
                            <button className='addNewCustomerWrapper tellerLabelText'>
                                <FontAwesomeIcon icon={faPlus} style={{marginRight:'12px'}}/>
                                New customer
                            </button>
                        </div>
                         {/* List */}
                         <div className='listCustomerWrapper'>
                            <div className='scrollViewCustomer'>
                                {/*danh sach khach hang  */}
                                {RenderCustomerList(fakeDataCustomer)}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Teller;