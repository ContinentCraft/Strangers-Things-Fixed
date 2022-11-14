import React, { useEffect, useState } from "react";
import { Navbar, Posts, Register, Login, WelcomeScreen, SeeDetails, SinglePost, SinglePostView, AddPost} from './';
import { BrowserRouter as Router,
Route, Routes, useParams, Switch, Link} from "react-router-dom";
import { getUrl, getUserData } from "../API-folder";


const Main = () => {
  const [username, setUsername] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    async function fetchUser(){
      if(token){
        const userData = await getUserData(token)
        setUsername(userData.data.username)
      }
    }
    fetchUser()
  }, [])

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getUrl(localStorage.getItem('token'))
      setPosts(allPosts);
    }
    fetchPosts();
  }, []);
  
  //details button clicked use navigate is called with post id. 
  //when use navigate is called with the post id sending it to :userId route
  //the id is stored in the url bar and can be pulled down using useParams


// function filterPosts (userId){
//   posts.filter((post)=>{
//   return (post._id == userId)
//   })
// }

//filter through the array to 
//if the user id is equal to the selected user id, we need to map over each id to find the unique one and return it in order to see its details.
//singlePost property^^^

  return (
    <Router>
      <Navbar username={username}/>
      <Routes>
        <Route path="/" element={
          <div id="main">
            <Posts posts={posts}/>
          </div>
        }></Route>
        <Route path="/register" element={
          <div id="main">
            <Register />
          </div>
        }></Route>

        <Route path="/login" element={
          <div id="main">
            <Login />
          </div>
        }></Route>

        <Route path="/welcome" element={
          <div id="main">
            <WelcomeScreen />
            <Posts posts={posts}/>
          </div>
        }></Route>
        <Route path='/:userId' element={
          <div id="main">
            <SinglePostView posts={posts}/>
            <SeeDetails/>
          </div>
        }></Route>
        <Route path='/welcome/:userId' element={
          <div id="main">
            <SinglePostView posts={posts}/>
            <SeeDetails/>
          </div>
        }></Route>
        <Route path='/addPost' element={
          <div id="main">
            <AddPost />
          </div>
        }></Route>
      </Routes>
    </Router>
  );
};

export default Main;
