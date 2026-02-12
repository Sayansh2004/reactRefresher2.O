import { useState } from "react";
import ItemList from "./ItemList";

export default function RestaurantCategories({category,showItems,setShowIndex}) {
    // const[showitems,setShowItems]=useState(false);

    const handleClick=()=>{
      setShowIndex();

    }

    
  
  return (
    <div>
        {/* header */}
       <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
       <div className="flex justify-between cursor-pointer" onClick={handleClick}>
         <span className="font-bold text-lg">{category.card.card.title}  ({category.card.card.itemCards.length})</span>
        {/* <span>{showitems===true?"👆🏻":"👇🏻"} </span> */}
        <span>{showItems===true?"👆🏻":"👇🏻"} </span>   
        {/* Now it became a controlled component as it is being controlled through its parent i.e. restaurantMenu */}

       </div>
       {showItems && <ItemList items={category.card.card.itemCards}/>}
        
       </div>
        {/* Accordian body */}

       
      
    </div>
  )
}



// How this state is lifted?
// function makePrinter(num) {
//   return () => console.log(num);
// }

// const printFive = makePrinter(5);
// printFive(); // prints 5


// The function remembers 5 even though you didn’t pass it later.

// Same thing is happening with index.
