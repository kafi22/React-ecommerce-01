
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Home from '../src/Page/Home'
import About from "./Page/About"
import Cart from "./Page/Cart"
import Getuseconextdata from "./ContextApi/Getuseconextdata"


  
const App = () => {

  const routers = createBrowserRouter([
    {
      path : "/",
      element : (
        <Navbar />
      ),

      children : [
        {
          path : "/",
          element : (
            <Home />
          )
        },

        {
          path : "about",
          element : (
            <About />
          )
        },

        {
          path : "cart",
          element : (
            <Cart />
          )
        }
      ]
    }
  ])

  return (
    
    <Getuseconextdata>
      <RouterProvider router={routers} />
    </Getuseconextdata>
  )
}

export default App