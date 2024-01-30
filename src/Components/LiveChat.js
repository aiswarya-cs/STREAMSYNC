import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/chatSlice';
import { generateRandomMessages, generateRandomname } from '../Utils/helper';
import { IoIosSend } from 'react-icons/io';

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState ("")
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    // API POLLING
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomname(),
          message: generateRandomMessages(20),
        })
      );
      setLiveMessage("");
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div className='w-3/4 h-[500px] mx-20 border-slate-700 rounded- rounded-xl border flex flex-col-reverse bg-gray-100 overflow-y-hidden overflow-y-scroll'>
      <div>
      {ChatMessages.map((c) => (
        <ChatMessage name={c.name} message={c.message} />
      ))}
      </div>
      
    </div>
     <form 
        className=' flex w-4/5 mx-10  rounded-b-full border-blue-100 h-16'
        onSubmit={(e)=>{
          e.preventDefault();
          /*console.log(LiveMessage);*/
          dispatch(addMessage({
            name:"Aiswarya",
            message:LiveMessage,
          }))
        }}
        >
     
       <input type='text' 
              value={LiveMessage}
              placeholder='whats your thought..'
              onChange={(e)=>{setLiveMessage(e.target.value);
              }}
              className='flex w-4/5 ml-12 border mt-4 border-gray-500  rounded-full ' 
      />

       <button className='cursor-pointer mx-1'>
        <IoIosSend className='text-4xl'/>
        </button>
     </form> 
    </>
  );
};

export default LiveChat;
