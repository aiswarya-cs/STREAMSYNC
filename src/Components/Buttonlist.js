import React, { useState } from 'react'
import Button from './Button'


const Buttonlist = () => {
const list=["All","Music","Live","Mixes","Game Shows","Recently Uploaded","Watched","New to you","Movies","New Films","Today"]
  return (
    <div className='flex'>
      {list.map((i)=>{
        return(
          <Button i={i}/>
        )
      })}
    </div>
  )
}

export default Buttonlist