import { useContext } from "react";
import { AddOrderContext } from "./components/Context/AddOrderContext";
import { Route, Routes } from "react-router-dom";
import ForgotPasswordSuccess from "./components/ForgotPasswordSuccess/ForgotPasswordSuccess";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Home from "./components/Home/Home";
import Login from "./components/Login/NewLogin";
import RouterR1 from "./components/RouteList/RouterR1";
import RouterR0 from "./components/RouteList/RouterR0";
import RouterR2 from "./components/RouteList/RouterR2";
import RouterR3 from "./components/RouteList/RouterR3";
import Nopage from "./components/NoPage/Nopage";

export default function ListRouter() {
  const { rootUserId } = useContext(AddOrderContext);

  return (
    <>
      {/* All */}
      {rootUserId === 0 && <RouterR0></RouterR0>}

      {/* Admin */}
      {rootUserId === 1 && <RouterR1></RouterR1>}

      {/* Trans */}
      {rootUserId === 4 && <RouterR2></RouterR2>}

      {/* Gathering leader */}
      {rootUserId === 2 && <RouterR3></RouterR3>}
    </>
  );
}
