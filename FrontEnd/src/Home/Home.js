import { Routes, Route, Link } from "react-router-dom";
import './Home.css'

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

function Home() {
    return (
        <div className="GWrapper">

            <div className="AllLoginWrapper">
                <Header></Header>
                
            </div>
            <Footer></Footer>
        </div>
       
    )
}

export default Home;