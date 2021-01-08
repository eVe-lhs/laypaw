import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Friends from "./components/Friends";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profile/:id">
          <Profile />
        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/friends">
          <Friends />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
