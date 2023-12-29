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

function AdminChief() {
  const { setOpenAddOrder, setOpenTableAGP, setOpenTableATP, setOpenTableSGP } =
    useContext(AddOrderContext);

  const [topStatus, setTopstatus] = useState("TP Leader");

  //Xu ly doi topBtn
  const handleTradingPointClicked = (e) => {
    setTopstatus("Trading Point");
    setOpenTableATP("close");
  };

  const handleGatheringPointClicked = (e) => {
    setTopstatus("Gathering Point");
    setOpenTableAGP("close");
    setOpenTableSGP("close");
  };

  const handleStaffListClicked = (e) => {
    setTopstatus("Staff List");
  };

  const handleTPLeaderClicked = () => {
    setTopstatus("TP Leader");
  };

  const handleGPLeaderClicked = () => {
    setTopstatus("GP Leader");
  };

  return (
    <div className="GWrapper">
      <div className="AllTellerWrapper">
        {/* Header tab */}
        <HeaderAdmin></HeaderAdmin>
        {/* 2 nut CustomerList va Order List */}
        <div className="topBtnWrapper">
          {/* <button
          className={`topBtn${topStatus === "Trading Point" ? " ticked" : " "}`}
          onClick={handleTradingPointClicked}
        >
          Trading Point
        </button>
        <button
          className={`topBtn${
            topStatus === "Gathering Point" ? " ticked" : " "
          }`}
          onClick={handleGatheringPointClicked}
        >
          Gathering Point
        </button> */}
          <button
            className={`topBtn${topStatus === "TP Leader" ? " ticked" : " "}`}
            onClick={handleTPLeaderClicked}
            style={{ width: "12vw" }}
          >
            Transaction Point Leader
          </button>
          <button
            className={`topBtn${topStatus === "GP Leader" ? " ticked" : " "}`}
            onClick={handleGPLeaderClicked}
            style={{ width: "12vw" }}
          >
            Gathering Point Leader
          </button>
        </div>

        {/* Bang thong ke so lieu */}
        <div className="tableWrapper_TELLER">
          {/* Bang Trading Point */}
          {topStatus === "Trading Point" && (
            <TradingPointTable></TradingPointTable>
          )}

          {/* Bang Gathering Point */}
          {topStatus === "Gathering Point" && (
            <GatheringPointTable></GatheringPointTable>
          )}

          {topStatus === "TP Leader" && <ChiefTable></ChiefTable>}
          {topStatus === "GP Leader" && <ChiefTableGP></ChiefTableGP>}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default AdminChief;
