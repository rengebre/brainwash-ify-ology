import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from './axios-instance';

import './App.scss';
import NavBar from './components/Nav/NavBar';
import PostIndex from './components/PostIndex/PostIndex';
import PostForm from './components/PostForm/PostForm';
import PostShow from './components/PostShow/PostShow';
import ProfilePage from './components/ProfilePage/ProfilePage';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const { user } = useAuth0();

  const [dbUser, setDbUser] = useState({});
  const [interests, setInterests] = useState([]);
  const [posts, setPosts] = useState({
    posts: [],
    users: [],
    likes: {},
    thumbnails: {},
    likeCounts: []
  })

  // collect our array of set interests
  useEffect(() => {
    const getInterests = function() {
      axios
        .get('interests')
        .then(res => { setInterests(() => res.data) })
        .catch(e => console.error(e))
    }
    getInterests();
  }, []);

  // Pulling info from Auth0, create or retrieve a user from our DB whose social_id matches the user.sub key from the global oAuth user.
  useEffect(() => {
    if (user) {
      const { email, name, picture, username, nickname } = user;
      const params = {
        email,
        name,
        social_img: picture,
        username: username || nickname,
        social_id: user.sub
      }

      axios
        .post('users', params)
        .then(res => {
          setDbUser(() => {
            return {
              ...res.data.user,
              avatar: res.data.avatar
            }
          })
        })
    }
  }, [user])
  
  return (
    <div className="App">
      <Router>
      <NavBar dbUser={dbUser}/>
        <Routes>
          <Route path={"/*"} element={<PostIndex interests={interests} posts={posts} setPosts={setPosts} dbUser={dbUser} />}/>
          <Route path={"/posts/new"} element={<PostForm dbUser={dbUser} interests={interests}/>}/>
          <Route path={"/posts/:id"} element={<PostShow dbUser={dbUser} />}/>
          <Route path={"/profile/:id"} element={<ProfilePage interests={interests} dbUser={dbUser} setDbUser={setDbUser} posts={posts} setPosts={setPosts}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;