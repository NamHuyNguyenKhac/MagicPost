import { useContext, useEffect, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";

import "./TableAS.css";
import "./TableSETP.css";
import "./BoxAddICMOrder.css";

export default function BoxAddICMOrder() {
  const {
    setOpenTableATP,
    dataGatheringPointList,
    dataTradingPointList,
    setIsDataFetched,
    setReRenderGPL,
    reRenderGPL,
    setOpenTableAS,
    setOpenTableAETP,
    openTableSETP,
    setOpenTableSETP,
    setOpenBoxAddICMOrder,
    dataPackList,
    setDataPackList,
    dataICMPackList,
    setDataICMPackList,
  } = useContext(AddOrderContext);

  const [nextPointType_BAIO, setNextPointType_BAIO] = useState("Transaction");
  const [nextPointAddress_BAIO, setNextPointAddress_BAIO] =
    useState("not chosen");
  const [nextPointError_BAIO, setNextPointError_BAIO] = useState("");

  // Lay thoi gian hien tai
  let now = new Date();
  let formattedDate = now.toLocaleDateString();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  //Xu ly close
  const handleCancelBtnClicked_BAIO = () => {
    setOpenBoxAddICMOrder("close");
  };

  // Xu ly diem tiep theo
  const handleSaveBtnClick_BAIO = () => {   
    if (nextPointAddress_BAIO === "not chosen") {
      
      setNextPointError_BAIO("error");
      return;
    }


    const newData = [dataICMPackList[0]];
      
      const newData2 = dataPackList;
      newData2.push(dataICMPackList[0]);

      
      setDataICMPackList(newData);
      setDataPackList(newData2);
    // Call API

    setOpenBoxAddICMOrder("close");
  };

  // Xu ly diem cuoi cung
  const handleLastPointBtnClick_BAIO = () => {
    setOpenBoxAddICMOrder("close");
  };

  const renderGP_BAIO = () => {
    return dataGatheringPointList.map((gatheringPoint) => (
      <option key={gatheringPoint.id} value={gatheringPoint.id}>
        {gatheringPoint.name}
      </option>
    ));
  };

  const renderTP_BAIO = () => {
    return dataTradingPointList.map((gatheringPoint) => (
      <option key={gatheringPoint.id} value={gatheringPoint.id}>
        {gatheringPoint.name}
      </option>
    ));
  };

  //Xu ly doi dia diem
  const handleTransChosen = () => {
    setNextPointType_BAIO("Transaction");
  };

  const handleGateringChosen = () => {
    setNextPointType_BAIO("Gathering");
  };

  const handleAddress_BAIO = (e) => {
    setNextPointAddress_BAIO(e.target.value);
    setNextPointError_BAIO("");
  }

  return (
    <div className="tableATPWrapper">
      <div className="tableBAIO">
        {/* Label */}
        <div className="labelBAIO">Add New Incomming Order</div>

        {/* Thoi gian cap nhat */}
        <div className="timeBoxAddOrderWrapper marginBot_BAIO">
          <div>
            {`Create Date: ${formattedDate} ( ${hours}:${minutes}:${seconds} )`}
          </div>
          <div>
            {`Last Update: ${formattedDate} ( ${hours}:${minutes}:${seconds} )`}
          </div>
        </div>

        <div className="orderId_BAIO">
          <text className="namePointLabelText">Order Id:</text>
        </div>

        <div className="nextPointType_BAIO">
          <div className="NextAddressType_CT namePointLabelText">
            Next point type:
          </div>

          {/* Opitin:Transaction */}
          <div className="checkBoxOrderWrapper_BAO">
            <input
              type="checkbox"
              className="checkBoxOrder_BAO"
              value="Transaction"
              checked={nextPointType_BAIO === "Transaction"}
              onChange={handleTransChosen}
            ></input>
            <div>Transaction</div>
          </div>

          {/* Opitin:Gathering */}
          <div className="checkBoxOrderWrapper2_BAO">
            <input
              type="checkbox"
              className="checkBoxOrder_BAO"
              value="Gathering"
              checked={nextPointType_BAIO === "Gathering"}
              onChange={handleGateringChosen}
            />
            <div>Gathering</div>
          </div>
        </div>

        {/* Dia diem tiep theo */}
        <div className="nextPointAddress_BAIO">
          <div className="gatheringPointChiefLabel_BAIO">Next Address:</div>

          <select id="gatheringPointChief_ATP" className={`GPChiefSelect ${nextPointError_BAIO === "error" ? "errorBox_BAIO" : ""}`}
           value={nextPointAddress_BAIO}
           onChange={handleAddress_BAIO}
          >
            <option value="not chosen">Select Next Address</option>
            {nextPointType_BAIO === "Transaction" && renderTP_BAIO()}
            {nextPointType_BAIO === "Gathering" && renderGP_BAIO()}
          </select>
        </div>

        {nextPointError_BAIO === "error" && (
          <div className="errorFakeWrapper_BAIO">
            <div className="errorWrapper_BAIO">
              Next point address must be set!
            </div>
          </div>
        )}

        {/* Cac nut Save va cancel */}
        <div className="btnFakeWrapper_BAIO">
          <div className="btnWrapper_BAIO">
            <button className="btn_BAIO" onClick={handleLastPointBtnClick_BAIO}>
              Last Point
            </button>

            <button className="btn_BAIO" onClick={handleSaveBtnClick_BAIO}>
              Add
            </button>

            <button className="btn_BAIO" onClick={handleCancelBtnClicked_BAIO}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
