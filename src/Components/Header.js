import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaBell, FaMicrophone } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import {useDispatch} from  "react-redux"
import { toggleMenu } from '../Utils/appSlice';
import { MdVideoCall } from 'react-icons/md';
import {  YOUTUBE_VIDEOS_API } from '../Utils/Constants';


function filterData(searchQuery, listSearch) {
  const filteredData = listSearch.filter((item) =>
    item.items.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return filteredData;
}
const Header = () => {
  const [searchQuery,setSearchQuery]= useState("");
  const [listSearch, setlistSearch] = useState([YOUTUBE_VIDEOS_API]);
  //API call
  useEffect(() => {
    console.log(searchQuery);
   
  }, [searchQuery]);

  

  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }; 
  return (
    <div className='grid grid-flow-col p-2 m-2'>
      <div className='flex items-center col-span-1'>
        <span className=' cursor-pointer ml-4 ' onClick={()=> toggleMenuHandler()}>
          <RxHamburgerMenu className='text-3xl'/>
        </span>
        <a href="/">
        <img
          className='h-10 mx-2'
          alt='youtube-menu'
          src='https://www.shutterstock.com/image-vector/youtube-logo-social-media-icon-260nw-2310134969.jpg'
        />
        </a>
      </div>
      <div className='col-span-10 flex items-center pl-36 '>
        <input
          className='w-2/4 border border-gray-400 p-2 rounded-l-full focus:border-blue-800'
          type='text'
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          placeholder='Search'
        />
        <button className='border border-gray-400 p-2 rounded-r-full w-16' onClick={()=>{
         const data= filterData(searchQuery, listSearch);
         setlistSearch(data)
        }}>
          <CiSearch className='text-2xl'/>
        </button>
        <div  className=' ml-4 bg-gray-100 rounded-full w-11 h-10 hover:bg-slate-200'>
        <FaMicrophone className='text-2xl ml-2.5 m-1.5' />
          </div>
      </div>
      <div className='flex col-span-1 items-center'>
      <div  className='px-1 ml-5 rounded-full w-11 h-10 hover:bg-slate-100'>
        <MdVideoCall className='text-3xl m-1'/>
        </div>
      <div  className=' px-1 rounded-full w-11 h-10 hover:bg-slate-100'>
        <FaBell className='text-2xl m-1.5'/>
        </div>
        <div  className=' px-1 rounded-full w-10 h-10'>
        <IoMdContact className='text-4xl -mt-0'/>
        </div>
      </div>
    </div>
  );
};

export default Header;
