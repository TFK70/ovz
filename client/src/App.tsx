import React from "react";
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { ChatLogin } from "./components/ChatLogin/ChatLogin";
import { Chat } from "./components/Chat/Chat";
import { Details } from "./components/Details/Details";
import { Feedback } from "./components/Feedback/Feedback";
import { ShowFeedbacks } from "./components/ShowFeedbacks/ShowFeedbacks";
import { Handler404 } from "./components/Handler404/Handler404";
import { StudentsControl } from "./components/StudentsControl/StudentsControl";

function App() {
  return (
      <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" exact component={Details} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/chat" exact component={ChatLogin} />
        <Route path="/showfb" exact component={ShowFeedbacks} />
        <Route path="/hGdjjrHskrWx" exact component={Chat} />
        <Route path="/scontrol" exact component={StudentsControl} />
        <Route exact component={Handler404} />
        </Switch>
      </Router>
  );
}

export default App;
