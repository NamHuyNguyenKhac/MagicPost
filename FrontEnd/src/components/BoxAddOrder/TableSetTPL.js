// CHinh sua truong diem tap ket

import { useContext, useEffect, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";

import "./TableAS.css";

export default function TableSetTPL() {
  const {
    setOpenTableATP,
    dataGatheringPointList,
    dataTradingPointList,
    setIsDataFetched,
    setReRenderGPL,
    reRenderGPL,
    setOpenTableAS,
    setOpenTableSGPL,
    setDataGPL_SGPL,
    dataTPL_STPL,
    openTableSTPL,
    setOpenTableSTPL,
  } = useContext(AddOrderContext);

  const [errorName_ATP, setErrorName_ATP] = useState("");
  const [errorAddress_ATP, setErrorAddress_ATP] = useState("");
  const [errorGP_ATP, setErrorGP_ATP] = useState("");

  const [nameGP_ATP, setNameGP_ATP] = useState(dataTPL_STPL.name);
  const [addressGP_ATP, setAddressGP_ATP] = useState("");
  const [gatheringPoint_ATP, setGatheringPoint_ATP] = useState(dataTPL_STPL.workId);

  const [gender_AS, setGender_AS] = useState(dataTPL_STPL.gender);
  const [role_AS, setRole_AS] = useState("Transaction");
  const [email_AS, setEmail_AS] = useState(dataTPL_STPL.email);
  const [phone_AS, setPhone_AS] = useState(dataTPL_STPL.phoneNumber);
  const [userName_AS, setUserName_AS] = useState(dataTPL_STPL.username);

  const [genderError_AS, setGenderError_AS] = useState("");
  const [roleError_AS, setRoleError_AS] = useState("");
  const [emailError_AS, setEmailError_AS] = useState("");
  const [phoneError_AS, setPhoneError_AS] = useState("");
  const [userNameError_AS, setUserNameError_AS] = useState("");

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

  //Xu ly doi gioi tinh
  const handleMaleChange = () => {
    setGender_AS("Male");
  };

  const handleFemaleChange = () => {
    setGender_AS("Female");
  };

  //Xu ly doi vi tri
  const handleTransactionChange = () => {
    setRole_AS("Transaction");
  };

  const handleGatheringChange = () => {
    setRole_AS("Gathering");
  };

  //Doi email
  const handleEmailChange_AS = (e) => {
    setEmail_AS(e.target.value);
  };

  //Doi Phone
  const handlePhoneChange_AS = (e) => {
    setPhone_AS(e.target.value);
  };

  //DOi username
  const handleUsernameChange_AS = (e) => {
    setUserName_AS(e.target.value);
  };

  // Xu ly khi Save (tao mot order moi)
  const handleSaveBtnClicked_AS = () => {
    // if (!nameGP_ATP) {
    //   setErrorName_ATP("error");
    // }

    // if (!addressGP_ATP) {
    //   setErrorAddress_ATP("error");
    // }

    // if (gatheringPoint_ATP === "not chosen") {
    //   setErrorGP_ATP("error");
    // }

    // if (nameGP_ATP && addressGP_ATP && gatheringPoint_ATP != "not chosen") {
    if (1) {

      // updateLeader/:id/:fullname/:phoneNumber/:email/:sex/:username/:roleId
      const tmp_roleID = 4;

      fetch(`http://localhost:8080/admin/updateLeader/${dataTPL_STPL.id}/${nameGP_ATP}/${phone_AS}/${email_AS}/${gender_AS}/${userName_AS}/${tmp_roleID}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("OK!");
          // Handle the response from the server
          setIsDataFetched(false);
        })
        .catch((error) => {
          alert("Khong the chinh sua truong diem giao dich!!");
        });

      console.log("Name:",nameGP_ATP);

      setOpenTableSTPL("close");
    }
  };

  //Xu ly close
  const handleCancelBtnClicked_AS = () => {
    setOpenTableSTPL("close");
  };

  const handleNameOnChange_ATP = (e) => {
    setNameGP_ATP(e.target.value);
    setErrorName_ATP("");
  };

  const handleAddressOnChange_ATP = (e) => {
    setAddressGP_ATP(e.target.value);
    setErrorAddress_ATP("");
  };

  const renderGP_AS = () => {
    return dataGatheringPointList.map((gatheringPoint) => (
      <option key={gatheringPoint.id} value={gatheringPoint.id}>
        {gatheringPoint.name}
      </option>
    ));
  };

  const renderTP_AS = () => {
    return dataTradingPointList.map((gatheringPoint) => (
      <option key={gatheringPoint.id} value={gatheringPoint.id}>
        {gatheringPoint.name}
      </option>
    ));
  };

  const handleWorkIdChange_TPL = (e) => {
    setGatheringPoint_ATP(e.target.value);
  }

  return (
    <div className="tableATPWrapper">
      <div className="tableATP">
        {/* Label */}
        <div className="labelTATP">Transaction Point Leader Information</div>

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
            <text className="namePointLabelText">Leader's Name:</text>
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

        {/* Gioi tinh */}
        <div className="GenderWrapper_CT">
          <div className="GenderLabel_CT namePointLabelText">Gender:</div>

          {/* Opitin:Male */}
          <div className="checkBoxOrderWrapper_BAO">
            <input
              type="checkbox"
              className="checkBoxOrder_BAO"
              value="Male"
              checked={gender_AS === "Male"}
              onChange={handleMaleChange}
            ></input>
            <div>Male</div>
          </div>

          {/* Opitin:Female */}
          <div className="checkBoxOrderWrapper2_BAO">
            <input
              type="checkbox"
              className="checkBoxOrder_BAO"
              value="Female"
              checked={gender_AS === "Female"}
              onChange={handleFemaleChange}
            />
            <div>Female</div>
          </div>
        </div>

        {/* Dia chi email */}
        <div className="namePoint_AS">
          <div className="namePointLabel">
            <text className="namePointLabelText">Email's Address:</text>
          </div>

          <div className="namePointInputWrapper">
            <input
              className={`namePointInput_ATP ${
                errorAddress_ATP === "error" ? "errorBox_ATP" : ""
              }`}
              placeholder="Email"
              value={email_AS}
              onChange={handleEmailChange_AS}
            ></input>
          </div>
        </div>

        {/* So dien thoai */}
        <div className="namePoint_AS">
          <div className="namePointLabel">
            <text className="namePointLabelText">Phone number:</text>
          </div>

          <div className="namePointInputWrapper">
            <input
              className={`namePointInput_ATP ${
                errorName_ATP === "error" ? "errorBox_ATP" : ""
              }`}
              placeholder="Phone Number"
              value={phone_AS}
              onChange={handlePhoneChange_AS}
            ></input>
          </div>
        </div>

        {/* Ten dang nhap */}
        <div className="namePoint_ATP">
          <div className="namePointLabel">
            <text className="namePointLabelText">Username:</text>
          </div>

          <div className="namePointInputWrapper">
            <input
              className={`namePointInput_ATP ${
                errorName_ATP === "error" ? "errorBox_ATP" : ""
              }`}
              placeholder="Username"
              value={userName_AS}
            //   onChange={handleUsernameChange_AS}
            ></input>
          </div>
        </div>

        {/* Dia chi lam viec*/}
        <div className="workAddress_AS">
          <div className="gatheringPointChiefLabel_ATP">Work Address:</div>

          <select
            id="gatheringPointChief_ATP"
            className="GPChiefSelect"
            // className={`sendingAddressSelect ${
            //   recipientAddressError_BAO == "error" ? "errorBox_BAO" : ""
            // }`}
            value={gatheringPoint_ATP}
            // onChange={handleWorkIdChange_TPL}
          >
            <option value="not chosen">Select Work Address</option>
            {role_AS === "Transaction" && renderTP_AS()}
            {role_AS === "Gathering" && renderGP_AS()}
          </select>
        </div>

        {/* Cac nut Save va cancel */}
        <div className="btnFakeWrapper_ATP">
          <div className="btnWrapper_ATP">
            <button className="btn_ATP" onClick={handleSaveBtnClicked_AS}>
              Save
            </button>

            <button className="btn_ATP" onClick={handleCancelBtnClicked_AS}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
