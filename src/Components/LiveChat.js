import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/chatSlice';
import { generateRandomMessages, generateRandomname } from '../Utils/helper';
import { IoIosSend } from 'react-icons/io';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    // API POLLING
    const intervalId = setInterval(() => {
      dispatch({
        type: addMessage.type,
        payload: {
          name: generateRandomname(),
          message: generateRandomMessages(20),
        },
      });
    }, 1500);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: addMessage.type,
      payload: {
        name: "Aiswarya",
        message: liveMessage,
      },
    });
    setLiveMessage("");
  };

  return (
    <>
      <div className='w-3/4 h-[500px] mx-20 border-slate-700 rounded- rounded-xl border flex flex-col-reverse bg-gray-100 overflow-y-hidden overflow-y-scroll'>
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className='flex w-4/5 mx-10 rounded-b-full border-blue-100 h-16'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          value={liveMessage}
          placeholder="What's your thought..."
          onChange={(e) => setLiveMessage(e.target.value)}
          className='flex w-4/5 ml-12 border mt-4 border-gray-500 rounded-full'
        />
        <button type='submit' className='cursor-pointer mx-1'>
          <IoIosSend className='text-4xl' />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
