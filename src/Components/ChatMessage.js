import React from 'react'
import { IoIosContact } from 'react-icons/io';

const ChatMessage = ({name, message}) => {
  return (
    <div >
        <div className='flex p-3 items-center mx-2'>
        <IoIosContact className='text-2xl'/>
        <span className='px-3 font-bold text-red-950'>{name}</span>
        <span >{message}</span>
        </div>

    </div>
  )
}

export default ChatMessage