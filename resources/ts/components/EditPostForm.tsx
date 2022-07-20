import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import { FormType } from "../types/FromType";
import PostForm from "./PostForm";

export default function EditPostForm() {
  let params = useParams();
  let nav = useNavigate();

  const [editData, setEditData] = useState<FormType>({ title: '', body: '' });

  useEffect(() => {
    getEditData();
  }, [])

  function getEditData() {
    axios
      .post('/api/posts/edit', {
        id: params.id
      })
      .then(res => {
        setEditData(res.data);
      })
  }

  function upDataPost() {
    axios
      .post('/api/posts/update', {
        id: params.id,
        title: editData.title,
        body: editData.body
      })
      .then(res => {
        setEditData(res.data);
        nav('/posts')
      })
  }

  function inputData(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.name;
    const value = e.target.value;
    if (key === "title" || key === "body") {
      editData[key] = value;
    }
    const data = Object.assign({}, editData);
    setEditData(data);
  }

  return (
    <div>
      {`ID:${params.id}`}
      <h1>EDIT PAGE</h1>
      <PostForm inputData={inputData} btnFnc={upDataPost} data={editData} />
    </div>
  )
};