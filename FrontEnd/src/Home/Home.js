import { Routes, Route, Link } from "react-router-dom";
import './Home.css'

function Home() {
    return (
        <>
            <div>
                Home
            </div>

            <div className='loginBtnWrapper'>
                <Link className="loginBtn" to='/login'>Login</Link>  
            </div>
            
        </>
       
    )
}

export default Home;