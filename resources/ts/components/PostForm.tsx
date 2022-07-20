import React from "react"

import { FormType } from "../types/FromType";

export default function PostForm(props:
  {
    inputData: (e: React.ChangeEvent<HTMLInputElement>) => void,
    btnFnc: () => void,
    data: FormType
  }) {
  const { inputData, btnFnc, data } = props;
  return (
    <form className="postForm">
      <input type="text" name="title" onChange={inputData} value={data.title} />
      <p>{data.title}</p>
      <input type="text" name="body" onChange={inputData} value={data.body} />
      <p>{data.body}</p>
      {/* <input type="file" name="file" id="" /> */}
      <button type="button" onClick={btnFnc}>投稿する</button>
    </form>
  )
};