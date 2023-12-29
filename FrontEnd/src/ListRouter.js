import { useContext, useEffect } from "react";
import { AddOrderContext } from "./components/Context/AddOrderContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import ForgotPasswordSuccess from "./components/ForgotPasswordSuccess/ForgotPasswordSuccess";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Home from "./components/Home/Home";
import Login from "./components/Login/NewLogin";
import RouterR1 from "./components/RouteList/RouterR1";
import RouterR0 from "./components/RouteList/RouterR0";
import RouterR2 from "./components/RouteList/RouterR2";
import RouterR3 from "./components/RouteList/RouterR3";
import RouterR4 from "./components/RouteList/RouterR4";
import RouterR5 from "./components/RouteList/RouterR5";
import Nopage from "./components/NoPage/Nopage";

const timeSESS = 5000000; //mili giay

export default function ListRouter() {
  const { rootUserId, setRootUserId } = useContext(AddOrderContext);

  const navigate = useNavigate();

  useEffect(() => {
    // Đặt thời gian chờ (ví dụ: 5 giây)
    const timeoutId = setTimeout(() => {
      // Sau khi đợi, thực hiện hành động (ví dụ: gỡ bỏ roleId)
      if (rootUserId != 0) {
        setRootUserId(0);
        alert('Your session has expired !');
        localStorage.setItem("rootUserId", 0);
        localStorage.setItem("rootId", 0);
        navigate("/");
      }
    }, timeSESS);

    // Lưu ý: cleanup function để tránh lỗi memory leak
    return () => clearTimeout(timeoutId);
  }, [rootUserId]);

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

      {/* Nhan vien diem tap ket */}
      {rootUserId === 3 && <RouterR4></RouterR4>}

      {/* Nhan vien diem tap ket */}
      {rootUserId === 5 && <RouterR5></RouterR5>}
    </>
  );
}
