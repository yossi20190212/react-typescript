import React, { useMemo } from "react"
import { useLocation, matchPath } from "react-router-dom";

import { FormType } from "../types/FromType";

export default function PostForm(props:
  {
    inputData: (e: React.ChangeEvent<HTMLInputElement>) => void,
    btnFnc: () => void,
    data: FormType
  }) {

  const { inputData, btnFnc, data } = props;

  const { pathname } = useLocation();
  const match = useMemo(() => {
    return ["/posts", "/posts/edit/:id"].find((path) => !!matchPath(path, pathname));
  }, [pathname]);

  return (
    <form className="postForm">
      <input type="text" name="title" onChange={inputData} value={data.title} />
      <p>{data.title}</p>
      <input type="text" name="body" onChange={inputData} value={data.body} />
      <p>{data.body}</p>
      {/* <input type="file" name="file" id="" /> */}
      {
        match === '/posts' ?
          <button type="button" onClick={btnFnc}>投稿する</button> :
          ""
      }
      {
        match === '/posts/edit/:id' ?
          <button type="button" onClick={btnFnc}>更新する</button> :
          ""
      }
    </form>
  )
};