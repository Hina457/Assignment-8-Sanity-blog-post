

import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

import Link from "next/link"
export default function Main(){
  return(
    <div> 
      <div className="bg-gray-200 text-white p-5 shadow-xl">
        <h1 className="text-3xl font-bold">SanityBlogger</h1>
        <p className="text-center text-white text-3xl font-serif ">Assignment 8</p>
        <p className="text-center text-white text-2xl font-serif">Hina Alvi</p>
    
         </div>
      <div className="w-full h-[750px] bg-center bg-slate-400">
     
      
        <h1 className="text-center text-white font-extrabold font-serif pt-[20%]  sm:text-4xl md:text-3xl lg:text-4xl ">Welcome to My Sanity Blog Posts...</h1>
        <h1 className="text-center text-white text-3xl font-extrabold font-serif mt-4">Information Technology blog posts</h1>
        <div className=" flex justify-center items-center">
       <Link href="/Card"><button className="w-[110px] h-[50px] bg-blue-800 mt-4 hover:bg-blue-600 rounded-lg text-white">Explore Blogs</button></Link>
      </div>
      </div>

      {/* footer */}
      <div className="bg-gray-200 text-white p-5 ">
          
           <div className="flex flex-col  justify-between items-center text-center ">
             <p className="text-lg mb-5 font-serif text-gray-500">
               &copy; 2025 Hina Alvi Sanity Blog Project. All rights reserved.
             </p>
             <div className="flex  gap-4 text-2xl text-gray-500 ">
               <FaLinkedin />
               <FaFacebookSquare />
               <FaInstagram />
               <FaSkype />
               <FaTwitter />
             </div>
           </div>
         </div>
    </div>
  )
}





