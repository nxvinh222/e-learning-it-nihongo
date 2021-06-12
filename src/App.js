import React, { useEffect, useState } from "react";
import { auth, storeUserInfo } from "./lib/firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Nav";
import AddTest from "./components/AddTest";
import ListTest from "./components/ListTest";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setLoading(false);
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
      }
      setUser(newUser);
      console.log(newUser);
    });
  }, []);

  const logout = () => {
    auth.signOut();
  };

  return (
    <Router>
      <Nav user={user} loading={loading} logout={logout} />
      <div className="container">
        <Switch>
          <Route exact path="/add" component={AddTest} />
          <Route exact path="/home" component={ListTest}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
