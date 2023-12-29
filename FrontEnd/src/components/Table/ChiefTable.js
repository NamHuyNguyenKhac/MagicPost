import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Teller/Teller.css";
import "./ChiefTable.css";
import { useContext } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";

import TableAS from "../BoxAddOrder/TableAS";
import TableSetTPL from "../BoxAddOrder/TableSetTPL";

const maxLengthWorkA = 25;

function ChiefTable() {
  const {
    openAddOrder,
    setOpenAddOrder,
    dataTPLeader,
    setDataUsersList,
    openTableAS,
    setOpenTableAS,
    openTableSTPL,
    setOpenTableSTPL,
    setDataTPL_STPL,
  } = useContext(AddOrderContext);

  // Mo table them user
  const handleOpenTableAS = () => {
    setOpenTableAS("open");
  };

  // Mo table chinh sua user
  const handleOpenTableSTPL = (item) => {
    setDataTPL_STPL(item);
    setOpenTableSTPL("open");
  }

  const adjustAddresWork = (myAddress) => {
    if (!myAddress) return;
    if (myAddress.length >= maxLengthWorkA) {
      const tmp = myAddress.substr(0, maxLengthWorkA - 3) + "...";
      return tmp;
    }
    return myAddress;
  };

  //Render List customer
  const RenderCustomerList = (data) => {
    const renderElements = [];

    for (let i = 0; i < data.length; i++) {
      const customer = data[i];

      renderElements.push(
        <button key={customer.id} className="tellerCustomerItem">
          <div className="tbCustomerId_CT tellerCustomerText CustomerText2">
            {customer.id}
          </div>
          <div className="tbCustomerName_CT tellerCustomerText CustomerText2">
            {customer.name}
          </div>
          <div className="tbCustomerPhone_CT  tellerCustomerText CustomerText2">
            {customer.phoneNumber}
          </div>
          <div className="tbCustomerWork_CT  tellerCustomerText CustomerText2">
            {adjustAddresWork(customer.workName)}
          </div>
          <div className="tbCustomerEmailAddress_CT tellerCustomerText CustomerText2">
            {customer.email}
          </div>
          <button className="tellerCustomerEdit"
           onClick={() => {handleOpenTableSTPL(customer)}}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </button>
      );
    }

    return renderElements;
  };

  return (
    <div className="tableWrapper">
      <div className="customerTableWrapper">
        {/* Label */}
        <div className="labelCustomerWrapper">
          {/* Id */}
          <div className="tellerLabelText customerId_CT">Id</div>
          {/* Name */}
          <div className="customerName_CT tellerLabelText">Name</div>
          {/* Phone number */}
          <div className="customerPhone_CT tellerLabelText">Phone Number</div>
          {/* Work address */}
          <div className="customerWork_CT tellerLabelText">Work Name</div>
          {/* Email address */}
          <div className="customerEmailAddress_CT tellerLabelText">
            Email address
          </div>
          {/* Nut them khach hang */}
          <button
            className="addNewCustomerWrapper tellerLabelText"
            onClick={handleOpenTableAS}
          >
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "12px" }} />
            New Leader
          </button>
        </div>
        {/* List */}
        <div className="listCustomerWrapper">
          <div className="scrollViewCustomer">
            {/*danh sach khach hang  */}
            {RenderCustomerList(dataTPLeader)}
          </div>
        </div>

        {openTableAS === "open" && <TableAS></TableAS>}
        {openTableSTPL === "open" && <TableSetTPL></TableSetTPL>}
      </div>
    </div>
  );
}

export default ChiefTable;
