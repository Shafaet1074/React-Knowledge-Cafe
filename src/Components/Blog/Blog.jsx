import PropTypes from 'prop-types';


const Blog = ({blog}) => {
  console.log(blog.cover);
  const {title,cover,reading_time,author,author_img,posted_date,hashtags}= blog;
  return (
    <div>
          
      <div>
      <img   className='w-full'   src={cover} alt=""  />
      </div>

      <div className='flex justify-between mt-2 mb-6'>
        <div className='flex gap-2'>
          <img  className='w-16 h-16 border-0 rounded-full'   src={author_img} alt="" />
          <div className='ml-3'>
            <h3 className='text-2xl'>{author}</h3>
            <h3 className='text-2xl'>{posted_date}</h3>
          </div>
          
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className='text-4xl font-bold '>{title}</h2>
      <p className='mb-8'>
        {
          hashtags.map((hash, idx) => <span key={idx}><a href="">3{hash}</a></span>)
        }
      </p>
     
    </div>
  );
};

Blog.propTypes ={
  blog:PropTypes.object.isRequired
}


export default Blog;