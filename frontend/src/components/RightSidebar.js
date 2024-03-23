import React from 'react'
import Avatar from 'react-avatar';
import { CiSearch } from "react-icons/ci";
const RightSidebar = () => {
  return (
    <>
   <div className=' w-[20%] mt-6 ' >
    <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none '>
    <CiSearch size={"25px"} />
      <input type='text' className=' bg-transparent outline-none px-2  ' placeholder='Search'/>
    </div>
    <div className=' p-4 '>
      <h1>
        Who to Follow 
      </h1>
      <div>
          <div className=' flex items-center '>
          <div className=' p-4 m-3 w-full flex' >
                <Avatar vkontakteId="1" size="50" src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSz78MvZw3emuz2o_OimQpraOvQj29iQuaH156FFkk6Il4Zm0u6yGdwPKFm7Ym1ZPQQcWeg' round={true} />
                </div>
                <h1 className=' font-bold px-1'>
                Goku
                </h1>
                <h1 className='text-sm text-gray-400'>
                   @realSayainWarrior
                </h1>
          <button className=' px-4 py-1 bg-black text-white rounded-2xl'>Profiles</button>
          </div>
          <div className=' flex items-center '>
          <div className=' p-4 m-3 w-full flex' >
                <Avatar vkontakteId="1" size="50" src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSz78MvZw3emuz2o_OimQpraOvQj29iQuaH156FFkk6Il4Zm0u6yGdwPKFm7Ym1ZPQQcWeg' round={true} />
                </div>
                <h1 className=' font-bold px-1'>
                Goku
                </h1>
                <h1 className='text-sm text-gray-400'>
                   @realSayainWarrior
                </h1>
          <button className=' px-4 py-1 bg-black text-white rounded-2xl'>Profiles</button>
          </div>
          <div className=' flex items-center '>
          <div className=' p-4 m-3 w-full flex' >
                <Avatar vkontakteId="1" size="50" src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSz78MvZw3emuz2o_OimQpraOvQj29iQuaH156FFkk6Il4Zm0u6yGdwPKFm7Ym1ZPQQcWeg' round={true} />
                </div>
                <h1 className=' font-bold px-1'>
                Goku
                </h1>
                <h1 className='text-sm text-gray-400'>
                   @realSayainWarrior
                </h1>
          <button className=' mr-4 px-4 py-1 bg-black text-white rounded-2xl'>Profiles</button>
          </div>
          
      </div>

    </div>
   </div>
    </>
  )
}

export default RightSidebar