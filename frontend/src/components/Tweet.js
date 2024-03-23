import React from 'react'
import Avatar from 'react-avatar'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { FaComment } from "react-icons/fa";
const Tweet = () => {
  return (
    <div className='w-full border-b border-gray-300 px-2'>
        <div>
        <div className=' p-4 m-3 w-full flex items-center'  >
          <div>

                <Avatar vkontakteId="1" size="50" src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSz78MvZw3emuz2o_OimQpraOvQj29iQuaH156FFkk6Il4Zm0u6yGdwPKFm7Ym1ZPQQcWeg' round={true} />
          </div>
          <div className=' flex px-1 p2 '>
            <h1 className='px-2 font-bold'>Goku</h1>
            <p className=' text-gray-500'>@realSayainWarrior  .1m ago</p>
          </div>
       
        </div>
        <div className='px-2 mx-4  my-[-10px] w-full '>
            <p>
              Hello Devs lets connect and share our knowledge
            </p>
          </div>
          <div className='px-2 mx-4  my-[-10px] w-full '>
<div className=' flex p-8 w-full justify-between '> 
           <div className='flex items-center'>
           <AiOutlineLike size={"24px"}  />
           <p>100</p>
           </div> 
           <div  className='flex items-center'>
            <AiOutlineRetweet size={"20px"}/>
            <p>100</p>
            
           </div> 
          <div className='flex items-center'>
          <FaComment size={"20px"} />
          <p>100</p>
          </div>
           <div className='flex items-center'>
            <CiBookmark  size={"20px"} />
            <p>100</p>
           </div> 

            </div>
</div>    
        
        </div>

    </div>
  )
}

export default Tweet