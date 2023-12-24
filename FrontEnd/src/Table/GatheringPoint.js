import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Teller/Teller.css";
import "./Table.css";
import { useContext, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";

import TableAGP from "../BoxAddOrder/TableAGP";

const maxALength_gatheringTB = 62;

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
  const { openTableAGP, setOpenTableAGP, dataGatheringPointList } =
    useContext(AddOrderContext);

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
          <div className="tpTradingPointChief tellerCustomerText">
            {customer.chief}
          </div>
          <div className="tpTradingPointNumberStaff tellerCustomerText">
            {customer.staffNumber}
          </div>
          <div className="tpTradingPointAddress tellerCustomerText">
            {adjustAddress_gatheringTB(customer.address)}
          </div>
          <button className="tellerCustomerEdit">
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

          <div className="tradingPointChief tellerLabelText">Chief</div>

          <div className="tradingPointStaffNumber tellerLabelText">Staff</div>

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

    </div>
  );
}

export default GatheringPointTable;
