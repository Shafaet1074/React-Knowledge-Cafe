import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTimes}) => {
  console.log(bookmarks);
  return (
     
        
       <div className="md:w-1/3 bg-gray-300 ml-4 ">
          <div>
          <h3 className='text-4xl border space-y-10'>Reading Times:{readingTimes}</h3>
        </div>
          <h2 className="text-3xl text-center bg-gray-300">Bookmarks Blogs:{bookmarks.length}</h2>
         {
           bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
         }
       </div>
    
    
  );
};
Bookmarks.propTypes ={
  bookmarks:PropTypes.array,
  readingTimes:PropTypes.number
}
export default Bookmarks;