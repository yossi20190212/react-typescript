import React from "react"

import { FormType } from "../types/FromType";

export default function PostForm(props:
  {
    inputData: (e: React.ChangeEvent<HTMLInputElement>) => void,
    createPost: () => void,
    formData: FormType
  }) {
  const { inputData, createPost, formData } = props;
  return (
    <form className="postForm">
      <input type="text" name="title" onChange={inputData} value={formData.title} />
      <p>{formData.title}</p>
      <input type="text" name="body" onChange={inputData} value={formData.body} />
      <p>{formData.body}</p>
      <input type="file" name="file" id="" />
      <button type="button" onClick={createPost}>投稿する</button>
    </form>
  )
};