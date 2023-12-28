import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Teller/Teller.css";
import { useContext } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";
import TableAETP from "../BoxAddOrder/TableAETP.js";

function CustomerTable() {
  const { openAddOrder, setOpenAddOrder, dataCustomerList, setOpenTableAETP, openTableAETP } =
    useContext(AddOrderContext);

  const handleOpenAETP = (e) => {
    setOpenTableAETP("open");
    // console.log("111");
  };

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
          <div className="customerId tellerLabelText">Id</div>
          {/* First name */}
          <div className="customerFirstName tellerLabelText">Name</div>
          {/* Last name */}
          <div className="customerLastName tellerLabelText">Gender</div>
          {/* Phone number */}
          <div className="customerPhoneNumber tellerLabelText">
            Phone Number
          </div>
          {/* Email address */}
          <div className="customerEmailAddress tellerLabelText">
            Email address
          </div>
          {/* Nut them khach hang */}
          <button
            className="addNewCustomerWrapper tellerLabelText"
            onClick={handleOpenAETP}
          >
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "12px" }} />
            New employee
          </button>
        </div>
        {/* List */}
        <div className="listCustomerWrapper">
          <div className="scrollViewCustomer">
            {/*danh sach khach hang  */}
            {RenderCustomerList(dataCustomerList)}
          </div>
        </div>

        {
          openTableAETP === "open" && 
          <TableAETP>
          </TableAETP>
        }
      </div>
    </div>
  );
}

export default CustomerTable;
