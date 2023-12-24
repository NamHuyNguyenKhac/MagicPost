import { useContext, useEffect, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";

import "./TableAGP.css";

export default function TableAGP() {
  const {
    openTableAGP,
    setOpenTableAGP,
    dataGatheringPointList,
    setIsDataFetched,
    setReRenderGPL,
    reRenderGPL,
  } = useContext(AddOrderContext);

  const [errorName_AGP, setErrorName_AGP] = useState("");
  const [errorAddress_AGP, setErrorAddress_AGP] = useState("");

  const [nameGP_AGP, setNameGP_AGP] = useState("");
  const [addressGP_AGP, setAddressGP_AGP] = useState("");

  // Lay thoi gian hien tai
  let now = new Date();
  let formattedDate = now.toLocaleDateString();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Xu ly khi Save (tao mot order moi)
  const handleSaveBtnClicked = () => {
    if (!nameGP_AGP) {
      setErrorName_AGP("error");
    }

    if (!addressGP_AGP) {
      setErrorAddress_AGP("error");
    }

    if (nameGP_AGP && addressGP_AGP) {
      // setIsDataFetched(false);
      //Them diem tap ket // Call API
      fetch(
        `http://localhost:8080/admin/insertGatheringPoints/${nameGP_AGP}/${addressGP_AGP}`
      )
        .then((res) => {
          if (res.status === "success") {
          }
          // console.log('OK');
          setIsDataFetched(false);
        })
        .catch((err) => {
          console.log(err);
        });
      
      setOpenTableAGP("close");
    }
  };

  //Xu ly close
  const handleCancelBtnClicked = () => {
    setOpenTableAGP("close");
  };

  const handleNameOnChange_AGP = (e) => {
    setNameGP_AGP(e.target.value);
    setErrorName_AGP("");
  };

  const handleAddressOnChange_AGP = (e) => {
    setAddressGP_AGP(e.target.value);
    setErrorAddress_AGP("");
  };

  return (
    <div className="tableAGPWrapper">
      <div className="tableAGP">
        {/* Label */}
        <div className="labelTAGP">New Gathering Point</div>

        {/* Thoi gian cap nhat */}
        <div className="timeBoxAddOrderWrapper">
          <div>
            {`Create Date: ${formattedDate} ( ${hours}:${minutes}:${seconds} ) `}
          </div>
          <div>
            {`Last Update: ${formattedDate} ( ${hours}:${minutes}:${seconds} )`}
          </div>
        </div>

        {/* Ten dia diem giao dich */}
        <div className="namePoint_AGP">
          <div className="namePointLabel">
            <text className="namePointLabelText">Gathering Point's Name:</text>
          </div>

          <div className="namePointInputWrapper">
            <input
              className={`namePointInput ${
                errorName_AGP === "error" ? "errorBox_AGP" : ""
              }`}
              placeholder="New Name"
              value={nameGP_AGP}
              onChange={handleNameOnChange_AGP}
            ></input>
          </div>
        </div>

        {errorName_AGP === "error" && (
          <div className="errorBoxWrapper_AGP">
            You must fill Gathering Point's Name!
          </div>
        )}

        {/* Dia chi diem giao dich */}
        <div className="namePoint_AGP">
          <div className="namePointLabel">
            <text className="namePointLabelText">
              Gathering Point's Address:
            </text>
          </div>

          <div className="namePointInputWrapper">
            <input
              className={`namePointInput ${
                errorAddress_AGP === "error" ? "errorBox_AGP" : ""
              }`}
              placeholder="New Address"
              value={addressGP_AGP}
              onChange={handleAddressOnChange_AGP}
            ></input>
          </div>
        </div>

        {errorAddress_AGP === "error" && (
          <div className="errorBoxWrapper_AGP">
            You must fill Gathering Point's Address!
          </div>
        )}

        {/* Truong diem tap ket*/}
        <div className="gatheringPointChief_AGP">
          <div className="gatheringPointChiefLabel_AGP">
            Gathering Point's Chief:
          </div>

          <select
            id="gatheringPointChief_AGP"
            className="GPChiefSelect"
            // className={`sendingAddressSelect ${
            //   recipientAddressError_BAO == "error" ? "errorBox_BAO" : ""
            // }`}
            // value={recipientAddress_BAO}
            // onChange={handleRecipientAddressChange}
          >
            <option value="not chosen">Select Chief</option>
            <option value="1">Truong diem 1</option>
            <option value="2">Truong diem 2</option>
            <option value="3">Truong diem 3</option>
            <option value="4">Truong diem 4</option>
          </select>
        </div>

        {/* Cac nut Save va cancel */}
        <div className="btnFakeWrapper_AGP">
          <div className="btnWrapper_AGP">
            <button className="btn_AGP" onClick={handleSaveBtnClicked}>
              Save
            </button>

            <button className="btn_AGP" onClick={handleCancelBtnClicked}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
