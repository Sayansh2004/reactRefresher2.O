import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import { useState,useEffect } from 'react'
import UserContext from "./hooks/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


export default function App() {
  const[userName,setUserName]=useState();

  //make an API call and send username and passwordl

  useEffect(()=>{
    const data={
      name:"Sayansh Chopra"
    };

    setUserName(data.name);
  },[])

  return (
    <div>
      <Provider store={appStore}>
         <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
             <Header/>
             <Outlet/>
       </UserContext.Provider>
      </Provider>
      

    </div>
  
  )
}