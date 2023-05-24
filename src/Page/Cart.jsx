import React from 'react'
import UseCustomshooks from '../ContextApi/UseCustomshooks'




import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'



const Cart = () => {

  const navigate = useNavigate()

  const { data, cartItems, AddtoCart, RemoveCart, UpdateCartitems, TotalAmount} = UseCustomshooks()

  const amount = TotalAmount()

  
const product = data.map((item) => {


  if(cartItems[item.id] > 0) {

    const {productName, id, price, productImage} = item
    return (
      <article className='flex justify-between items-center flex-col mb-4 shadow-lg gap-2 max-w-[360px] rounded-xl p-4 mx-auto' key={id} >
        <img src={productImage} alt=""  className='w-[150px] h-[100px] object-contain'/>
        <h4>ProductName : {productName}</h4>
        <p>Price : {price}</p>

        <div className=' grid justify-center grid-cols-3 w-[100px] gap-4 items-center'>
        <button className=' flex border-2 rounded-lg h-[30px] w-[35px] text-center justify-center items-center'
        onClick={() => AddtoCart(id)}
        >
        <AiOutlinePlus size={20} />
        </button>
        <input className=' flex justify-center items-center text-center border-2 w-[35px]'  value={cartItems[id]} onChange={(e) => UpdateCartitems(Number(e.target.value), id)} />
        <button className='flex border-2 rounded-lg h-[30px] w-[35px] text-center justify-center items-center'
        onClick={() => RemoveCart(id)}
        >
        <AiOutlineMinus size={20} />
        </button>
        </div>
        </article>
    )
  }

})

// const product = NewItems.map((items) => {

//   const {id, productImage, productName, price} = items;

//   return (
//     <article className='flex justify-between items-center flex-col mb-4 shadow-lg gap-2 max-w-[360px] rounded-xl p-4 mx-auto' key={id} >
//              <img src={productImage} alt=""  className='w-[150px] h-[100px] object-contain'/>
//              <h4>ProductName : {productName}</h4>
//              <p>Price : {price}</p>
    
//              <div className=' grid justify-center grid-cols-3 w-[100px] gap-4 items-center'>
//              <button className=' flex border-2 rounded-lg h-[30px] w-[35px] text-center justify-center items-center'
//             onClick={() => AddtoCart(id)}
//             >
//             <AiOutlinePlus size={20} />
//             </button>
//              <input className=' flex justify-center items-center text-center border-2 w-[35px]'  value={cartItems[id]} onChange={(e) => UpdateCartitems(Number(e.target.value), id)} />
//             <button className='flex border-2 rounded-lg h-[30px] w-[35px] text-center justify-center items-center'
//              onClick={() => RemoveCart(id)}
//              >
//              <AiOutlineMinus size={20} />
//              </button>
//             </div>
//              </article>
//   )
// })




 
  return (

    <div className=' container mx-auto max-w-[1140px] py-10 px-4'>
      <h1 className=' text-center text-red-500 mt-5 text-[2rem] my-4'>Cart items</h1>



      {product}


    {

    amount > 0 ? (
      <div>
    <div className=' flex justify-between items-center border-2 p-2'>
      <h4>Total</h4>

      <span>{amount} $</span>
    </div>

    <div className=' flex gap-4 my-6'>
      <button className=' bg-gray-700 text-white py-2 px-4  rounded-lg'
      onClick={() => navigate('/', {replace : true})}
      >Continue Shopping</button>
      <button className=' bg-orange-600 text-white py-2 px-4 rounded-lg' onClick={() => alert('Congratulation! Please back to home')}>Checkout</button>
    </div>
    </div>
    )
  :
  (<h4 className='text-center color-red text-2xl'>Please select a item</h4>)
  }
      
    </div>
  )
}

export default Cart