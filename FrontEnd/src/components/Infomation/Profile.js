import OrderTable from "../Table/OrderTable.js";
import CustomerTable from "../Table/CustomerTable.js";
import Footer from "../Footer/Footer.js";
import TradingPointTable from "../Table/TradingPointTable.js";
import GatheringPointTable from "../Table/GatheringPoint.js";
import ChiefTable from "../Table/ChiefTable.js";
import HeaderAdmin from "../Header/HeaderAdmin.js";
import ChiefTableGP from "../Table/ChiefTableGP.js";

import "./Profile.css";
import "../StyleForAll.css";
import { useContext, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext.js";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate, useNavigate } from "react-router-dom";

function Profile() {
  const { setOpenAddOrder, setOpenTableAGP, setOpenTableATP, setOpenTableSGP, setRootUserId } =
    useContext(AddOrderContext);

    const navigate = useNavigate();

  const [name_Profile, setName_Profile] = useState("");
  const [email_Profile, setEmail_Profile] = useState("");
  const [phone_Profile, setPhone_Profile] = useState("");
  const [password_Profile, setPassword_Profile] = useState("");

  const [change_Profile, setChange_Profile] = useState("");

  const handleNameProfileChange = (e) => {
    setName_Profile(e.target.value);
    setChange_Profile("");
  };

  const handleEmailProfileChange = (e) => {
    setEmail_Profile(e.target.value);
    setChange_Profile("");
  };

  const handlePhoneProfileChange = (e) => {
    setPhone_Profile(e.target.value);
    setChange_Profile("");
  };

  const handlePasswordProfileChange = (e) => {
    setPassword_Profile(e.target.value);
    setChange_Profile("");
  };

  //Doi thong tin va call API
  const handleSaveProfile = () => {
    setChange_Profile("changed");
    setPassword_Profile("");
  };

  //XU ly logout
  const handleLogout = () => {
    setRootUserId(0);
    navigate("/login");
  }

  return (
    <div className="ProfileTableWrapper">
      <div className="ProfileLabelWrapper textProfile">Your Infomation</div>

      <div className="ProfileIDWrapper">
        <div className="ProfileInfoLabel textProfileS">Your Id:</div>
      </div>

      <div className="ProfileInfoWrapper">
        <div className="ProfileInfoLabel textProfileS">Your Name:</div>
        <div className="ProfileInfoInputWrapper">
          <input
            className="ProfileInfoInput textProfileSS"
            placeholder="Your name"
            value={name_Profile}
            onChange={handleNameProfileChange}
          ></input>
        </div>
      </div>

      <div className="ProfileInfoWrapper">
        <div className="ProfileInfoLabel textProfileS">Your Email:</div>
        <div className="ProfileInfoInputWrapper">
          <input
            className="ProfileInfoInput textProfileSS"
            placeholder="Your email"
            value={email_Profile}
            onChange={handleEmailProfileChange}
          ></input>
        </div>
      </div>

      <div className="ProfileInfoWrapper">
        <div className="ProfileInfoLabel textProfileS">Your Phone Number:</div>
        <div className="ProfileInfoInputWrapper">
          <input
            className="ProfileInfoInput textProfileSS"
            placeholder="Your phone number"
            value={phone_Profile}
            onChange={handlePhoneProfileChange}
          ></input>
        </div>
      </div>

      <div className="ProfileInfoWrapper">
        <div className="ProfileInfoLabel textProfileS">Password to verify:</div>
        <div className="ProfileInfoInputWrapper">
          <input
            className={`ProfileInfoInput textProfileSS ${
              change_Profile === "wrong" ? "wrongPass" : ""
            }`}
            placeholder="Your password?"
            value={password_Profile}
            onChange={handlePasswordProfileChange}
          ></input>
        </div>
      </div>

      {change_Profile === "changed" && (
        <div className="ProfilePopupWrapper">
          <div className="ProfileInfoLabel textProfileS">
            Changed information successfully!
          </div>
        </div>
      )}

      {change_Profile === "wrong" && (
        <div className="ProfilePopupWrapper">
          <div className="ProfileInfoLabel textProfileSR">
            Wrong Password! Please try again!
          </div>
        </div>
      )}

      <div className="ProfileBottomWrapper">
        <button className="ProfileBottomBtn textProfileBtn">
          Change Password
        </button>

        <button
          className="ProfileBottomBtn textProfileBtn"
          onClick={handleSaveProfile}
        >
          Save
        </button>

        <button className="ProfileBottomBtn textProfileBtn" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} style={{marginRight: "4px"}}/>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Profile;
