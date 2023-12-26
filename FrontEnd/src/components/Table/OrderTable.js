import { useContext } from "react";
import "../Teller/Teller.css";
import { AddOrderContext } from "../Context/AddOrderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BoxAddOrder from "../BoxAddOrder/BoxAddOrder";

function OrderTable() {
  const { openAddOrder, setOpenAddOrder, dataOrderList } =
    useContext(AddOrderContext);

  const handleAddOrderClicked = () => {
    setOpenAddOrder("open");
    console.log("con: ", openAddOrder);
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
      if (tmp.recipientAddress.length > 35) {
        const newAddress = tmp.recipientAddress.substr(0, 32) + "...";
        tmp.recipientAddress = newAddress;
      }

      res.push(tmp);
    }

    return res;
  };

  //Render List Order
  const RenderOrderList = (data) => {
    const renderElements = [];

    for (let i = 0; i < data.length; i++) {
      const order = data[i];

      const statusStyle = getOrderStatusClassName(order.status);

      renderElements.push(
        <button key={order.id} className="tellerOrderItem">
          <div className="tellerOrderId tellerOrderText">{order.id}</div>
          <div className={`tellerOrderStatus tellerOrderText ${statusStyle}`}>
            {order.status}
          </div>
          <div className="tellerOrderSentDate tellerOrderText">
            {order.sentDate}
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
          <button
            className="orderListBtn addStyle"
            onClick={handleAddOrderClicked}
          >
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "6px" }} />
            Add
          </button>
        </div>

        {/* Danh sach don hang */}
        <div className="orderListWrapper">
          <div className="scrollViewOrder">
            {RenderOrderList(adjustOrderData(dataOrderList))}
          </div>
        </div>
        {openAddOrder === "open" && <BoxAddOrder></BoxAddOrder>}
      </div>
    </div>
  );
}

export default OrderTable;
