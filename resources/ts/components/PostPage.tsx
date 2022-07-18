import React, { useState, useEffect } from "react";
import axios from 'axios';

import { PostList } from "./PostList";
import PostForm from "./PostForm";

import { PostType } from "../types/PostType";
import { FormType } from "../types/FromType";


export const PostPage: () => JSX.Element = () => {

  const [posts, setPosts] = useState<PostType[]>([]);
  const [formData, setFormData] = useState<FormType>({
    title: '',
    body: ''
  })

  function createPost() {
    if (formData.title === "" || formData.body === "") {
      alert('入力してください')
      return false;
    }
    axios
      .post('/api/posts/create', {
        title: formData.title,
        body: formData.body
      })
      .then(res => {
        setPosts(res.data)
        setFormData({
          title: "",
          body: ""
        });
      })
  }

  useEffect(() => {
    getPostData();
  }, [])

  function getPostData() {
    axios
      .get('/api/posts')
      .then(res => {
        setPosts(res.data);
      })
  }

  function inputData(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);

    const key = e.target.name;
    const value = e.target.value;
    if (key === "title" || key === "body") {
      formData[key] = value;
    }
    const data = Object.assign({}, formData);
    setFormData(data);
  }

  function postDelete(id: number | null) {
    axios
      .post('/api/posts/destroy', {
        id: id
      })
      .then(res => {
        setPosts(res.data);
      })
  }

  return (
    <React.Fragment>
      <h1>PostPage</h1>
      <PostList posts={posts} postDelete={postDelete} />
      <PostForm inputData={inputData} createPost={createPost} formData={formData} />
    </React.Fragment>
  )
}