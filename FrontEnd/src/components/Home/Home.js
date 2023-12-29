import { Routes, Route, Link } from "react-router-dom";
import "./Home.css";

import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AddOrderContext } from "../Context/AddOrderContext.js";

function Home() {
  const {
    openAddOrder,
    setOpenAddOrder,
    dataOrderList,
    openBoxSetOrder,
    setOpenBoxSetOrder,
    openBoxAddICMOrderCant,
    setOpenBoxAddICMOrderCant,
    dataPackList,
    dataPack_BSO,
    setDataPack_BSO,
  } = useContext(AddOrderContext);
  const [searchID_Home, setSearchID_Home] = useState();
  const [renderComp, setRenderComp] = useState(null);

  const regex = /^[0-9]+$/;

  useEffect(() => {
    setRenderComp(null);
  },[]);

  //Render List Order
  const RenderOrderList = (order) => {
    const renderElements = [];

    renderElements.push(
      <button key={order.id} className="tellerOrderItem">
        <div className="tellerOrderId tellerOrderText">{order.id}</div>
        <div className={`tellerOrderStatus tellerOrderText`}>
          {order.status}
        </div>
        <div className="tellerOrderSentDate tellerOrderText">
          {order.sentDate.substr(0, 10)}
        </div>
        <div className="tellerOrderSenderName tellerOrderText">
          {order.senderName}
        </div>
        <div className="tellerOrderSenderAddress tellerOrderText">
          {order.senderAddress}
        </div>
        <div className="tellerOrderRecipientName tellerOrderText">
          {order.recipientName}
        </div>
        <div className="tellerOrderRecipientAddress tellerOrderText">
          {order.recipientAddress}
        </div>
      </button>
    );

    return renderElements;
  };

  const handleSearchID_Home = (e) => {
    if (regex.test(e.target.value) || e.target.value == "") {
      setSearchID_Home(e.target.value);
    }
  };

  //   Xu ly search
  const handleSearchPackage = () => {
    for (let i = 0; i < dataPackList.length; ++i) {
      if (dataPackList[i].id == searchID_Home) {
        console.log("!ok", dataPackList[i]);
        setRenderComp(dataPackList[i]);
        return;
      }
    }
  };

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
        <div className="resWrapper">
          {renderComp != null && RenderOrderList(renderComp)}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
