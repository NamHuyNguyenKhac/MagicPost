import OrderTable from "../Table/OrderTable.js";
import CustomerTable from "../Table/CustomerTable.js";
import Footer from "../Footer/Footer.js";
import TradingPointTable from "../Table/TradingPointTable.js";
import GatheringPointTable from "../Table/GatheringPoint.js";
import ChiefTable from "../Table/ChiefTable.js";
import HeaderAdmin from "../Header/HeaderAdmin.js";
import AdminPoints from "./AdminPoint.js";
import TLPack from "./TLPack.js";
import GLPack from "./GLPack.js";
import GPEPack from "./GPEPack.js";
import TPEPack from "./TEPack.js";

import "./Admin.css";
import "../StyleForAll.css";
import { useContext, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext.js";

function TPEmployee() {
  const { setOpenAddOrder, setOpenTableAGP, setOpenTableATP, setOpenTableSGP,  } =
    useContext(AddOrderContext);

  return (
    <>
     <TPEPack></TPEPack>
    </>
  );
}

export default TPEmployee;
