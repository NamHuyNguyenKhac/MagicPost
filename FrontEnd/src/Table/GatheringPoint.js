import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Teller/Teller.css";
import "./Table.css";
import { useContext, useEffect, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";

import TableAGP from "../BoxAddOrder/TableAGP";
import TableSGP from "../BoxAddOrder/TableSGP";

const maxALength_gatheringTB = 56;

// Chuan hoa de xau khong vuot qua cointainer
const adjustAddress_gatheringTB = (address) => {
  if (address.length > maxALength_gatheringTB) {
    let newAddress = address.substr(0, maxALength_gatheringTB - 3);
    newAddress = newAddress + "...";
    return newAddress;
  }
  return address;
};

function GatheringPointTable() {
  const {
    openTableAGP,
    setOpenTableAGP,
    dataGatheringPointList,
    reRenderGPL,
    setReRenderGPL,
    setIsDataFetched,
    openTableSGP,
    setOpenTableSGP,
    setDataGatheringPoint_SGP,
  } = useContext(AddOrderContext);

  useEffect(() => {
    // console.log("reRender");
    setReRenderGPL(false);
  }, [reRenderGPL]);

  const handleOpenSP_GP = (info) => {
    console.log(info);
    const NewInfo = {
      id: info.id,
      address: info.address,
      chief: info.chief,
      name: info.name,
    }

    setDataGatheringPoint_SGP(NewInfo); 

    setOpenTableSGP("open");
  }

  //Render List point
  const RenderGatheringPointList = (data) => {
    const renderElements = [];

    for (let i = 0; i < data.length; i++) {
      const customer = data[i];

      renderElements.push(
        <button key={customer.id} className="tellerCustomerItem">
          <div className="tpTradingPointId tellerCustomerText">
            {customer.id}
          </div>
          <div className="tpTradingPointNumberStaff tellerCustomerText">
            {customer.name}
          </div>
          <div className="tpTradingPointChief tellerCustomerText">
            {customer.chief}
          </div>
          <div className="tpTradingPointAddress tellerCustomerText">
            {adjustAddress_gatheringTB(customer.address)}
          </div>
          <button
            className="tellerCustomerEdit"
            onClick={() => handleOpenSP_GP(customer)}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </button>
      );
    }

    return renderElements;
  };

  //xu ly mo table add
  const handleAddGPOnPress = () => {
    setOpenTableAGP("open");
  };

  return (
    <div className="tableWrapper">
      <div className="customerTableWrapper">
        {/* Label */}
        <div className="labelCustomerWrapper">
          <div className="tradingPointId tellerLabelText">Id</div>

          <div className="tradingPointStaffNumber tellerLabelText">Name</div>

          <div className="tradingPointChief tellerLabelText">Chief</div>

          <div className="tradingPointAddress tellerLabelText">Address</div>
          {/* Nut them diem giao dich*/}
          <button
            className="addNewCustomerWrapper tellerLabelText"
            onClick={handleAddGPOnPress}
          >
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "12px" }} />
            New gathering point
          </button>
        </div>
        {/* List */}
        <div className="listCustomerWrapper">
          <div className="scrollViewCustomer">
            {/*danh sach diem giao dich */}
            {RenderGatheringPointList(dataGatheringPointList)}
          </div>
        </div>
      </div>
      {openTableAGP === "open" && <TableAGP></TableAGP>}
      {openTableSGP === "open" && <TableSGP></TableSGP>}
    </div>
  );
}

export default GatheringPointTable;
