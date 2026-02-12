import { useState } from "react";
import ItemList from "./ItemList";

export default function RestaurantCategories({category}) {
    const[showitems,setShowItems]=useState(false);

    const handleClick=()=>{
        setShowItems(!showitems);

    }
  
  return (
    <div>
        {/* header */}
       <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
       <div className="flex justify-between cursor-pointer" onClick={handleClick}>
         <span className="font-bold text-lg">{category.card.card.title}  ({category.card.card.itemCards.length})</span>
        <span>{showitems===true?"👆🏻":"👇🏻"} </span>

       </div>
       {showitems && <ItemList items={category.card.card.itemCards}/>}
        
       </div>
        {/* Accordian body */}

       
      
    </div>
  )
}
