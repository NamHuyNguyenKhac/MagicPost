import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Teller/Teller.css";
import "./Table.css";
import { useContext, useEffect } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";

import TableATP from "../BoxAddOrder/TableATP";
import TableSTP from "../BoxAddOrder/TableSTP";

const maxGALength_tradingTB = 42;
const maxALength_tradingTB = 58;
const maxLengthNameTP = 25;

// Chuan hoa de khong cho xau vuot qua cointainer
const adjustGatheringAddress_tradingTB = (address) => {
  if (!address) return "";
  if (address.length > maxGALength_tradingTB) {
    let newAddress = address.substr(0, maxGALength_tradingTB - 3);
    newAddress = newAddress + "...";
    return newAddress;
  }
  return address;
};

// Chuan hoa de khong cho xau vuot qua cointainer
const adjustAddress_tradingTB = (address) => {
  if (!address) return "";
  if (address.length > maxALength_tradingTB) {
    let newAddress = address.substr(0, maxALength_tradingTB - 3);
    newAddress = newAddress + "...";
    return newAddress;
  }
  return address;
};

const adjustNameTP = (name) => {
  if (name.length >= maxLengthNameTP) {
    const tmp = name.substr(0,maxLengthNameTP - 3) + '...';
    return tmp;
  }

  return name;
}

function TradingPointTable() {
  const { dataTradingPointList, openTableATP, setOpenTableATP, openTableSTP, setOpenTableSTP, setDataTradingPoint_STP } =
    useContext(AddOrderContext);

  //Them diem giao dich moi
  const handleOpenTableATP = () => {
    setOpenTableATP("open");
  };

  const handleOpenTP_TP = (info) => {
    console.log(info);
    const NewInfo = {
      id: info.id,
      address: info.address,
      chief: info.chief,
      name: info.name,
      gatheringPointId: info.gatheringId,
    }

    setDataTradingPoint_STP(NewInfo); 

    setOpenTableSTP("open");
  }

  //Render List customer
  const RenderTradingPointList = (data) => {
    const renderElements = [];

    for (let i = 0; i < data.length; i++) {
      const customer = data[i];

      renderElements.push(
        <button key={customer.id} className="tellerCustomerItem">
          <div className="tableRealTradingPointId tellerCustomerText">
            {customer.id}
          </div>

          <div className="tableRealTradingPointChief tellerCustomerText tradingPointText">
            {adjustNameTP(customer.name)}
          </div>

          <div className="tableRealTradingPointStaff tellerCustomerText">
            {customer.chief}
          </div>

          <div className="tableRealTradingPointGathering tellerCustomerText tradingPointText">
            {customer.gathering}
          </div>

          <div className="tableRealTradingPointAddress tellerCustomerText tradingPointText">
            {adjustAddress_tradingTB(customer.address)}
          </div>

          <button className="tellerCustomerEdit"
           onClick={() => handleOpenTP_TP(customer)}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </button>
      );
    }

    return renderElements;
  };

  return (
    <div className="tableWrapper">
      <div className="customerTableWrapper">
        <div className="labelCustomerWrapper">
          <div className="realTradingPointId tellerLabelText">Id</div>

          <div className="realTradingPointStaffNumber tellerLabelText">
            Name
          </div>

          <div className="realTradingPointChief tellerLabelText">Leader</div>

          <div className="realTradingPointGathering tellerLabelText">
            Gathering Name
          </div>

          <div className="realTradingPointAddress tellerLabelText">Address</div>

          <button
            className="addNewCustomerWrapper tellerLabelText"
            onClick={handleOpenTableATP}
          >
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "12px" }} />
            New trading point
          </button>
        </div>

        <div className="listCustomerWrapper">
          <div className="scrollViewCustomer">
            {RenderTradingPointList(dataTradingPointList)}
          </div>
        </div>

        {openTableATP === "open" && <TableATP></TableATP>}
        {openTableSTP === "open" && <TableSTP></TableSTP>}
      </div>
    </div>
  );
}

export default TradingPointTable;
