// You will add code in this file
import React, {useState}from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(0)
  // console.log(props)
  return (
    <div className="post-border">
      <PostHeader
        username={props.user.username}
        thumbnailUrl={props.user.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.user.imageUrl}
        />
      </div>
      <LikeSection likesNumber = {props.user.likes}/>
      <CommentSection
        postId={props.user.imageUrl}
        comments={props.user.comments}
      />
    </div>
  );
};

export default Post;
