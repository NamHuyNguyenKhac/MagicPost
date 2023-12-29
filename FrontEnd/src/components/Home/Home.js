import { Routes, Route, Link } from "react-router-dom";
import "./Home.css";

import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Home() {
  const [searchID_Home, setSearchID_Home] = useState();

  const regex = /^[0-9]+$/;

  const handleSearchID_Home = (e) => {
    if (regex.test(e.target.value) || e.target.value == "") {
      setSearchID_Home(e.target.value);
    }
  };

  //   Xu ly search
  const handleSearchPackage = () => {};

  return (
    <div className="GWrapper">
      <div className="AllLoginWrapper">
        <Header></Header>

        <div className="searchHomeWrapper">
          <div className="searchLabelHome">Search Your Package</div>
          <div className="inputHomeWrapper">
            <input
              className="inputHome"
              placeholder="Package ID"
              value={searchID_Home}
              onChange={handleSearchID_Home}
            ></input>
            <button className="inputBtn" onClick={handleSearchPackage}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
