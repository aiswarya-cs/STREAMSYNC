import React, { useState } from 'react'
import Button from './Button'


const Buttonlist = () => {
const list=["All","Music","Live","Mixes","Game Shows","Recently Uploaded","Watched","New to you","Movies","New Films","Today","Most Popular"]
  return (
    <div className='flex'>
      {list.map((i,index)=>{
        return(
          <Button key={index} i={i}/>
        )
      })}
    </div>
  )
}

export default Buttonlist