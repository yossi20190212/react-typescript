import React from "react";
import { Link } from 'react-router-dom';

export const TopHeader = () => {
  return (
    <header className="topHeader">
      <ul className="navList">
        <li className="navItem">
          <Link to="/" >新規登録</Link>
          <Link to="/" >ログイン</Link>
        </li>
      </ul>
    </header>
  )
}