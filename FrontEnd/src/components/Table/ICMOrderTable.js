import { useContext, useEffect } from "react";
import "../Teller/Teller.css";
import { AddOrderContext } from "../Context/AddOrderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import BoxSetOrderICM from "../BoxAddOrder/BoxSetOrderICM";
import BoxAddICMOrder from "../BoxAddOrder/BoxAddICMOrder";

function ICMOrderTable() {
  const {
    openAddOrder,
    setOpenAddOrder,
    dataOrderList,
    openBoxSetOrder,
    setOpenBoxSetOrder,
    setOpenBoxAddICMOrder,
    openBoxAddICMOrder,
    setDataPack_BSO,
    dataICMPackList,
  } = useContext(AddOrderContext);

  useEffect(() => {
    setOpenAddOrder("close");
    setOpenBoxSetOrder("close");
    setOpenBoxAddICMOrder("close");
  }, []);

  const handleAddOrderClicked = () => {
    setOpenAddOrder("open");
    console.log("con: ", openAddOrder);
  };

  const handleSetOrderClicked = (id) => {
    setOpenBoxSetOrder("open");
  };

  // Thêm class cho thẻ tellerOrderStatus dựa trên trạng thái
  const getOrderStatusClassName = (status) => {
    switch (status) {
      case "Success":
        return "SuccessStatus"; // Thay bằng tên class của trạng thái Success
      case "Failed":
        return "FailedStatus"; // Thay bằng tên class của trạng thái Failed
      case "Processing":
        return "ProcessingStatus"; // Thay bằng tên class của trạng thái Processing
      default:
        return ""; // Trả về một chuỗi trống nếu không có trạng thái nào khớp
    }
  };

  //Chuan hoa xau
  const adjustOrderData = (data) => {
    const res = [];

    for (let i = 0; i < data.length; i++) {
      let tmp = data[i];

      if (tmp.senderName.length > 22) {
        const newName = tmp.senderName.substr(0, 19) + "...";
        tmp.senderName = newName;
      }
      if (tmp.senderAddress.length > 31) {
        const newAddress = tmp.senderAddress.substr(0, 28) + "...";
        tmp.senderAddress = newAddress;
      }
      if (tmp.recipientName.length > 22) {
        const newName = tmp.recipientName.substr(0, 19) + "...";
        tmp.recipientName = newName;
      }
      if (tmp.recipientAddress.length > 30) {
        const newAddress = tmp.recipientAddress.substr(0, 27) + "...";
        tmp.recipientAddress = newAddress;
      }

      res.push(tmp);
    }

    return res;
  };

  const handlePlusClicked = (e) => {
    e.stopPropagation();
    setOpenBoxAddICMOrder("open");
  };

  //Render List Order
  const RenderICMOrderList = (data) => {
    const renderElements = [];

    console.log("Data: ",data);

    for (let i = 0; i < data.length; i++) {
      const order = data[i];

      const statusStyle = getOrderStatusClassName(order.status);

      if (order.status != "Processing") {
        continue;
      }

      renderElements.push(
        <button
          key={order.id}
          className="tellerOrderItem"
          onClick={() => {
            handleSetOrderClicked(order.id);
          }}
        >
          <div className="tellerOrderId tellerOrderText">{order.id}</div>
          <div className={`tellerOrderStatus tellerOrderText ${statusStyle}`}>
            {order.status}
          </div>
          <div className="tellerOrderSentDate tellerOrderText">
            {order.sentDate.substr(0,10)}
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
          <div className="tellerOrderRecipientAddressICM tellerOrderText">
            {order.recipientAddress}
          </div>
          <div className="btnPlusICMWrapper">
            <button className="btnPlusICM" onClick={handlePlusClicked}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </button>
      );
    }

    return renderElements;
  };

  return (
    <div className="tableWrapper">
      <div className="orderTableWrapper">
        {/* cac nut hien thi: 
                                  1. Id, 
                                  2. Ngay gui, 
                                  3. Ho ten nguoi gui, 
                                  4. dia chi nguoi gui, 
                                  5. ho ten nguoi nhan, 
                                  6. dia chi nguoi nhan, 
                                  7. trang thai */}
        <div className="orderLabelWrapper">
          <button className="orderListBtn idStyle">Id</button>
          <button className="orderListBtn statusStyle">Status</button>
          <button className="orderListBtn sentDateStyle">Sent date</button>
          <button className="orderListBtn senderNameStyle">
            Sender's name
          </button>
          <button className="orderListBtn senderAddressStyle">
            Sender's address
          </button>
          <button className="orderListBtn senderNameStyle">
            Recipient's name
          </button>
          <button className="orderListBtn senderAddressStyle">
            Recipient's address
          </button>
          {/* <button
            className="orderListBtn addStyle"
            onClick={handleAddOrderClicked}
          >
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "6px" }} />
            Add
          </button> */}
        </div>

        {/* Danh sach don hang */}
        <div className="orderListWrapper">
          <div className="scrollViewOrder">
            {/* {RenderICMOrderList(adjustOrderData(dataPack_BSO))} */}
            {RenderICMOrderList(adjustOrderData(dataICMPackList))}
          </div>
        </div>

        {openBoxSetOrder === "open" && <BoxSetOrderICM></BoxSetOrderICM>}
        {openBoxAddICMOrder === "open" && <BoxAddICMOrder></BoxAddICMOrder>}
      </div>
    </div>
  );
}

export default ICMOrderTable;
