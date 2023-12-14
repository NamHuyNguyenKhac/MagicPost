import { useState, useContext } from "react";

import Footer from "../Footer/Footer.js";
import OrderTable from "../Table/OrderTable.js";
import CustomerTable from "../Table/CustomerTable.js";
import HeaderTeller from "../Header/HeaderTeller.js";
import Header from "../Header/Header.js";

import "./Teller.css";
import { AddOrderContext } from "../Context/AddOrderContext.js";

function Teller() {
  const { openAddOrder, setOpenAddOrder, fakeDataOrder } =
    useContext(AddOrderContext);

  const [topStatus, setTopstatus] = useState("Order");

  //Xu ly doi topBtn
  const handleCustomerListClicked = (e) => {
    setTopstatus("Customer");
    setOpenAddOrder("close");
  };

  const handleOrderListClicked = (e) => {
    setTopstatus("Order");
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
            className={`topBtn${topStatus === "Order" ? " ticked" : " "}`}
            onClick={handleOrderListClicked}
          >
            Order List
          </button>
          <button
            className={`topBtn${topStatus === "Customer" ? " ticked" : " "}`}
            onClick={handleCustomerListClicked}
          >
            Customer List
          </button>
        </div>

        {/* Bang thong ke so lieu */}
        <div className="tableWrapper_TELLER">
          {/* Bang Order */}
          {topStatus === "Order" && <OrderTable></OrderTable>}

          {/* Bang customer */}
          {topStatus === "Customer" && <CustomerTable></CustomerTable>}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Teller;
