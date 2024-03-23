import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className=' mx-6 p-2 w-[60%] border border-gray-300'>
      <div>
        <CreatePost/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
      </div>
    </div>
  )
}

export default Feed