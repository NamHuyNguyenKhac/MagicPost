import { useContext, useEffect, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";

import "./TableAS.css";

export default function TableAETP() {
  const {
    setOpenTableATP,
    dataGatheringPointList,
    dataTradingPointList,
    setIsDataFetched,
    setReRenderGPL,
    reRenderGPL,
    setOpenTableAS,
    setOpenTableAETP,
    setDataCustomerList,
    dataCustomerList,
  } = useContext(AddOrderContext);

  const [errorName_ATP, setErrorName_ATP] = useState("");
  const [errorAddress_ATP, setErrorAddress_ATP] = useState("");
  const [errorGP_ATP, setErrorGP_ATP] = useState("");

  const [nameGP_ATP, setNameGP_ATP] = useState("");
  const [addressGP_ATP, setAddressGP_ATP] = useState("");
  const [gatheringPoint_ATP, setGatheringPoint_ATP] = useState("not chosen");

  const [gender_AS, setGender_AS] = useState("Male");
  const [role_AS, setRole_AS] = useState("Transaction");
  const [email_AS, setEmail_AS] = useState("");
  const [phone_AS, setPhone_AS] = useState("");
  const [userName_AS, setUserName_AS] = useState("");

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
      const user = {
        firstName: nameGP_ATP,
        lastName: gender_AS,
        emailAddress: email_AS,
        username: userName_AS,
        phoneNumber: phone_AS,
        id: dataCustomerList.length,
      };

      const newData = dataCustomerList;
      newData.push(user);
      setDataCustomerList(newData);

      setOpenTableAETP("close");
    }
  };

  //Xu ly close
  const handleCancelBtnClicked_AS = () => {
    setOpenTableAETP("close");
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

  return (
    <div className="tableATPWrapper">
      <div className="tableATP">
        {/* Label */}
        <div className="labelTATP">New Transaction Point Employee</div>

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
            <text className="namePointLabelText">Employee's Name:</text>
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
              onChange={handleUsernameChange_AS}
            ></input>
          </div>
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
