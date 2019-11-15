import React from "react";
import { Label, Row, Col, Input } from "reactstrap";
import Friend from "./Friend";
import { connect } from "react-redux";
import FriendSearch from "./FriendSearch";

class Friends extends React.Component {
  state = {
    friendSearch: ""
  };

  handleChange = e => {
    this.setState({
      friendSearch: e.target.value
    });
  };

  render() {
    const loggedInUser = JSON.parse(localStorage.loggedInUser);
    const friendList =
      loggedInUser.id && this.props.friendRequests && this.props.users
        ? this.props.friendRequests
            .filter(
              req =>
                req.accepted === true &&
                (req.requestorId === loggedInUser.id ||
                  req.requesteeId === loggedInUser.id)
            )
            .map(req =>
              req.requestorId === loggedInUser.id
                ? req.requesteeId
                : req.requestorId
            )
            .map(id => {
              for (let i = 0; i < this.props.users.length; i++) {
                if (id === this.props.users[i].id) {
                  return this.props.users[i];
                }
              }
            })
            .filter(friend => friend.name.includes(this.state.friendSearch))
        : [];

    const userFriends = friendList.map((friend, i) => (
      <Friend friend={friend} key={i} />
    ));

    const notFriends = this.props.users.filter(user => {
      for (let i = 0; i < friendList.length; i++) {
        return user.id === friendList[i].id ? false : true;
      }
    });

    return (
      <div className="m-5">
        <Col>
          <Row>
            <FriendSearch notFriendsYet={notFriends} />
          </Row>
          <hr className="my-2" />
          <Row>
            <Label>{`Search ${loggedInUser.name}'s Friends:`}</Label>
            <Input
              type="text"
              name="friendSearch"
              id="friendSearch"
              onChange={this.handleChange}
              value={this.state.friendSearch}
            />
          </Row>
          <Row>
            <Label>{`Friends of ${loggedInUser.name}:`}</Label>
          </Row>
          {userFriends}
        </Col>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friendRequests: state.friendRequests.friendRequests,
    users: state.users.userList
  };
};

export default connect(mapStateToProps)(Friends);
