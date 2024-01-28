import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/Constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [Videos, setVideos] = useState([])
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () =>{
    const data= await fetch(YOUTUBE_VIDEOS_API);
    const json=await data.json();
    // console.log(json.items);
    setVideos(json.items)
  }
   return (
    <div className='flex m-2 flex-wrap justify-evenly hover:overflow-y-auto h-screen'>
     {Videos.map((videos=> 
      <Link to={"/watch?v="+videos.id}>
          <VideoCard key={videos.id} info={videos}/>
      </Link>
    
      
     ))}
      </div>
  )
}

export default VideoContainer;