import React, {useState} from 'react';
import Image from 'next/image';
import Skillsicons from './Skillsicons';

const Skills = () => {


  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>

        <Skillsicons />

      </div>

    </div>
  )
}

export default Skills;