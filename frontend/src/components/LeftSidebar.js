import React from 'react'

import { CiHome } from 'react-icons/ci'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { MdOutlineBookmarks } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";

const LeftSidebar = () => {
  return (
    <>
      <div className=' w-[20%]'>
        {/* Logo */}
        <div>
          <div className=' ml-4 my-2'> 
            <img
              width="25px"
              src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg?w=826" alt="Twitter logo" />
          </div>
        </div>
        {/* Div nav Options  */}
        <div className=' my-6'>
          <div className=' flex items-center my-3 hover:bg-gray-100 px-4 py-1 rounded-xl transition-all ease-in-out cursor-pointer' >
            <div><CiHome size={"25px"} /></div>
            <h1 className=' font-bold text-lg  mx-2 '>Home</h1>
          </div>
          <div className=' flex items-center my-3 hover:bg-gray-100 px-4 py-1 rounded-xl transition-all ease-in-out cursor-pointer' >
            <div><IoIosSearch size={"25px"} /></div>
            <h1 className=' font-bold text-lg  mx-2 '>Explore</h1>
          </div>
          <div className=' flex items-center my-3 hover:bg-gray-100 px-4 py-1 rounded-xl transition-all ease-in-out cursor-pointer' >
            <div><IoIosNotificationsOutline size={"25px"} /></div>
            <h1 className=' font-bold text-lg  mx-2 '>Notifications</h1>
          </div>
          <div className=' flex items-center my-3 hover:bg-gray-100 px-4 py-1 rounded-xl transition-all ease-in-out cursor-pointer' >
            <div><TiMessages size={"25px"} /></div>
            <h1 className=' font-bold text-lg  mx-2 '> Messages</h1>
          </div>
          <div className=' flex items-center my-3 hover:bg-gray-100 px-4 py-1 rounded-xl transition-all ease-in-out cursor-pointer' >
            <div><MdOutlineBookmarks size={"25px"} /></div>
            <h1 className=' font-bold text-lg  mx-2 '> Bookmarks</h1>
          </div>
          <div className=' flex items-center my-3 hover:bg-gray-100 px-4 py-1 rounded-xl transition-all ease-in-out cursor-pointer' >
            <div><CiCircleList size={"25px"} /></div>
            <h1 className=' font-bold text-lg  mx-2 '> Lists</h1>
          </div>
          <div className=' flex items-center my-3 hover:bg-gray-100 px-4 py-1 rounded-xl transition-all ease-in-out cursor-pointer' >
            <div><CgProfile size={"25px"} /></div>
            <h1  className=' font-bold text-lg  mx-2 '>Profile</h1>
          </div>
          <div className=' flex items-center my-3 hover:bg-gray-100 px-4 py-1 rounded-xl transition-all ease-in-out cursor-pointer' >
            <div><CiCircleMore size={"25px"} /></div>
            <h1  className=' font-bold text-lg  mx-2 '>More</h1>
          </div>
          <div className=' flex items-center my-3 hover:bg-gray-100 px-4 py-1 rounded-xl transition-all ease-in-out cursor-pointer' >
            <div><AiOutlineLogout size={"25px"} /></div>
            <h1  className=' font-bold text-lg  mx-2 '>Logout</h1>
          </div>
          <button className=' ml-5 pl-4 flex px-5  h-10 justify-center items-center my-32 w-full rounded-2xl bg-[#1D9BF0] p-0 font-bold hover:bg-blue-800 transition-all'>
            <div>
          <CiTwitter className='text-white' size={"25px"} />
            </div>
            <h1  className=' text-white font-bold text-lg  mx-2 '>POST</h1>
          </button>
        </div>
      </div>
    </>

  )
}

export default LeftSidebar