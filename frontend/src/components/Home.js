import React from 'react'
import Feed from './Feed.js'
import LeftSidebar from './LeftSidebar.js'
import RightSidebar from './RightSidebar.js'
const Home = () => {
  return (
    <div className=' flex justify-between w-[80%] mx-auto'>
      <LeftSidebar/>    
      <Feed/>
      <RightSidebar/>  
    </div>


  )
}

export default Home