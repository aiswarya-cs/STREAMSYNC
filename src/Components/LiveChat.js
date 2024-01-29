import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  return (
    <div className='w-3/4 h-[500px] mx-20 border-slate-700  rounded- rounded-xl border flex  bg-gray-100'>
       <ChatMessage name="Achu" message="this is test message"/>
       </div>
  )
}

export default LiveChat