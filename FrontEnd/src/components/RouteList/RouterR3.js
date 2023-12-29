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
import TransLeader from "../Admin/TransLeader.js";
import TransProfile from "../Admin/TransProfile.js";
import GLPack from "../Admin/GLPack.js";
import GLStaff from "../Admin/GLStaff.js";

import GatheringLeader from "../Admin/GatheringLeader.js";
import GatheringLeaderProfile from "../Admin/GatheringLeaderProfile.js";

import React from "react";

export default function RouterR3() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/forgotpasswordsuccess" element={<ForgotPasswordSuccess />}/>
          <Route path="/gatheringleader" element={<GatheringLeader /> } />
          <Route path="/gatheringleader/Profile" element={<GatheringLeaderProfile/> } />
          <Route path="/gatheringleader/Orders" element={<GLPack/> } />
          <Route path="/gatheringleader/Staff" element={<GLStaff/> } />
          <Route path="*" element={<Nopage />} />
        </Routes>
    )
}