import OrderTable from "../Table/OrderTable";
import CustomerTable from "../Table/CustomerTable";
import Footer from "../Footer/Footer";
import HeaderTeller from "../Header/HeaderTeller.js";
import TradingPointTable from "../Table/TradingPointTable.js";
import GatheringPointTable from "../Table/GatheringPoint.js";

import "./Admin.css";
import "../StyleForAll.css";
import { useContext, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext.js";

function Admin() {
  const { openAddOrder, setOpenAddOrder, fakeDataOrder } =
    useContext(AddOrderContext);

  const [topStatus, setTopstatus] = useState("Trading Point");

  //Xu ly doi topBtn
  const handleTradingPointClicked = (e) => {
    setTopstatus("Trading Point");
    setOpenAddOrder("close");
  };

  const handleGatheringPointClicked = (e) => {
    setTopstatus("Gathering Point");
  };

  const handleStaffListClicked = (e) => {
    setTopstatus("Staff List");
  };

  return (
    <div className="GWrapper">
      <div className="AllTellerWrapper">
        {/* Header tab */}
        {/* <Header></Header> */}
        <HeaderTeller></HeaderTeller>

        {/* 2 nut CustomerList va Order List */}
        <div className="topBtnWrapper">
          <button
            className={`topBtn${
              topStatus === "Trading Point" ? " ticked" : " "
            }`}
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
          </button>
          <button
            className={`topBtn${topStatus === "Staff List" ? " ticked" : " "}`}
            onClick={handleStaffListClicked}
          >
            Staff List
          </button>
        </div>

        {/* Bang thong ke so lieu */}
        <div className="tableWrapper_TELLER">
          {/* Bang Trading Point */}
          {topStatus === "Trading Point" && <TradingPointTable></TradingPointTable>}

          {/* Bang Gathering Point */}
          {topStatus === "Gathering Point" && <GatheringPointTable></GatheringPointTable>}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Admin;
