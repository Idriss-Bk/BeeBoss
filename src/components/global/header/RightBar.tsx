import React from 'react'
import { MdCardMembership } from "react-icons/md";

const RightBar = () => {
  return (
    <div className="hidden md:flex md:items-center md:space-x-3">
    <button className="flex justify-center items-center gap-2 px-5 py-2 bg-white font-poppins text-sm text-black rounded-full hover:border-1  border-black hover:bg-white hover:text-black transition-all duration-200 ">
    <MdCardMembership />
    Become a Member
    </button>
  </div>
  )
}

export default RightBar