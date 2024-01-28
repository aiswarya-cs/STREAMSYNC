import React,{ useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { Link, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';


const WatchPage = () => {
  const [searchParams]=useSearchParams()
  // console.log(searchParams.get("v"));
 const dispatch=useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [])
  
  return (
  <div className='flex flex-col'>
    <div className='m-5 shadow-lg w-3/5'>
      <iframe 
      className='rounded-lg'
      width="909"
      height="450"
      src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>
     </iframe>
</div>
  <div>
    
  </div>
    <CommentsContainer />
</div>  
  )
}

export default WatchPage;