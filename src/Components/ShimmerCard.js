import React from 'react'

const ShimmerCard = () => {
  return (
    <div className='flex flex-wrap'>
        {Array(10).fill(" ").map((e)=>{
            <div className='p-2 m-1 w-72 h-80 shadow-lg rounded-md text-left'>
            <div className='rounded-lg'  
          alt='thumbnails'/>
           <ul>
              <li className='font-bold p-2 ml-16 h-5 w-52 my-1 rounded-md bg-slate-300 '> </li>
              <li className='font-bold py-2 bg-slate-300 my-1 rounded-md h-6'>   </li>
              <li className='font-bold py-2 my-1 bg-slate-300 h-6 rounded-md'></li>
           </ul>
      
        </div>
        })}
        
    </div>
  )
}

export default ShimmerCard