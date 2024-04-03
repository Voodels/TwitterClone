import React from 'react'
import Avatar from 'react-avatar';
const CreatePost = () => {
  return (
    <div className=' w-[50%]'>
        {/* posting  */}
       <div className=' m-3 p-3'>
        <div className=' flex items-center justify-between'>
                <div
                className='w-full cursor-pointer hover:bg-gray-300 rounded-xl p-2 transition'
                ><h1 className='de .  font-bold text-gray-700 text-lg cursor-pointer'>For You</h1></div>
                <div
                className=' cursor-pointer hover:bg-gray-300 rounded-xl p-2 transition'
                ><h1 className=' font-bold text-gray-700 text-lg  cursor-pointer ' >Following</h1></div>
            </div>
       </div>
        <div>
            <div>
                <div>
                <Avatar vkontakteId="1" size="50" src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSz78MvZw3emuz2o_OimQpraOvQj29iQuaH156FFkk6Il4Zm0u6yGdwPKFm7Ym1ZPQQcWeg' round={true} />
                </div>
                <input/>
            </div>
        </div>
    </div>
  )
}

export default CreatePost