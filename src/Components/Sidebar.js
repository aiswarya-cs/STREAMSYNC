import React from 'react'
import { IoMdHome, IoMdMusicalNote } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdHistory, MdOutlineSubscriptions, MdOutlineWatchLater, MdPodcasts, MdSmartDisplay, MdVideoLibrary } from "react-icons/md";
import { AiOutlineLike, AiOutlineLineChart } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import { IoFilmSharp } from "react-icons/io5";
import { FaRegNewspaper } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const Sidebar = () => {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
    if(!isMenuOpen) return null;
const Trend=[
    {name:"Trending", icons:<AiOutlineLineChart />},
    {name:"Music", icons:<IoMdMusicalNote />},
    {name:"Shopping", icons:<GiShoppingBag />},
    {name:"Film", icons:<IoFilmSharp />},
    {name:"News", icons:<FaRegNewspaper />},
    {name:"sports", icons:<FaRegNewspaper />},
    {name:"Podcast", icons:<MdPodcasts />},
]
  return (
    <div className='p-4 shadow-lg  w-56 h-screen hover:overflow-y-auto hover:cursor-pointer'>
        <ul className='p-3 leading-10 list-none '>
          <a href='/'>
          <li className='flex items-center text-black text-lg py-2         font-medium  hover:w-44 hover:h-9 hover:bg-slate-100 rounded-lg'>
               <IoMdHome className='mr-3 text-2xl'/>
                Home
          </li>
          </a>
          <li className='flex items-center text-black text-lg py-2 font-medium hover:w-44 hover:h-9 hover:bg-slate-100 rounded-lg'>
              <SiYoutubeshorts className='mr-3 text-2xl'/>
               Short
          </li>
          <li className='flex items-center text-black text-lg py-2 font-medium hover:w-44 hover:h-9 hover:bg-slate-100 rounded-lg'>
             <MdOutlineSubscriptions className='mr-3 text-2xl'/>
              Subscribe
          </li>
        </ul>
      <hr/>
      <ul className='p-2 leading-7 list-none'>
          <li className='flex items-center text-black text-lg py-2 font-medium hover:w-44 hover:h-9 hover:bg-slate-100 rounded-lg'>
            <MdVideoLibrary className='mr-3 text-2xl'/>
          Library
          </li>
          <li className='flex items-center text-black text-lg py-2 font-medium hover:w-44 hover:h-9 hover:bg-slate-100 rounded-lg'>
          <MdHistory className='mr-3 text-2xl'/> 
           History
          </li>
          <li className='flex items-center text-black text-lg py-2 font-medium hover:w-44 hover:h-9 hover:bg-slate-100 rounded-lg'>
          <MdSmartDisplay className='mr-3 text-2xl'/> 
          Your Vidoes
          </li>
          <li className='flex items-center text-black text-lg py-2 font-medium hover:w-44 hover:h-9 hover:bg-slate-100 rounded-lg'>
          <MdOutlineWatchLater className='mr-3 text-2xl' /> 
          Watch Later
          </li>
          <li className='flex items-center text-black text-lg py-2 font-medium hover:w-44 hover:h-9 hover:bg-slate-100 rounded-lg'>
             <AiOutlineLike className='mr-3 text-2xl'/>
          Liked Videos
          </li>
         
      </ul>
        <hr/>
        <h1 className='font-bold text-xl'>Subscription</h1>
        <ul className='p-2 leading-7'>
         
            <li className='flex items-center ml-7 text-black text-lg py-2 font-medium hover:w-36 hover:h-9 hover:bg-slate-100 rounded-lg '>Interview Tips</li> 
            <li className='flex items-center ml-7 text-black text-lg py-2 font-medium hover:w-36 hover:h-9 hover:bg-slate-100 rounded-lg '>FireLab Coding</li> 
            <li className='flex items-center ml-7 text-black text-lg py-2 font-medium hover:w-36 hover:h-9 hover:bg-slate-100 rounded-lg '>Code Cracks</li> 
            <li className='flex items-center ml-7 text-black text-lg py-2 font-medium hover:w-36 hover:h-9 hover:bg-slate-100 rounded-lg '>Explore world</li> 
            <li className='flex items-center ml-7 text-black text-lg py-2 font-medium hover:w-36 hover:h-9 hover:bg-slate-100 rounded-lg '>Greate Stack</li> 
              
        </ul>
        <hr/>
        <h1 className='font-bold text-xl'>Explore</h1>
        <ul className='p-2 leading-7'>
        {Trend.map((i)=>{
          return(
            <li className='flex items-center text-black text-lg py-2 font-medium hover:w-44 hover:h-9 hover:bg-slate-100 rounded-lg'>
               <span className='mr-3 text-2xl'>{i.icons}</span>
                {i.name}</li>
          )
         })}
          
         
        </ul>


    </div>
  )
}

export default Sidebar