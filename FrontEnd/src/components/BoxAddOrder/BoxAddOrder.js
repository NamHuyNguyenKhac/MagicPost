import { useContext, useEffect, useState } from "react";

import "./BoxAddOrder.css";
import { AddOrderContext } from "../Context/AddOrderContext";

function BoxAddOrder() {
  const {
    setOpenTableATP,
    dataGatheringPointList,
    dataTradingPointList,
    setIsDataFetched,
    setReRenderGPL,
    reRenderGPL,
    setOpenTableASG,
    setOpenBoxAddICMOrderCant,
  } = useContext(AddOrderContext);

  const { openAddOrder, setOpenAddOrder } = useContext(AddOrderContext);
  // console.log("con box: ",openAddOrder);

  // Lay thoi gian hien tai
  let now = new Date();
  let formattedDate = now.toLocaleDateString();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Cac Du lieu cua form tao
  const [senderName_BAO, setSenderName_BAO] = useState("");
  const [senderPhone_BAO, setSenderPhone_BAO] = useState("");
  const [senderAddress_BAO, setSenderAddress_BAO] = useState("");

  const [recipientName_BAO, setRecipientName_BAO] = useState("");
  const [recipientPhone_BAO, setRecipientPhone_BAO] = useState("");
  const [recipientAddress_BAO, setRecipientAddress_BAO] = useState("");

  const [sendingType_BAO, setSendingType_BAO] = useState("Document");
  const [weightSending_BAO, setWeightSending_BAO] = useState("");
  const [status_BAO, setStatus_BAO] = useState("Processing");

  const [mainFee_BAO, setMainFee_BAO] = useState("");
  const [surcharge_BAO, setSurcharge_BAO] = useState("");
  const [otherFee_BAO, setOtherFee_BAO] = useState("");
  //

  // cac trang thai thieu thong tin cua the
  const [senderNameError_BAO, setSenderNameError_BAO] = useState("");
  const [senderPhoneError_BAO, setSenderPhoneError_BAO] = useState("");
  const [senderAddressError_BAO, setSenderAddressError_BAO] = useState("");

  const [recipientNameError_BAO, setRecipientNameError_BAO] = useState("");
  const [recipientPhoneError_BAO, setRecipientPhoneError_BAO] = useState("");
  const [recipientAddressError_BAO, setRecipientAddressError_BAO] =
    useState("");

  const [weightSendingError_BAO, setWeightSendingError_BAO] = useState("");
  const [statusError_BAO, setStatusError_BAO] = useState("Processing");

  const [mainFeeError_BAO, setMainFeeError_BAO] = useState("");
  const [surchargeError_BAO, setSurchargeError_BAO] = useState("");
  const [otherFeeError_BAO, setOtherFeeError_BAO] = useState("");

  const [allCheckError_BAOR, setAllCheckError_BAOR] = useState("");
  const [newCheck_BAO, setNewCheck_BAO] = useState("");
  //

  const renderTP_BAO = () => {
    return dataTradingPointList.map((gatheringPoint) => (
      <option key={gatheringPoint.id} value={gatheringPoint.id}>
        {gatheringPoint.name}
      </option>
    ));
  };

  //Xu ly cac input va btn
  const handleSenderNameChange = (e) => {
    setSenderName_BAO(e.target.value);
    setSenderNameError_BAO("");
    updateError();
  };

  const handleSenderPhoneChange = (e) => {
    if (/^\d*$/.test(e.target.value) || e.target.value === "") {
      setSenderPhone_BAO(e.target.value);
      setSenderPhoneError_BAO("");
      updateError();
    }
  };

  const handleSenderAddressChange = (e) => {
    setSenderAddress_BAO(e.target.value);
    setSenderAddressError_BAO("");
    updateError();
  };

  //

  const handleRecipientNameChange = (e) => {
    setRecipientName_BAO(e.target.value);
    setRecipientNameError_BAO("");
    updateError();
  };

  const handleRecipientPhoneChange = (e) => {
    if (/^\d*$/.test(e.target.value) || e.target.value === "") {
      setRecipientPhone_BAO(e.target.value);
      setRecipientPhoneError_BAO("");
      updateError();
    }
  };

  const handleRecipientAddressChange = (e) => {
    setRecipientAddress_BAO(e.target.value);
    setRecipientAddressError_BAO("");
    updateError();
  };

  //

  const handleDocumentBoxChange = () => {
    setSendingType_BAO("Document");
  };

  const handleMerchandiseBoxChange = () => {
    setSendingType_BAO("Merchandise");
  };

  //
  const handleWeightInputChange = (e) => {
    if (/^\d*\.?\d*$/.test(e.target.value) || e.target.value === "") {
      setWeightSending_BAO(e.target.value);
      setWeightSendingError_BAO("");
      updateError();
    }
  };

  const handleStatusChange = (e) => {
    setStatus_BAO(e.target.value);
    setStatusError_BAO("");
    updateError();
  };

  //

  const handleMainFeeInputChange = (e) => {
    if (/^\d*\.?\d*$/.test(e.target.value) || e.target.value === "") {
      setMainFee_BAO(e.target.value);
      setMainFeeError_BAO("");
      updateError();
    }
  };

  const handleSurchargeInputChange = (e) => {
    if (/^\d*\.?\d*$/.test(e.target.value) || e.target.value === "") {
      setSurcharge_BAO(e.target.value);
      setSurchargeError_BAO("");
      updateError();
    }
  };

  const handleOtherFeeInputChange = (e) => {
    if (/^\d*\.?\d*$/.test(e.target.value) || e.target.value === "") {
      setOtherFee_BAO(e.target.value);
      setOtherFeeError_BAO("");
      updateError();
    }
  };

  const updateError = () => {
    let tmpCheck = true;

    if (senderName_BAO == "") {
        console.log(senderNameError_BAO);
        tmpCheck = false;
      }
      if (senderPhone_BAO == "") {
        tmpCheck = false;
      }
      if (senderAddress_BAO == "not chosen" || senderAddress_BAO == "") {
        tmpCheck = false;
      }
      if (recipientName_BAO == "") {
        tmpCheck = false;
      }
      if (recipientPhone_BAO == "") {
        tmpCheck = false;
      }
      if (recipientAddress_BAO == "not chosen" || recipientAddress_BAO == "") {
        tmpCheck = false;
      }
      if (weightSending_BAO == "") {
        tmpCheck = false;
      }
      if (status_BAO == "") {
        tmpCheck = false;
      }
      if (mainFee_BAO == "") {
        tmpCheck = false;
      }
      if (surcharge_BAO == "") {
        tmpCheck = false;
      }
      if (otherFee_BAO == "") {
        tmpCheck = false;
      }

      // if (!tmpCheck) {
      //   setAllCheckError_BAOR("error");
      //   return;
      // }

      if (tmpCheck) {
        setAllCheckError_BAOR("");
      }
  };

  // Xu ly khi Save (tao mot order moi)
  const handleSaveBtnClicked = () => {
    let tmpCheck = true;
    setAllCheckError_BAOR(""); 

    if (senderName_BAO == "") {
        setSenderNameError_BAO("error");
        console.log(senderNameError_BAO);
        tmpCheck = false;
      }
      if (senderPhone_BAO == "") {
        setSenderPhoneError_BAO("error");
        tmpCheck = false;
      }
      if (senderAddress_BAO == "not chosen" || senderAddress_BAO == "") {
        setSenderAddressError_BAO("error");
        tmpCheck = false;
      }
      if (recipientName_BAO == "") {
        setRecipientNameError_BAO("error");
        tmpCheck = false;
      }
      if (recipientPhone_BAO == "") {
        setRecipientPhoneError_BAO("error");
        tmpCheck = false;
      }
      if (recipientAddress_BAO == "not chosen" || recipientAddress_BAO == "") {
        setRecipientAddressError_BAO("error");
        tmpCheck = false;
      }
      if (weightSending_BAO == "") {
        setWeightSendingError_BAO("error");
        tmpCheck = false;
      }
      if (status_BAO == "") {
        setStatusError_BAO("error");
        tmpCheck = false;
      }
      if (mainFee_BAO == "") {
        setMainFeeError_BAO("error");
        tmpCheck = false;
      }
      if (surcharge_BAO == "") {
        setSurchargeError_BAO("error");
        tmpCheck = false;
      }
      if (otherFee_BAO == "") {
        setOtherFeeError_BAO("error");
        tmpCheck = false;
      }

      if (!tmpCheck) {
        setAllCheckError_BAOR("error");
        console.log(allCheckError_BAOR);
        return;
      }
    
      //Call API
      setOpenBoxAddICMOrderCant("open");
      setOpenAddOrder("close");
  };

  //Xu ly close
  const handleCancelBtnClicked = () => {
    setOpenAddOrder("close");
  };

  return (
    <div className="boxAddOrderWrapper">
      <div className="boxAddOrder">
        {/* Label */}
        <div className="labelBoxAddOrder">Add New Order</div>

        {/* Thoi gian cap nhat */}
        <div className="timeBoxAddOrderWrapper">
          <div>
            {`Create Date: ${formattedDate} ( ${hours}:${minutes}:${seconds} ) `}
          </div>
          <div>
            {`Last Update: ${formattedDate} ( ${hours}:${minutes}:${seconds} )`}
          </div>
        </div>

        {/* Thong tin nguoi gui */}
        <div className="senderInfoBoxAddOrderWrapper">
          {/* Box Ten + sdt */}
          <div className="senderNameAndPhoneWrapper_BAO">
            {/* Name */}
            <div className="NameWrapper_BAO">
              <div className="NameLabel_BAO">Sender's Name:</div>
              <div className={`NameInputWrapper_BAO`}>
                <input
                  className={`NameInput_BAO ${
                    senderNameError_BAO == "error" ? "errorBox_BAO" : ""
                  }`}
                  placeholder={`Sender's Name`}
                  value={senderName_BAO}
                  onChange={handleSenderNameChange}
                ></input>
              </div>
            </div>

            {/* Phone */}
            <div className="PhoneWrapper_BAO">
              <div className="NameLabel_BAO">Sender's Phone:</div>
              <div className="NameInputWrapper_BAO">
                <input
                  className={`NameInput_BAO ${
                    senderPhoneError_BAO == "error" ? "errorBox_BAO" : ""
                  }`}
                  placeholder={`Sender's Phone`}
                  value={senderPhone_BAO}
                  onChange={handleSenderPhoneChange}
                ></input>
              </div>
            </div>
          </div>

          {/* Dia chi */}
          <div className="senderAddressWrapper_BAO">
            <div className="senderAddressLabel_BAO">Sending Address:</div>

            <select
              id="sendingAddress_BAO"
              className={`sendingAddressSelect ${
                senderAddressError_BAO == "error" ? "errorBox_BAO" : ""
              }`}
              value={senderAddress_BAO}
              onChange={handleSenderAddressChange}
            >
              <option value="not chosen">Select Address</option>
              {renderTP_BAO()}
            </select>
          </div>
        </div>

        {/* Thong tin nguoi nhan */}
        <div className="recipientInfoBoxAddOrderWrapper">
          {/* Box Ten + sdt */}
          <div className="senderNameAndPhoneWrapper_BAO">
            {/* Name */}
            <div className="NameWrapper_BAO">
              <div className="NameLabel_BAO">Recipient's Name:</div>
              <div className="NameInputWrapper_BAO">
                <input
                  className={`NameInput_BAO ${
                    recipientNameError_BAO == "error" ? "errorBox_BAO" : ""
                  }`}
                  placeholder={`Recipient's Name`}
                  value={recipientName_BAO}
                  onChange={handleRecipientNameChange}
                ></input>
              </div>
            </div>

            {/* Phone */}
            <div className="PhoneWrapper_BAO">
              <div className="NameLabel_BAO">Recipient's Phone:</div>
              <div className="NameInputWrapper_BAO">
                <input
                  className={`NameInput_BAO ${
                    recipientPhoneError_BAO == "error" ? "errorBox_BAO" : ""
                  }`}
                  placeholder={`Recipient's Phone`}
                  value={recipientPhone_BAO}
                  onChange={handleRecipientPhoneChange}
                ></input>
              </div>
            </div>
          </div>

          {/* Dia chi Nhan*/}
          <div className="senderAddressWrapper_BAO">
            <div className="senderAddressLabel_BAO">Receiving address:</div>

            <select
              id="receivingAddress_BAO"
              className={`sendingAddressSelect ${
                recipientAddressError_BAO == "error" ? "errorBox_BAO" : ""
              }`}
              value={recipientAddress_BAO}
              onChange={handleRecipientAddressChange}
            >
              <option value="not chosen">Select Address</option>
              {renderTP_BAO()}
            </select>
          </div>
        </div>

        {/* Loai hang gui */}
        <div className="infoOrderBoxAddOrderWrapper">
          <div className="infoOrderLabel_BAO">Shipment type:</div>

          {/* Opitin:Document */}
          <div className="checkBoxOrderWrapper_BAO">
            <input
              type="checkbox"
              className="checkBoxOrder_BAO"
              value="Document"
              checked={sendingType_BAO === "Document"}
              onChange={handleDocumentBoxChange}
            ></input>
            <div>Document</div>
          </div>

          {/* Opitin:Merchandise */}
          <div className="checkBoxOrderWrapper2_BAO">
            <input
              type="checkbox"
              className="checkBoxOrder_BAO"
              value="Merchandise"
              checked={sendingType_BAO === "Merchandise"}
              onChange={handleMerchandiseBoxChange}
            />
            <div>Merchandise</div>
          </div>
        </div>

        {/* Can nang (khoi luong) + trang thai */}
        <div className="weightAndStatusWrapper_BAO">
          {/* Can nang */}
          <div className="weightBoxOrderWrapper">
            <div className="weightLabel_BAO">{`Weight (kg):`}</div>

            <div className="inputWeightWrapper_BAO">
              <input
                className={`inputWeight_BAO ${
                  weightSendingError_BAO == "error" ? "errorBox_BAO" : ""
                }`}
                value={weightSending_BAO}
                onChange={handleWeightInputChange}
                placeholder="Kg"
              />
            </div>
          </div>

          {/* Trang thai */}
          <div className="inputStatusWrapper_BAO">
            <div className="statusLabel_BAO">Status:</div>

            <select
              id="Status_BAO"
              className={`sendingStatusSelect ${
                statusError_BAO == "error" ? "errorBox_BAO" : ""
              }`}
              value={status_BAO}
              onChange={handleStatusChange}
            >
              <option value="Processing" className="ProcessingOption_BAO">
                Processing
              </option>
              <option value="Success" className="SuccessOption_BAO">
                Success
              </option>
              <option value="Failed" className="FailedOption_BAO">
                Failed
              </option>
            </select>
          </div>
        </div>

        {/* Cuoc phi + phu phi */}
        <div className="feeWrapper_BAO">
          {/* Main fee */}
          <div className="mainFeeWrapper_BAO">
            <div className="mainFeeLabel_BAO">{`Main Fee:`}</div>
            <div className="mainFeeInputWrapper_BAO">
              <input
                className={`mainFeeInput_BAO ${
                  mainFeeError_BAO == "error" ? "errorBox_BAO" : ""
                }`}
                value={mainFee_BAO}
                onChange={handleMainFeeInputChange}
                placeholder="VND"
              />
            </div>
          </div>

          {/* Surcharge */}
          <div className="mainFeeWrapper_BAO">
            <div className="mainFeeLabel_BAO">{`Surcharge:`}</div>
            <div className="mainFeeInputWrapper_BAO">
              <input
                className={`mainFeeInput_BAO ${
                  surchargeError_BAO == "error" ? "errorBox_BAO" : ""
                }`}
                value={surcharge_BAO}
                onChange={handleSurchargeInputChange}
                placeholder="VND"
              />
            </div>
          </div>
        </div>

        {/* Cac khoan thu khac */}
        <div className="otherFeeWrapperAll_BAO">
          {/* Other fee */}
          <div className="otherFeeWrapper_BAO">
            <div className="otherFeeLabel_BAO">{`Other Fees:`}</div>
            <div className="otherFeeInputWrapper_BAO">
              <input
                className={`otherFeeInput_BAO ${
                  otherFeeError_BAO == "error" ? "errorBox_BAO" : "    "
                }`}
                value={otherFee_BAO}
                onChange={handleOtherFeeInputChange}
                placeholder="VND"
              />
            </div>
          </div>
        </div>

        {/* Thong bao loi */}
        <div className="errorWrapper_BAO">
          {allCheckError_BAOR == "error"
            ? "You must fill in all information above"
            : ""}
        </div>

        {/* Cac nut Save va cancel */}
        <div className="btnWrapper_BAO">
          <button className="btn_BAO" onClick={handleSaveBtnClicked}>
            Save
          </button>

          <button className="btn_BAO" onClick={handleCancelBtnClicked}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoxAddOrder;
