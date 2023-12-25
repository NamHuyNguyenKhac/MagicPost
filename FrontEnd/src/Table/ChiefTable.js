import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Teller/Teller.css";
import "./ChiefTable.css";
import { useContext } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";

function ChiefTable() {
  const { openAddOrder, setOpenAddOrder, dataCustomerList } =
    useContext(AddOrderContext);

  //Render List customer
  const RenderCustomerList = (data) => {
    const renderElements = [];

    for (let i = 0; i < data.length; i++) {
      const customer = data[i];

      renderElements.push(
        <button key={customer.id} className="tellerCustomerItem">
          <div className="tellerCustomerId tellerCustomerText">
            {customer.id}
          </div>
          <div className="tellerCustomerFirstName tellerCustomerText">
            {customer.firstName}
          </div>
          <div className="tellerCustomerLastName tellerCustomerText">
            {customer.lastName}
          </div>
          <div className="tellerCustomerPhoneNumber tellerCustomerText">
            {customer.phoneNumber}
          </div>
          <div className="tellerCustomerEmailAddress tellerCustomerText">
            {customer.emailAddress}
          </div>
          <button className="tellerCustomerEdit">
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
          {/* Role */}
          <div className="customerRole_CT tellerLabelText">Role</div>
          {/* Name */}
          <div className="customerName_CT tellerLabelText">Name</div>
          {/* Phone number */}
          <div className="customerPhone_CT tellerLabelText">
            Phone Number
          </div>
          {/* Email address */}
          <div className="customerEmailAddress_CT tellerLabelText">
            Email address
          </div>
          {/* Nut them khach hang */}
          <button className="addNewCustomerWrapper tellerLabelText">
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "12px" }} />
            New chief
          </button>
        </div>
        {/* List */}
        <div className="listCustomerWrapper">
          <div className="scrollViewCustomer">
            {/*danh sach khach hang  */}
            {RenderCustomerList(dataCustomerList)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChiefTable;
