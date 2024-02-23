import {useState} from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
const Title=()=>{
    return(
         <Link to="/" > <img className="logo" alt="logo" src={logo}/></Link>
    );
};

const Heading=()=>{
    const [isLogged, setIslogged]=useState(true);
    return(
        <div className="header">
            <Title/>
            <div className="nav">
                <ul>
                    <li> <Link to="/About" className="decor"> About </Link> </li>
                    <li className="decor"> Offers</li>
                    <li> <Link to="/Contact" className="decor"> Contact </Link></li>
                    <li className="decor">Cart</li>
                </ul>    
            </div>
            {
             (isLogged)?<button onClick={()=>setIslogged(false)} >LogOut</button>:
            <button onClick={()=>setIslogged(true)} >LogIn</button>
            }
        </div>
    );
};
export default Heading;