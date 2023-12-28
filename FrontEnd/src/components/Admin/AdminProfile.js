import OrderTable from "../Table/OrderTable.js";
import CustomerTable from "../Table/CustomerTable.js";
import Footer from "../Footer/Footer.js";
import TradingPointTable from "../Table/TradingPointTable.js";
import GatheringPointTable from "../Table/GatheringPoint.js";
import ChiefTable from "../Table/ChiefTable.js";
import HeaderAdmin from "../Header/HeaderAdmin.js";
import ChiefTableGP from "../Table/ChiefTableGP.js";

import "./Admin.css";
import "../StyleForAll.css";
import { useContext, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext.js";
import Profile from "../Infomation/Profile.js";

function AdminProfile() {
  const { setOpenAddOrder, setOpenTableAGP, setOpenTableATP, setOpenTableSGP } =
    useContext(AddOrderContext);

  return (
    <div className="GWrapper">
      <div className="AllTellerWrapper">
        {/* Header tab */}
        <HeaderAdmin></HeaderAdmin>
        {/* 2 nut CustomerList va Order List */}

        {/* Profile table */}
        <Profile></Profile>        

      </div>

      <Footer></Footer>
    </div>
  );
}

export default AdminProfile;
