import React from 'react'
import UseCustomshooks from '../ContextApi/UseCustomshooks'

const Product = ({data}) => {

    const {id, price, productName, productImage} = data

    const { cartItems,  AddtoCart} = UseCustomshooks()

    let items = cartItems[id]

  return (
    <div className=' mb-6'>

        <article className=' flex flex-col justify-between items-center h-100% gap-2' key={id}>
            <img src={productImage} alt="image"  className=' w-[200px] h-[180px] object-contain'/>
            <h3 className=' font-normal '>Product Name : {productName}</h3>
            <p>Price : {price} $</p>
            <button className=' bg-black py-2 px-4 rounded-lg text-white  hover:bg-white hover:text-black  transition-colors border-2'
            onClick={() => AddtoCart(id) }
            >
              add to cart {items > 0 && <>{items}</>}
            </button>
        </article>
    </div>
  )
}

export default Product