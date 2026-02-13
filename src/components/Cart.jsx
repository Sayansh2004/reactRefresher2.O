import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

export default function Cart() {
  const dispatch=useDispatch();

  const clearCartData=()=>{
     dispatch(clearCart());
  }
  const cart=useSelector((store)=>store.cart.items);
  console.log(cart);
  return (
    <div>

      <button className="bg-blue-500 text-white hover:bg-blue-800 shadow-md rounded-lg px-4 py-2" onClick={clearCartData}>Clear Cart</button>
       <ItemList items={cart}></ItemList>
    </div>
  )
}
