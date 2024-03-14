import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
// import PropTypes from 'prop-type';



const Blogs = ({handleBookmarks,handleMarkAsRead}) => {
  
  const [blogs,setblogs] =useState([]);
   useEffect( () =>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data=>setblogs(data));
   },[])
  return (
    <div className="md:w-2/3">
      
       {
        blogs.map(blog => <Blog 
          key={blog.id} 
          blog={blog}
          handleBookmarks={handleBookmarks}
          handleMarkAsRead={handleMarkAsRead}></Blog>)
       }
    </div>
  );
};
// Blogs.propTypes ={
//   handleBookmarks:PropTypes.func,
//   handleMarkAsRead:PropTypes.func
// }
export default Blogs;