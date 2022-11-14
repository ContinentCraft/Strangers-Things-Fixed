import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../API-folder";

const Login = (props) => {
  const [user, setUser] = useState();
  console.log(props);
  function getUser() {
    setUser(user);
  }

  const Navigate = useNavigate()
  function redirectSignUp(){
      let path = '/register'
      Navigate(path)
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const username = event.target[0].value;
      const password = event.target[1].value;
      const loggedInUser = await loginUser(username, password);
      const token = loggedInUser.data.token
      console.log(loggedInUser, "√")
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
    
      let path = "/welcome";
      Navigate(path);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="box">
      <form onSubmit={handleSubmit}>
        <input id="username" placeholder="Username:" type='text'></input>
        <input id="password" placeholder="Password:" type = 'password'></input>
        <button type="submit">SUBMIT</button>
        <button type="button" onClick={redirectSignUp}>Don't have an account?</button>
      </form>
    </div>
  );
};

export default Login;
