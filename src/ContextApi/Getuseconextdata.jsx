
import Usercontextapi from "./Usercontaxtapi";

import { data } from "../DB/Data";
import { useState } from "react";


const Getuseconextdata = (props) => {


    const getDefaultCart = () => {

        let cart = {}
        for (let i = 1; i < data.length + 1; i++) {
          cart[i] = 0
        }
       

     return cart

    }

    console.log(getDefaultCart())

    const netAmount = () => {
        cartItems
    }
    

  
    
    const [cartItems, setCartItems] = useState(getDefaultCart())


    const AddtoCart = (itemid) => {
       
        setCartItems((prev) => ({...prev, [itemid]: prev[itemid] + 1}))
      
    }

    const RemoveCart = (itemid) => {
        setCartItems((prev) => ({...prev, [itemid] : prev[itemid] - 1}))
    }

    const UpdateCartitems = (newitem, id) => {
        setCartItems((prev) => ({...prev, [id] : newitem}))
        
    }

        const TotalAmount = () => {
            let TotalAmount = 0
            for (let item in cartItems) {
                if(cartItems[item] > 0) {
                    let info = data.find((items) => items.id === Number(item))
                    TotalAmount += cartItems[item] * info.price
                }
            }

            return TotalAmount

        
        }


        const NetAmounts = (cartItems) => {

            let totalItems = 0
            for (let item in cartItems) {

                totalItems += cartItems[item]

            }

            return totalItems

            

        }
      
        







    const contextValue = {NetAmounts, TotalAmount, cartItems, AddtoCart, RemoveCart, UpdateCartitems, data}



    return (

        <Usercontextapi.Provider value={contextValue}>
            {props.children}
        </Usercontextapi.Provider>

    )
}

export default Getuseconextdata