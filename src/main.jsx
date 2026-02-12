import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import Error from './components/Error.jsx'
import RestaurantList from './components/RestaurantList.jsx'
import { lazy,Suspense } from 'react'
import Body from './components/Body.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import Shimmer from './shimmer/Shimmer.jsx'
import UserContext from './hooks/UserContext.js'

const Groceries=lazy(()=>import("./components/Groceries.jsx"));


const browserRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurants",
        element:<RestaurantList/>
      },{
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/groceries",
        element:<Suspense fallback={Shimmer}><Groceries/></Suspense>
      }

    ],
    errorElement:<Error/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={browserRouter}></RouterProvider>
  </StrictMode>,
)
