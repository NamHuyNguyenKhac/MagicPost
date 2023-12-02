import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPlus, faUser, faLock, faEye, faEyeSlash, faHouse, faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useContext } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import BoxAddOrder from '../BoxAddOrder/BoxAddOrder.js';

import './Teller.css';
import { AddOrderProvider, AddOrderContext } from '../Context/AddOrderContext.js';

function Teller() {
    const {openAddOrder, setOpenAddOrder} = useContext(AddOrderContext);
    console.log("con: ",openAddOrder);

    const [topStatus, setTopstatus] = useState('Order');

    const fakeDataCustomer = [
        {
            id: 1,
            firstName: 'A Cong',
            lastName: 'Web',
            phoneNumber: '0888120903',
            emailAddress: 'mhp12092003@gmail.com',
        },
    ]

    const fakeDataOrder = [
        {
            id: 1,
            status: 'Success',
            sentDate: '12-09-2003',
            senderName: 'Huan Hoa Hong',
            senderAddress: '23 Hoang Trung phu tho, tp Dau Buoi',
            recipientName: 'Ngo ba Kha',
            recipientAddress: '237 Han Thuyen, Tp Nam dinh',

        },
        {
            id: 2,
            status: 'Failed',
            sentDate: '12-09-2003',
            senderName: 'Huan Hoa Hong',
            senderAddress: '2 tp Dau Buoi',
            recipientName: 'Ngo ba Kha',
            recipientAddress: '237 Han Thuyen, Tp Nam dinh',

        },
        {
            id: 3,
            status: 'Processing',
            sentDate: '12-09-2003',
            senderName: 'Huan Hoa Hong',
            senderAddress: '23 Hoang Trung phu tho, tp Dau Buoi',
            recipientName: 'Ngo ba Kha',
            recipientAddress: '237 Han Thuyen, Tp Nam dinh',

        },
        {
            id: 4,
            status: 'Failed',
            sentDate: '12-09-2003',
            senderName: 'Huan Hoa Hong',
            senderAddress: '23 Hoang Trung phu tho, tp Dau Buoi',
            recipientName: 'Ngo ba Kha',
            recipientAddress: '237 Han Thuyen, Tp Nam dinh',

        },
    ]

    //Mang chuan hoa de render 
    let renderDataOrder = [];

    //Chuan hoa xau
    const adjustOrderData = (data) => {
        const res = [];

        for (let i = 0; i < data.length; i++) {
            let tmp = data[i];

            if (tmp.senderName.length > 22) {
                const newName = tmp.senderName.substr(0,19) + '...';
                tmp.senderName = newName;
            }
            if (tmp.senderAddress.length > 31) {
                const newAddress = tmp.senderAddress.substr(0,28) + '...';
                tmp.senderAddress = newAddress;
            }
            if (tmp.recipientName.length > 22) {
                const newName = tmp.recipientName.substr(0,19) + '...';
                tmp.recipientName = newName;
            }
            if (tmp.recipientAddress.length > 35) {
                const newAddress = tmp.recipientAddress.substr(0,32) + '...';
                tmp.recipientAddress = newAddress;
            }

            res.push(tmp);
        }

        return res;
    }

    // Thêm class cho thẻ tellerOrderStatus dựa trên trạng thái
    const getOrderStatusClassName = (status) => {
        switch (status) {
        case 'Success':
            return 'SuccessStatus'; // Thay bằng tên class của trạng thái Success
        case 'Failed':
            return 'FailedStatus'; // Thay bằng tên class của trạng thái Failed
        case 'Processing':
            return 'ProcessingStatus'; // Thay bằng tên class của trạng thái Processing
        default:
            return ''; // Trả về một chuỗi trống nếu không có trạng thái nào khớp
        }
    };

    //Render List customer
    const RenderOrderList = (data) => {
        const renderElements = [];

        for (let i = 0; i < data.length; i++) {
            const order = data[i];

            const statusStyle = getOrderStatusClassName(order.status);

            renderElements.push(
                <button key={order.id} className='tellerOrderItem'>
                    <div className='tellerOrderId tellerOrderText'>{order.id}</div>
                    <div className={`tellerOrderStatus tellerOrderText ${statusStyle}`}>{order.status}</div>
                    <div className='tellerOrderSentDate tellerOrderText'>{order.sentDate}</div>
                    <div className='tellerOrderSenderName tellerOrderText'>{order.senderName}</div>
                    <div className='tellerOrderSenderAddress tellerOrderText'>{order.senderAddress}</div>
                    <div className='tellerOrderRecipientName tellerOrderText'>{order.recipientName}</div>
                    <div className='tellerOrderRecipientAddress tellerOrderText'>{order.recipientAddress}</div>
                </button>
            )
        }

        return renderElements;
    }

    //Render List customer
    const RenderCustomerList = (data) => {
        const renderElements = [];

        for (let i = 0; i < data.length; i++) {
            const customer = data[i];

            renderElements.push(
                <button key={customer.id} className='tellerCustomerItem'>
                    <div className='tellerCustomerId tellerCustomerText'>{customer.id}</div>
                    <div className='tellerCustomerFirstName tellerCustomerText'>{customer.firstName}</div>
                    <div className='tellerCustomerLastName tellerCustomerText'>{customer.lastName}</div>
                    <div className='tellerCustomerPhoneNumber tellerCustomerText'>{customer.phoneNumber}</div>
                    <div className='tellerCustomerEmailAddress tellerCustomerText'>{customer.emailAddress}</div>
                    <button className='tellerCustomerEdit' >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </button>
            )
        }

        return renderElements;
    }

    //Xu ly doi topBtn
    const handleCustomerListClicked = (e) => {
        setTopstatus('Customer');
        setOpenAddOrder('close');
    }
    
    const handleOrderListClicked = (e) => {
        setTopstatus('Order');
    }

    //Xu ly them don hang moi
    const handleAddOrderClicked = () => {
        setOpenAddOrder('open');
        console.log("con: ",openAddOrder);
    }

    return (
        // <AddOrderProvider>

            <div className='GWrapper'>

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

                        {/* Bang Order */}
                        {
                            topStatus == 'Order' && 
                            <div className='orderTableWrapper'>
                                {/* cac nut hien thi: 
                                1. Id, 
                                2. Ngay gui, 
                                3. Ho ten nguoi gui, 
                                4. dia chi nguoi gui, 
                                5. ho ten nguoi nhan, 
                                6. dia chi nguoi nhan, 
                                7. trang thai */}
                                <div className='orderLabelWrapper'> 
                                    <button className='orderListBtn idStyle'>
                                        Id
                                    </button>
                                    <button className='orderListBtn statusStyle'>
                                        Status
                                    </button>
                                    <button className='orderListBtn sentDateStyle'>
                                        Sent date
                                    </button>
                                    <button className='orderListBtn senderNameStyle'>
                                        Sender's name
                                    </button>
                                    <button className='orderListBtn senderAddressStyle'>
                                        Sender's address
                                    </button>
                                    <button className='orderListBtn senderNameStyle'>
                                        Recipient's name
                                    </button>
                                    <button className='orderListBtn senderAddressStyle'>
                                        Recipient's address
                                    </button>
                                    <button className='orderListBtn addStyle'
                                     onClick = {handleAddOrderClicked}
                                    >
                                        <FontAwesomeIcon icon={faPlus} style={{marginRight:'6px'}}/>
                                        Add
                                    </button>
                                </div>
                                
                                {/* Danh sach don hang */}
                                <div className='orderListWrapper'> 
                                    <div className='scrollViewOrder'>
                                        {RenderOrderList( adjustOrderData(fakeDataOrder) )}
                                    </div>
                                </div>
                                {openAddOrder ==='open' && <BoxAddOrder></BoxAddOrder>}

                            </div>
                        }

                        {/* Bang customer */}
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

                <Footer></Footer>
            </div>
        // </AddOrderProvider>
    )
}

export default Teller;