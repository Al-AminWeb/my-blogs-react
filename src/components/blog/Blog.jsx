import React from 'react';
import { FaBookmark } from "react-icons/fa6";


const Blog = ({blog}) => {

    return (
        <div className='m-2'>
        {/*<h1>{blog.title}</h1>*/}
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={blog.cover}
                    alt="blog cover"/>
            </figure>
            <div className="card-body">
                <div className="author flex justify-around items-center">
                    <img className='w-6' src={blog.author_img} alt=""/>
                    <h3>{blog.author}</h3>
                    <FaBookmark />

                </div>
                <h2 className="card-title">{blog.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="flex border-3">
                    {
                        blog.hashtags.map((has) => <p>{has}</p>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Mark as read</button>
                </div>
            </div>
        </div>
    </div>);
};

export default Blog;
