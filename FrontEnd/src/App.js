import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/NewLogin.js";
import Nopage from "./components/NoPage/Nopage.js";
import Home from "./components/Home/Home.js";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.js";
import ForgotPasswordSuccess from "./components/ForgotPasswordSuccess/ForgotPasswordSuccess.js";
import Header from "./components/Header/Header.js";
import Teller from "./components/Teller/Teller.js";
import BoxAddOrder from "./components/BoxAddOrder/BoxAddOrder.js";
import Admin from "./components/Admin/Admin.js";
import OrderTable from "./components/Table/OrderTable.js";
import CustomerTable from "./components/Table/CustomerTable.js";
import TableAGP from "./components/BoxAddOrder/TableAGP.js";

import RouterR1 from "./components/RouteList/RouterR1.js";
import RouterR2 from "./components/RouteList/RouterR2.js";

import ListRouter from "./ListRouter.js";

import {
  AddOrderContext,
  AddOrderProvider,
} from "./components/Context/AddOrderContext.js";

import "./components/StyleForAll.css";
import React, { useContext } from "react";

function App() {
  const { rootUserId } = useContext(AddOrderContext);

  return (
    <AddOrderProvider> 
        <ListRouter></ListRouter>
    </AddOrderProvider>
  );
}

export default App;
