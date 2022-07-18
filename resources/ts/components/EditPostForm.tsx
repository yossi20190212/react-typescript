import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

import { PostType } from "../types/PostType";
import { FormType } from "../types/FromType";
import PostForm from "./PostForm";

export default function EditPostForm() {
  let params = useParams();

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

  return (
    <div>
      {`ID:${params.id}`}
      <h1>EDIT PAGE</h1>
      <PostForm inputData={inputData} createPost={createPost} formData={formData} />
    </div>
  )
};