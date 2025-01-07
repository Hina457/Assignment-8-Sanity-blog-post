


import { client } from "@/sanity/lib/client"
import Image from "next/image"


const getData = async ()=>{
    const fetchData= await client.fetch(`*[_type == "Blog-card"]
{
  heading,description, 
    "imageUrl": image.asset->url
}`)
    return fetchData

    };
    interface BlogCard{
      heading:string,
      description:string,
      imageUrl:string,
    }


    const Card = async() => {
 
   const blogData = await getData()
         console.log(blogData)

      return (
        <div>
          <h1 className="text-center text-6xl mb-3 font-extrabold font-serif">Our Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
        {blogData.map((item:BlogCard,i:number)=>{
          
            return(
  
                 <div key={i} className="gap-6 border shadow-lg hover:scale-105 ">
              <Image
                className="rounded-t-lg h-[200px]"
                src={item.imageUrl}
                alt="blog image"
                width={400}
                height={400}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.heading}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
                </p>
                <button className="w-[100px] h-[50px] bg-slate-600 hover:bg-gray-500 rounded-md text-white">View</button>
              </div>
              </div>
            
              
           
            )
        })}
      </div>
    </div>
      )
    }
    
    export default Card;


  
  
