import React,{ useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { Link, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import { YOUTUBE_VIDEOS_BYID } from '../Utils/Constants';
import { BiDislike, BiLike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { IoIosContact, IoMdMore } from "react-icons/io";
import LiveChat from './LiveChat';



const WatchPage = () => {
  const [searchParams]=useSearchParams()
  const [videoInfo,setVideoInfo]=useState([])
  // console.log(searchParams.get("v"));
  const videoID=searchParams.get("v")
  const videoDetails=YOUTUBE_VIDEOS_BYID+ videoID;
  

  useEffect(()=>{
    getVideoinfo()
   },[])
    const getVideoinfo=async ()=>{
          const data=await fetch(videoDetails)
          const json=await data.json()
          console.log(json)
          setVideoInfo(json.items)
    };

 const dispatch=useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [])
  
  return (
    <div className='px-5 flex flex-col'>
      <div className='flex'>
        <div>
        <iframe 
         className='rounded-lg'
          width="1050"
          height="500"
          src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1"} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>

        {videoInfo.map((items)=>{
      return(
      <>
        <div className="m-1 " key={items.id}>
          <h1 className='font-extrabold text-2xl flex-wrap px-5 max-w-5xl'>{items?.snippet?.title}</h1>
          <div className='flex'>
            <div className='flex flex-wrap ml-20 my-4 '>
               <ul className='flex flex-wrap'>
                  <li className='w-12 h-12 border rounded-full -ml-12'>
                  <IoIosContact className='w-12 h-12'/>
                  </li>
                  <li className="font-bold text-gray-800 ml-2  ">
                    <h1 className='text-xl'> {items?.snippet?.channelTitle} <br/>
                    <span className='text-sm font-normal text-gray-500 '>991K Subscribers</span></h1> 
                        </li>
                    <li >
                        <button className='ml-4 w-40 h-12 border rounded-full text-center bg-neutral-800 hover:bg-gray-700 text-white text-xl cursor-pointer p-2'>Subscribe</button>
                    </li>

                    <li>
                      <button className='flex ml-16 w-44 h-12 border rounded-full bg-neutral-800  text-white text-xl cursor-pointer text-center p-2'  >
                      <BiLike className='m-0.5 mx-3 text-3xl hover:bg-gray-700'/> {items?.statistics?.likeCount.slice(0, 2)}K |
                      <BiDislike className='m-1 mx-3 text-3xl hover:bg-gray-700'/>
                      </button>
                    </li>
                   
                    <li>     
                    <button className='flex ml-2 w-32 h-12 border rounded-full  bg-neutral-800 hover:bg-gray-700 text-white text-xl cursor-pointer p-2 px-5'>
                    <RiShareForwardLine className='text-3xl'/> Share
                    </button>
                    </li>
                    
                    <li>     
                    <button className='flex ml-2 w-44 h-12 border rounded-full  bg-neutral-800 hover:bg-gray-700 text-white text-xl cursor-pointer p-2 px-5'>
                    <HiDownload className='text-2xl mx-1'/> Download
                    </button>
                    </li>
                   
                    <li>
                     <button className="h-12 w-12 bg-neutral-800  ml-2 rounded-full  hover:bg-gray-700 text-white">
                     <IoMdMore className='text-4xl mx-1.5'/>
                      </button>
                    </li>
              </ul>
             </div>
          </div>
        </div>

        <div  className="m-4  max-w-5xl rounded-lg bg-slate-50 p-2 my-2">
                  <h5 className="font-bold text-left">
                    {items?.statistics?.viewCount} Views 
                     <span className='mx-2 text-gray-700'>{items?.snippet?.publishedAt}</span>
                     <span className='mx-2 text-xl font-bold'>{items?.snippet?.title}</span>
                    </h5>    
                  <p className='font-normal my-2 '> {items?.snippet?.description}</p>
               </div>
             <CommentsContainer/>
            </>
        )
      })}
      </div>
      <div className='w-full mb-8'>
      <LiveChat/>
    </div>
      <div>

      </div>
      </div>
    </div>
  )
}

export default WatchPage;