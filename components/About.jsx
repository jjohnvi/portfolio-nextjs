import React, {useState} from 'react';


const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>I am perfection</p>
          <p className='py-2 text-gray-600'>Spent way too long in Citi bank not learning much to be honest my guy. </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src='https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80' alt='' />
        </div>
      </div>
    </div>
  )
}

export default About;