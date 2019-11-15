import React from "react";
import "./App.css";
import TopNav from "./components/layout/TopNav";
import Dashboard from "./components/dashboard/Dashboard";
import UserProfile from "./components/user/UserProfile";
import Friends from "./components/friends/Friends";
import Conversations from "./components/conversations/Conversations";
import SideNav from "./components/layout/SideNav";
import Settings from "./components/settings/Settings";
import { connect } from "react-redux";
import { getStatus } from "./store/statuses/actions";
import { getUsers } from "./store/users/actions";
import { getComments } from "./store/statuses/actions";
import { getFriendRequests } from "./store/friends/actions";
import { getMessages } from "./store/conversations/actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";

const loggedInUser = JSON.parse(localStorage.loggedInUser);

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getStatus());
    this.props.dispatch(getUsers());
    this.props.dispatch(getComments());
    this.props.dispatch(getFriendRequests());
    this.props.dispatch(getMessages(loggedInUser.id));
  }

  render() {
    return (
      <Router>
        <div>
          {!localStorage.length ? "" : <TopNav />}
          <div className="Row d-flex m-2">
            <div className="col-2">
              {!localStorage.length ? "" : <SideNav />}
            </div>
            <div className="col-10">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/UserProfile/:id" component={UserProfile} />
                <Route path="/Friends" component={Friends} />
                <Route path="/Conversations" component={Conversations} />
                <Route path="/Settings" component={Settings} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
