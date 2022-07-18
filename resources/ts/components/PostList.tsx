import React from "react";
import { PostType } from "../types/PostType";
import { Link } from "react-router-dom";

export function PostList(props: {
  posts: PostType[],
  postDelete: (id: number | null) => void;
}) {
  const { posts, postDelete } = props;
  return (
    <ul className="postList">
      {
        posts.map(post => <li key={post.id} className="postItem">
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <p>{post.created_at}</p>
          <p><Link to={`/posts/edit/${post.id}`}> 編集</Link></p>
          <p><button onClick={() => postDelete(post.id)}>削除</button></p>
        </li>
        )
      }
    </ul>
  )
}