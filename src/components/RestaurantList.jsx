
import { Link } from "react-router-dom";
import Shimmer from "../shimmer/Shimmer";

export default function RestaurantList({restaurants}){
   
     if (!restaurants || restaurants.length === 0) {
    return <Shimmer />;
  }


  

    return(
    
       <div className="flex flex-wrap gap-6 p-4">
   {restaurants.map((restaurant) => (
    <Link  key={restaurant.info.id}
           to={`/restaurants/${restaurant.info.id}`}
    >
    <div
    
      className="w-72 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
    >
      {/* Image */}
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          restaurant.info.cloudinaryImageId
        }
        alt={restaurant.info.name}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h1 className="text-lg font-semibold truncate">
          {restaurant.info.name}
        </h1>

        <p className="text-sm text-gray-600">
          {restaurant.info.locality}, {restaurant.info.areaName}
        </p>

        <p className="text-sm text-gray-700 mt-1">
          {restaurant.info.costForTwo}
        </p>

        <p className="text-sm text-gray-500 mt-1 truncate">
          {restaurant.info.cuisines.join(", ")}
        </p>

        <div className="mt-2 font-medium text-green-600">
          ⭐ {restaurant.info.avgRating}
        </div>
      </div>
    </div>
    </Link>   
  ))}
</div>

    );
}


export const restaurantsWithPromotion=(RestaurantList)=>{
  return(props)=>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantList {...props}/>
      </div>

    )
  }
}