import { useContext } from "react";
import { AddOrderContext } from "./components/Context/AddOrderContext";
import { Route, Routes } from "react-router-dom";
import ForgotPasswordSuccess from "./components/ForgotPasswordSuccess/ForgotPasswordSuccess";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Home from "./components/Home/Home";
import Login from "./components/Login/NewLogin";
import RouterR1 from "./components/RouteList/RouterR1";
import Nopage from "./components/NoPage/Nopage";

export default function ListRouter() {
  const { rootUserId } = useContext(AddOrderContext);

  return (
    <>
      {/* Admin */}
      {rootUserId === 1 && <RouterR1></RouterR1>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/forgotpasswordsuccess"
          element={<ForgotPasswordSuccess />}
        />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </>
  );
}
