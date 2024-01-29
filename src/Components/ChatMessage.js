import React from 'react'
import { IoIosContact } from 'react-icons/io';

const ChatMessage = ({name, message}) => {
  return (
    <div >
        <div className='flex p-3 items-center mx-2'>
        <IoIosContact className='text-2xl'/>
        <span className='px-2 font-bold'>{name}</span>
        <span >{message}</span>
        </div>

    </div>
  )
}

export default ChatMessage