import logo from './logo.svg';
import './App.css';
import Login from './Login/Login.js'
import Nopage from './NoPage/Nopage.js'
import Home from './Home/Home.js'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Login />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
  );
}

export default App;
