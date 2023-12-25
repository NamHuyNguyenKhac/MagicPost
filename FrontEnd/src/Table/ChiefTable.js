import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Teller/Teller.css";
import "./ChiefTable.css";
import { useContext } from "react";
import { AddOrderContext } from "../Context/AddOrderContext";

function ChiefTable() {
  const { openAddOrder, setOpenAddOrder, dataUsersList, setDataUsersList } =
    useContext(AddOrderContext);

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
          <div className="tbCustomerRole_CT tellerCustomerText CustomerText2">
            {customer.role}
          </div>
          <div className="tbCustomerName_CT tellerCustomerText CustomerText2">
            {customer.name}
          </div>
          <div className="tbCustomerPhone_CT  tellerCustomerText CustomerText2">
            {customer.phoneNumber}
          </div>
          <div className="tbCustomerWork_CT  tellerCustomerText CustomerText2">
            
          </div>
          <div className="tbCustomerEmailAddress_CT tellerCustomerText CustomerText2">
            {customer.email}
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
          {/* Work address */}
          <div className="customerWork_CT tellerLabelText">
            Work Name
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
            {RenderCustomerList(dataUsersList)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChiefTable;






// const user = {
//   fullname: "John Doe",
//   sex: "Male",
//   email: "johndoe@example.com",
//   username: "johndoe",
//   password: "password123",
//   phoneNumber: "123456789",
//   roleId: 1,
//   dob: "1990-01-01",
// };

// fetch("/admin/insertUser", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(user),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // Handle the response from the server
//   })
//   .catch((error) => {
//     // Handle any errors
//   });