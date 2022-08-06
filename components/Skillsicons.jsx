import React,
 {useState} from 'react';
import Image from 'next/image';

const Skillsicons = () => {

  const imageArray = [
   {path:'html.png',name:"HTML"},
   {path:'css.png',name:"CSS"},
   {path:'github1.png',name:"Github"},
   {path:'javascript.png',name:"Javascript"},
   {path:'nextjs.png',name:"NextJS"},
   {path:'node.png',name:"Node"},
   {path:'react.png',name:"React"},
   {path:'tailwind.png',name:"Tailwind"},
 ];

  const iconDisplay = imageArray.map(image => {
    return (
      <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className='m-auto'>
          <Image src={`/../public/assets/skills/${image.path}`} width='64px' height='64px' alt='/' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>{image.name}</h3>
          </div>
        </div>
        </div>
    )
  })


  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
    {iconDisplay}
    </div>

  )
}

export default Skillsicons;