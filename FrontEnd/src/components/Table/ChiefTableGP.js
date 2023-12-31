// Bang truong diem tap ket

import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Teller/Teller.css";
import "./ChiefTable.css";
import { useContext } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";

import TableASG from "../BoxAddOrder/TableASG";
import TableSetGPL from "../BoxAddOrder/TableSetGPL";

function ChiefTableGP() {
  const {
    openAddOrder,
    setOpenAddOrder,
    dataUsersList,
    setDataUsersList,
    openTableASG,
    setOpenTableASG,
    dataGPLeader,
    openTableSGPL,
    setOpenTableSGPL,
    setDataGPL_SGPL,
  } = useContext(AddOrderContext);

  // Mo table them user
  const handleOpenTableAS = () => {
    setOpenTableASG("open");
  };

  // Mo table chinh sua
  const handleOpenTableSGPL = (item) => {
    setDataGPL_SGPL(item);
    setOpenTableSGPL("open");
  }

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
            {customer.workName}
          </div>
          <div className="tbCustomerEmailAddress_CT tellerCustomerText CustomerText2">
            {customer.email}
          </div>
          <button className="tellerCustomerEdit"
           onClick={() => {handleOpenTableSGPL(customer)}}
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
            {RenderCustomerList(dataGPLeader)}
          </div>
        </div>

        {openTableASG === "open" && <TableASG></TableASG>}
        {openTableSGPL === "open" && <TableSetGPL></TableSetGPL>}
      </div>
    </div>
  );
}

export default ChiefTableGP;
