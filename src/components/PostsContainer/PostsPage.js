//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import postDataArray from "../../dummy-data.js"
console.log(postDataArray)

const PostsPage = () => {
  // set up state for your data
  const [posts, setPosts] = useState(postDataArray)

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
        {posts.map((postObj) => <Post key={postObj.username} post={postObj}/>)}

    </div>
  );
};

export default PostsPage;
