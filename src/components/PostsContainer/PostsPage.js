//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data.js'
console.log(dummyData)

const PostsPage = () => {
  // set up state for your data
  const [users, setUsers] = useState(dummyData)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {users.map((user) =>{
        return <Post key ={user.username} user={user}/>
        
      })}
    </div>
  );
};

export default PostsPage;
