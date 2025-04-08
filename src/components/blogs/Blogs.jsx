import React, {useEffect, useState} from 'react';
import Blog from "../blog/Blog.jsx";

const Blogs = () => {
const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    console.log(blogs);

    return (
        <div>
            <h1 className='text-3xl'>Total Blogs: {blogs.length}</h1>
    <div className='all-blogs grid grid-cols-2 gap-4'>
        {
            blogs.map((blog) => <Blog blog={blog}></Blog>)
        }
    </div>
        </div>
    );
};

export default Blogs;
