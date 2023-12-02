import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './Login/NewLogin.js';
import Nopage from './NoPage/Nopage.js'
import Home from './Home/Home.js'
import ForgotPassword from './ForgotPassword/ForgotPassword.js'
import ForgotPasswordSuccess from './ForgotPasswordSuccess/ForgotPasswordSuccess.js'
import Header from './Header/Header.js';
import Teller from './Teller/Teller.js';
import BoxAddOrder from './BoxAddOrder/BoxAddOrder.js';

import { AddOrderProvider } from "./Context/AddOrderContext.js";

import './StyleForAll.css';

function App() {
  return (
      <AddOrderProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/forgotpasswordsuccess" element={<ForgotPasswordSuccess />}/>
          <Route path="/teller" element={<Teller/> } />
          <Route path="/addOrder" element={<BoxAddOrder/> } />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </AddOrderProvider>
  );
}

export default App;
