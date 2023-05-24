import React from 'react'
import {Link, NavLink, Outlet} from 'react-router-dom'

import {CiShoppingCart} from 'react-icons/ci'
import UseCustomshooks from '../ContextApi/UseCustomshooks'



const Navbar = () => {


  const { NetAmounts, data, cartItems } = UseCustomshooks()


  let amount = NetAmounts(cartItems)


 console.log(amount)

  return (
    
    <>
    <header className=' bg-black text-white'>
        <div className=" py-4 px-4 container mx-auto max-w-[1140px] flex justify-between items-center">
            <h4 className='  text-[2rem]'>React</h4>

            <nav className=' flex gap-3'>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'about'}>About</NavLink>

              <Link className=' flex relative' to={'cart'}>
                <CiShoppingCart size={30} />
                <span className=' text-[16px] font-medium absolute -right-2 -top-3 p-[3px] bg-cyan-400 h-[22px] w-[22px] text-center flex justify-center items-center rounded-lg'>{amount}</span>
              </Link>
            </nav>

          
        </div>
    </header>
    
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default Navbar