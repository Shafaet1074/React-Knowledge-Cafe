import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";


const Blog = ({blog,handleBookmarks,handleMarkAsRead}) => {
  // console.log(blog.cover);
  const {title,cover,reading_time,author,author_img,posted_date,hashtags}= blog;
  return (
    <div className='mb-20 space-y-4 '>
          
      <div>
      <img   className='w-full'   src={cover} alt=""  />
      </div>

      <div className='flex justify-between mb-6'>
        <div className='flex gap-2'>
          <img  className='w-16 h-16 border-0 rounded-full'   src={author_img} alt="" />
          <div className='ml-3'>
            <h3 className='text-2xl'>{author}</h3>
            <h3 className='text-2xl'>{posted_date}</h3>
          </div>
          
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={()=>handleBookmarks(blog)} className='ml-2 text-2xl text-red-600'><BsBookmarks></BsBookmarks></button>
        </div>
      </div>
      <h2 className='text-4xl font-bold '>{title}</h2>
      <p className='mb-8'>
        {
          hashtags.map((hash, idx) => <span key={idx}><a href="">{" "} {" "} {hash}</a></span>)
        }
      </p>
     <button
     onClick={()=>handleMarkAsRead(reading_time)} 
     className='text-purple-800 font-bold underline '
     >Mark As Read</button>
    </div>
  );
};

Blog.propTypes ={
  blog:PropTypes.object.isRequired,
  handleBookmarks:PropTypes.object.isRequired,
  handleMarkAsRead:PropTypes.object.isRequired
}


export default Blog;