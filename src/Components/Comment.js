import React from 'react'
import { BiDislike, BiLike } from 'react-icons/bi';
import { IoIosContact } from 'react-icons/io';

const Comment = ({data}) => {
  const {name, text , replies}=data;
  return (
    <div className='flex m-2 max-w-5xl '>
      <IoIosContact className='text-3xl text-red-900'/>
      <div className='-mt-1 px-2 mb-5'>
        <p className='text-xl font-semibold'>{name}</p>
        <p className='text-xl py-2 px-2 font-medium'>{text}</p>
        <p className='flex px-2 text-lg'>
           <BiLike className='text-2xl hover:text-neutral-900 cursor-pointer'/>
           <BiDislike className='text-2xl ml-4 hover:text-neutral-900 cursor-pointer'/>
           <span className='text-xl ml-4 -mt-1 font-semibold'>Reply</span>

        </p>
      </div>
      
    </div>
  )
}

export default Comment 