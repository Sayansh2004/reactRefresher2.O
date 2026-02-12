import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="flex justify-between bg-white shadow-md">
            <div className="p-2">
                  <img src="https://plus.unsplash.com/premium_photo-1739212976961-ff87739e2a47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2QlMjBjYXJ0b29ufGVufDB8fDB8fHww" alt=" restaurant image" className="h-16 w-16 rounded-xl object-cover"/>
        </div>
        <div>
            <ul className="flex gap-3 p-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
            </div>
           
    
    );
}