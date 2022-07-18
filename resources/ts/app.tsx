import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import { TopPage } from './components/TopPage';
import { MyPage } from './components/MyPage';
import { PostPage } from './components/PostPage';
import EditPostForm from './components/EditPostForm';

const App = () => {
  const title: string = 'TypeScript React !!'
  return (
    <div id="main">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/posts/edit/:id/" element={<EditPostForm />} />
        </Routes>
        <ul>
          <li><Link to="/">Top</Link></li>
          <li><Link to="/mypage">Mypage</Link></li>
          <li><Link to="/posts">投稿一覧</Link></li>
        </ul>
      </BrowserRouter>
    </div >
  )
}

const container: any = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);