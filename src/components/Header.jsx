import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { useState,useContext } from "react";
import UserContext from "../hooks/UserContext";
import { useSelector } from "react-redux";

export default function Header(){
    const onlineStatus=useOnlineStatus();
    const[loginInfo,setLoginInfo]=useState(false);

    const {loggedInUser}=useContext(UserContext);

    // This is known as subscribing to the store
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
    

    return(
        <div className="flex justify-between bg-white shadow-md">
            <div className="p-2">
                  <img src="https://plus.unsplash.com/premium_photo-1739212976961-ff87739e2a47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2QlMjBjYXJ0b29ufGVufDB8fDB8fHww" alt=" restaurant image" className="h-16 w-16 rounded-xl object-cover"/>
        </div>
        <div>
            <ul className="flex gap-3 p-4">
                {onlineStatus?"online ✅":" offline❌"}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">🛒 Cart -({cartItems.length}) </Link></li>
                <button onClick={()=>setLoginInfo(!loginInfo)}>{loginInfo?"logout":"login"}</button>
                <li>{loggedInUser}</li>
            </ul>
        </div>
            </div>
           
    
    );
}