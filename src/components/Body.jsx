import  { useEffect,useState } from 'react';
import Shimmer from '../shimmer/Shimmer';
import Search from './Search';
import RestaurantList from './RestaurantList';
import { restaurantsWithPromotion } from './RestaurantList';

export default function Body() {
 const [filteredList,setFilteredList]=useState([]);
 const [originalList,setOriginalList]=useState([]);
    useEffect(()=>{
        fetchRestaurants();
    },[])

     const fetchRestaurants=async()=>{
            const data=await fetch("https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurants");
    
            const json=await data.json();
              const restaurants=json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

              setOriginalList(restaurants);
              setFilteredList(restaurants);
     } 
    
     const RestaurantWithPromotion=restaurantsWithPromotion(<RestaurantList/>);
  return (
    <div>
        <Search originalList={originalList} setFilteredList={setFilteredList} />
        {filteredList?.info?.promoted?(<RestaurantWithPromotion restaurants={filteredList}/>):(  <RestaurantList restaurants={filteredList}/>)}
      
    </div>
  )
}
