import './App.css'
import Navbar from "./components/navbar/Navbar.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import {useState} from "react";

function App() {

    const [bookMark, setBookMark] = useState([]);
    const[readingCount, setReadingCount] = useState(0);
    const handleBookMark = (blog) => {
        setBookMark([...bookMark, blog]);
    }

    const handleMarkAsRead = (time) => {
        setReadingCount(readingCount + time);
    }
    console.log(readingCount);
    return (
        <>
            <Navbar></Navbar>

            <div className="main-container flex text-center">
                <div className="left-container w-[70%]">


                    <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
                </div>
                <div className="right-container w-[30%] border-2">
                    <h1>Reading time:{readingCount}</h1>
                    <h1>Bookmark Count:{bookMark.length}</h1>

                    {bookMark.map((marked) => <p>{marked.title}</p>)}
                </div>
            </div>
        </>
    )
}

export default App
