import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
  
  const [blogs,setblogs] =useState([]);
   useEffect( () =>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data=>console.log(data));
   },[])
  return (
    <div>
       <h3>ALif is a good boy</h3>
    </div>
  );
};

export default Blogs;