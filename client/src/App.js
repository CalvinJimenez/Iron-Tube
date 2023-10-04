import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import MediaContainer from "./Components/MediaContainer";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import VideoPlayerContainer from "./Components/VideoPlayerContainer";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // console.log("!!!!!!!!!!!")
    fetch("/userInSession")
      .then((r) => r.json())
      .then((userAlreadyLoggedIn) => {
        setLoggedInUser(userAlreadyLoggedIn);
      });
  }, []);

  const [userToLogin, updateUserToLoginInfo] = useState({
    username: "",
    password: "",
  });
  // console.log("STATE OF userToLogin:", userToLogin)

  const handleOnChangeForUserToLogin = (synthE) => {
    // console.log(synthE);

    updateUserToLoginInfo({
      ...userToLogin,
      [synthE.target.name]: synthE.target.value,
    });
  };

  const handleLoginSubmit = (synthE) => {
    synthE.preventDefault();

    // console.log("wfgddggd")

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userToLogin),
    })
      .then((r) => r.json())
      .then((hopefullyAUser) => {
        // console.log(hopefullyAUser)
        setLoggedInUser(hopefullyAUser);
      });
  };

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then((r) => r.json())
      .then((deleteResponse) => {
        //// Pesimistic Rendering
        setLoggedInUser(null);
      });
  };

  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch("/videos")
      .then((r) => r.json())
      .then((d) => setVideo(d));
  }, []);

  console.log(video);

  return (
    <div>
      <Navbar
        loggedInUser={loggedInUser}
        handleLogout={handleLogout}
        handleLoginSubmit={handleLoginSubmit}
        handleOnChangeForUserToLogin={handleOnChangeForUserToLogin}
      />
      <Switch>
        <Route exact path="/">
          <MediaContainer video={video} />
        </Route>
        <Route exact path="/login">
          <Login
            loggedInUser={loggedInUser}
            handleLogout={handleLogout}
            handleLoginSubmit={handleLoginSubmit}
            handleOnChangeForUserToLogin={handleOnChangeForUserToLogin}
          />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/profile">
          {loggedInUser ? (
            <Profile loggedInUser={loggedInUser} handleLogout={handleLogout} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/videoplayer">
          <VideoPlayerContainer video={video} />
        </Route>
      </Switch>
      <div></div>
    </div>
  );
}

export default App;
