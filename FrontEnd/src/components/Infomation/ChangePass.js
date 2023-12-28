import OrderTable from "../Table/OrderTable.js";
import CustomerTable from "../Table/CustomerTable.js";
import Footer from "../Footer/Footer.js";
import TradingPointTable from "../Table/TradingPointTable.js";
import GatheringPointTable from "../Table/GatheringPoint.js";
import ChiefTable from "../Table/ChiefTable.js";
import HeaderAdmin from "../Header/HeaderAdmin.js";
import ChiefTableGP from "../Table/ChiefTableGP.js";

import "./All.css";
import "../StyleForAll.css";
import { useContext, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext.js";

function Profile() {
  const { setOpenAddOrder, setOpenTableAGP, setOpenTableATP, setOpenTableSGP } =
    useContext(AddOrderContext);

  const [newPass_ChangePass, setNewPass_ChangePass] = useState("");

  return (
    <div className="ProfileTableWrapper">
     
    </div>
  );
}

export default Profile;
