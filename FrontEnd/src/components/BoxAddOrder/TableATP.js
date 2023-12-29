import { useContext, useEffect, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";

import "./TableATP.css";

export default function TableATP() {
  const {
    setOpenTableATP,
    dataGatheringPointList,
    setIsDataFetched,
    setReRenderGPL,
    reRenderGPL,
    dataTPLeader,
  } = useContext(AddOrderContext);

  const [errorName_ATP, setErrorName_ATP] = useState("");
  const [errorAddress_ATP, setErrorAddress_ATP] = useState("");
  const [errorGP_ATP, setErrorGP_ATP] = useState("");

  const [nameGP_ATP, setNameGP_ATP] = useState("");
  const [addressGP_ATP, setAddressGP_ATP] = useState("");
  const [gatheringPoint_ATP, setGatheringPoint_ATP] = useState("not chosen");

  // Lay thoi gian hien tai
  let now = new Date();
  let formattedDate = now.toLocaleDateString();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  const handleGatheringPointChange = (e) => {
    setGatheringPoint_ATP(e.target.value);
    setErrorGP_ATP("");
  };

  // Xu ly khi Save (tao mot order moi)
  const handleSaveBtnClicked = () => {
    if (!nameGP_ATP) {
      setErrorName_ATP("error");
    }

    if (!addressGP_ATP) {
      setErrorAddress_ATP("error");
    }

    if (gatheringPoint_ATP === "not chosen") {
      setErrorGP_ATP("error");
    }

    if (nameGP_ATP && addressGP_ATP && gatheringPoint_ATP != "not chosen") {
      // setIsDataFetched(false);
      //Them diem giao dich // Call API
      fetch(
        `http://localhost:8080/admin/insertTransactionPoints/${nameGP_ATP}/${addressGP_ATP}/${gatheringPoint_ATP}`
      )
        .then((res) => {
          if (res.status === "success") {
          }
          console.log("OK");
          setIsDataFetched(false);
        })
        .catch((err) => {
          console.log(err);
        });

      setOpenTableATP("close");
    }
  };

  //Xu ly close
  const handleCancelBtnClicked = () => {
    setOpenTableATP("close");
  };

  const handleNameOnChange_ATP = (e) => {
    setNameGP_ATP(e.target.value);
    setErrorName_ATP("");
  };

  const handleAddressOnChange_ATP = (e) => {
    setAddressGP_ATP(e.target.value);
    setErrorAddress_ATP("");
  };

  const renderGP_ATP = () => {
    return dataGatheringPointList.map((gatheringPoint) => (
      <option key={gatheringPoint.id} value={gatheringPoint.id}>
        {gatheringPoint.name}
      </option>
    ));
  };

  const renderTPL_SGP = () => {
    return dataTPLeader.map((gatheringPoint) => (
      <option key={gatheringPoint.id} value={gatheringPoint.id}>
        {gatheringPoint.name}
      </option>
    ));
  };

  return (
    <div className="tableATPWrapper">
      <div className="tableATP">
        {/* Label */}
        <div className="labelTATP">New Trading Point</div>

        {/* Thoi gian cap nhat */}
        <div className="timeBoxAddOrderWrapper">
          <div>
            {`Create Date: ${formattedDate} ( ${hours}:${minutes}:${seconds} )`}
          </div>
          <div>
            {`Last Update: ${formattedDate} ( ${hours}:${minutes}:${seconds} )`}
          </div>
        </div>

        {/* Ten dia diem giao dich */}
        <div className="namePoint_ATP">
          <div className="namePointLabel">
            <text className="namePointLabelText">Trading's Name:</text>
          </div>

          <div className="namePointInputWrapper">
            <input
              className={`namePointInput_ATP ${
                errorName_ATP === "error" ? "errorBox_ATP" : ""
              }`}
              placeholder="New Name"
              value={nameGP_ATP}
              onChange={handleNameOnChange_ATP}
            ></input>
          </div>
        </div>

        {errorName_ATP === "error" && (
          <div className="errorBoxWrapper_ATP">
            You must fill Trading Point's Name!
          </div>
        )}

        {/* Dia chi diem giao dich */}
        <div className="namePoint_ATP">
          <div className="namePointLabel">
            <text className="namePointLabelText">Trading Point's Address:</text>
          </div>

          <div className="namePointInputWrapper">
            <input
              className={`namePointInput_ATP ${
                errorAddress_ATP === "error" ? "errorBox_ATP" : ""
              }`}
              placeholder="New Address"
              value={addressGP_ATP}
              onChange={handleAddressOnChange_ATP}
            ></input>
          </div>
        </div>

        {errorAddress_ATP === "error" && (
          <div className="errorBoxWrapper_ATP">
            You must fill Trading Point's Address!
          </div>
        )}

        {/* Diem tap ket tuong ung*/}
        <div className="gatheringPointChief_ATP">
          <div className="gatheringPointChiefLabel_ATP">Gathering Point:</div>

          <select
            id="gatheringPointChief_ATP"
            className={`GPChiefSelect_ATP ${
              errorGP_ATP == "error" ? "errorBoxSelect_ATP" : ""
            }`}
            value={gatheringPoint_ATP}
            onChange={handleGatheringPointChange}
          >
            <option value="not chosen">Select Gathering Point</option>
            {renderGP_ATP()}
          </select>
        </div>

        {errorGP_ATP === "error" && (
          <div className="errorBoxWrapper_ATP">
            You must choose Gathering Point's!
          </div>
        )}

        {/* Truong diem giao dich*/}
        <div className="gatheringPointChief_ATP">
          <div className="gatheringPointChiefLabel_ATP">
            Trading Point's Chief:
          </div>

          <select
            id="gatheringPointChief_ATP"
            className="GPChiefSelect"
            // className={`sendingAddressSelect ${
            //   recipientAddressError_BAO == "error" ? "errorBox_BAO" : ""
            // }`}
            // value={recipientAddress_BAO}
            // onChange={handleRecipientAddressChange}
          >
            <option value="not chosen">Select Chief</option>
            {renderTPL_SGP()}
          </select>
        </div>

        {/* Cac nut Save va cancel */}
        <div className="btnFakeWrapper_ATP">
          <div className="btnWrapper_ATP">
            <button className="btn_ATP" onClick={handleSaveBtnClicked}>
              Save
            </button>

            <button className="btn_ATP" onClick={handleCancelBtnClicked}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
