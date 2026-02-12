import { useState,useContext } from "react";
import UserContext from "../hooks/UserContext";


export default function ({originalList,setFilteredList}) {

  const {setUserName,loggedInUser}=useContext(UserContext);
  const [searchText,setSearchText]=useState("");
  const handleClick=()=>{
 
    const filteredData=originalList.filter((res)=>res.info.avgRating>4.5);
    setFilteredList(filteredData);

  }

  const handleResetClick=()=>{
    setFilteredList(originalList);
  }

  const handleSearchClick=()=>{
   
    const filteredViaSearch=originalList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredList(filteredViaSearch);
    setSearchText("");
  }
  return (
    <div className="flex gap-3 m-4">
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-300" onClick={handleSearchClick}>Search</button>
          <input type="text"  id="search" placeholder="Pizza Paradise,Burger....." value={searchText} onChange={(e)=>setSearchText(e.target.value)} className=" rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
    
      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm' onClick={handleClick}>Top Rated Restaurants</button>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm' onClick={handleResetClick}>Reset</button>

      <div>
        <label htmlFor="username">Enter username</label>
        <input type="text" placeholder="Enter name" id="username" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
      </div>
    </div>
  )
}
