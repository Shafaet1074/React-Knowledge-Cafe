import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = () => {
  
  const [blogs,setblogs] =useState([]);
   useEffect( () =>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data=>setblogs(data));
   },[])
  return (
    <div className="md:w-2/3">
       <h3 className="text-4xl">Blogs:{blogs.length}</h3>
       {
        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
       }
    </div>
  );
};

export default Blogs;