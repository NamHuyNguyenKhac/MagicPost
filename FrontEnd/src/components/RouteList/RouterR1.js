import { Routes, Route } from "react-router-dom";
import Login from '../Login/NewLogin.js';
import Nopage from '../NoPage/Nopage.js'
import Home from '../Home/Home.js'
import ForgotPassword from '../ForgotPassword/ForgotPassword.js'
import ForgotPasswordSuccess from '../ForgotPasswordSuccess/ForgotPasswordSuccess.js'
import Header from '../Header/Header.js';
import Teller from '../Teller/Teller.js';
import BoxAddOrder from '../BoxAddOrder/BoxAddOrder.js';
import Admin from "../Admin/Admin.js";
import OrderTable from "../Table/OrderTable.js";
import CustomerTable from "../Table/CustomerTable.js";
import TableAGP from "../BoxAddOrder/TableAGP.js";
import React from "react";

export default function RouterR1() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/forgotpasswordsuccess" element={<ForgotPasswordSuccess />}/>
          <Route path="/teller" element={<Teller/> } />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/addOrder" element={<BoxAddOrder/> } />
          <Route path="/orderTable" element={<OrderTable/>}/>
          <Route path="/customerTable" element={<CustomerTable/>}/>
          <Route path="/test" element={<TableAGP></TableAGP>} />
          <Route path="*" element={<Nopage />} />
        </Routes>
    )
}