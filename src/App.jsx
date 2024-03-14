
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
   
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTimes,setReadingTimes]=useState(0);

  const handleMarkAsRead = time =>{
    console.log('mark as read:',time);
    setReadingTimes(readingTimes+time);
  }


  const handleBookmarks = blog=>{

    const newBookMArks=[...bookmarks,blog];
    setBookmarks(newBookMArks)

  }
  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto md:gap-10'>
      <Blogs 
      handleBookmarks={handleBookmarks}
      handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks}
      readingTimes={readingTimes}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
