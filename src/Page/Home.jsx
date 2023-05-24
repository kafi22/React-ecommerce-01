import React from 'react'
import Product from '../Component/Product'
import UseCustomshooks from '../ContextApi/UseCustomshooks'

const Home = () => {

  const { data } = UseCustomshooks()

    const getData = data?.map(item => (
        <Product key={item.id} data={item} />
    ))
  return (

    <div className=' container mx-auto max-w-[1140px] px-4 py-6'>
        <h1 className=' text-left text-2xl font-bold mt-6'>Home</h1>


      <div className=' pt-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 justify-between items-stretch'>
        {getData}
      </div>

    </div>
  )
}

export default Home