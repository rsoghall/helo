import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Post from "./components/Post/Post";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // const Nav = (props) => {
  //   const { location } = props
  //   if (location.pathname.match('/auth')) {
  //     return null;
  //   }
  //   return (<Nav /> )
  // }
  // const Nav = withRouter(Nav)
  // const
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch >
          <Route exact path="/" component={Auth}/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/post/postid" component={Post} />
          <Route path="/new" component={Form}/>
          <Form />
          <Post />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
