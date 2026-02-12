import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuShimmer from "../shimmer/MenuShimmer";
import RestaurantCategories from "./RestaurantCategories";

export default function RestaurantMenu() {
  const [showIndex,setShowIndex]=useState(null);
  const[showItems,setShowItems]=useState();
    const[restaurants,setRestaurants]=useState([]);
    const params=useParams();

     useEffect(()=>{
            fetchRestaurants();
        },[])
    
         const fetchRestaurants=async()=>{
                const data=await fetch("https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurantMenu/123456");
        
                const restaurants=await data.json();
                  
                  setRestaurants(restaurants);
                 
         } 

    const{resId}=params;
   
    const infoObj=restaurants?.data?.cards[2]?.card?.card?.info;
    
    const categories=restaurants?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    if(!categories || !infoObj){
        return <MenuShimmer/>;
    }
  

  const {name,costForTwoMessage,cuisines,avgRating}=infoObj;
  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl"> {name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Accordian of Categories */}
      {categories.map((category,index)=>{
        return(
            <RestaurantCategories key={category.card.card.title} category={category} showItems={index===showIndex?true:false} setShowIndex={()=>setShowIndex(index)}/>
        )
      
      })}
    </div>
  )
}
