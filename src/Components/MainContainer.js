import React from 'react'
import Buttonlist from './Buttonlist'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='col-span-10'>
        <Buttonlist/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer;