import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import { AddOrderContext } from "../Context/AddOrderContext.js";

function Login() {
  const { setRootUserId, rootUserId, setRootId, setRootName, setRootPhoneNumber, setRootEmail } = useContext(AddOrderContext);

  const [hidden, setHidden] = useState(true);
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginFailed, setLoginFailed] = useState("");

  //chuyen route bang bien nay
  const navigate = useNavigate();

  //Xu ly khi quen mat khau
  const handleForgotPassword = (e) => {
    e.preventDefault();
  };

  // Hàm submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usernameValue) {
      setUsernameError("Username is required!");
    }

    if (!passwordValue) {
      setPasswordError("Password is required!");
    }
    if (usernameValue && passwordValue) {
      // console.log('UserName:', usernameValue);
      // console.log('Password:', passwordValue);

      //Call API
      fetch(
        `http://localhost:8080/users/checkUserAccount/${usernameValue}/${passwordValue}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.status === "error") {
            setLoginFailed("Failed");
          } else
          if (data.data.length === 1) {
            setRootUserId(data.data[0].roleId);
            localStorage.setItem("rootUserId", data.data[0].roleId);

            console.log("Data:" ,data.data[0]);

            const myUser = data.data[0];
            // console.log(data.data[0]);
            setRootId(myUser.id);
            localStorage.setItem("rootId", myUser.id);
            setRootEmail(myUser.email);
            localStorage.setItem("rootEmail", myUser.email);
            setRootName(myUser.fullname);
            localStorage.setItem("rootName", myUser.fullname);
            setRootPhoneNumber(myUser.phoneNumber);
            localStorage.setItem("rootPhoneNumber", myUser.phoneNumber);

            if (data.data[0].roleId == 1) {
              navigate("/admin");
            }
            if (data.data[0].roleId == 4) {
              navigate("/transleader");
            }

            if (data.data[0].roleId == 2) {
              navigate("/gatheringleader");
            }

            if (data.data[0].roleId == 3) {
              navigate("/gpemployee");
            }

            if (data.data[0].roleId == 5) {
              navigate("/tpemployee");
            }
          } 
        })
        .catch((err) => {
          console.log(err);
        });
      //
    }
  };

  //Xu ly khi input nhap vao gia tri
  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
    setUsernameError("");
    setLoginError("");
    setLoginFailed("");
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
    setPasswordError("");
    setLoginError("");
    setLoginFailed("");
  };

  //Xu ly khi focus
  const handleUsernameFocus = (e) => {
    setUsernameError("");
    setLoginError("");
  };

  const handlePasswordFocus = (e) => {
    setPasswordError("");
    setLoginError("");
  };

  // Hàm xu ly thay doi gia tri hidden
  const toggleHidden = (e) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  // Hàm render ra Icon mat
  const renderEyeIcon = () => {
    if (hidden) return <FontAwesomeIcon icon={faEye} />;
    return <FontAwesomeIcon icon={faEyeSlash} />;
  };

  return (
    <div className="GWrapper">
      <div className="AllLoginWrapper">
        <Header></Header>

        <form className="FormLoginCointainer">
          {/* Label: Welcome back */}
          <div className="LabelText">Welcome Back!</div>

          <div className="Label">Username</div>
          <div className={`BoxWrapper${usernameError ? " Error" : ""}`}>
            <FontAwesomeIcon className="Icon" icon={faUser} />
            <input
              id="UserName"
              className="Input"
              placeholder="Username"
              value={usernameValue}
              onChange={(e) => handleUsernameChange(e)}
              onFocus={() => handleUsernameFocus()}
            />
          </div>
          {/* The bao loi khi chua nhap userName */}
          {usernameError && <div className="ErrorMessage">{usernameError}</div>}

          <div className="Label">Password</div>
          <div className={`BoxWrapper${passwordError ? " Error" : ""}`}>
            <FontAwesomeIcon className="Icon" icon={faLock} />
            <input
              type={hidden ? "password" : "text"}
              className="InputPass"
              placeholder="Password"
              value={passwordValue}
              onChange={(e) => handlePasswordChange(e)}
              onFocus={() => handlePasswordFocus()}
            />
            <button className="EyeBtn" onClick={toggleHidden}>
              {renderEyeIcon()}
            </button>
          </div>
          {/* The bao loi khi chua nhap passWord */}
          {passwordError && <div className="ErrorMessage">{passwordError}</div>}
          {/* The bao loi khi nhap sai thong tin*/}
          {loginError && <div className="ErrorMessage">{loginError}</div>}

          {/* Nut quen mat khau */}
          <div className="ForgotPasswordWrapper">
            <Link className="ForgotPasswordBtn" to="/forgotPassword">
              Forgotten your password?
            </Link>
          </div>

          {loginFailed === "Failed" && (
            <div className="ErrorMessage">Wrong username or password!</div>
          )}

          {/* Nut login */}
          <button className="LoginBtn" type="submit" onClick={handleSubmit}>
            Log In
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
