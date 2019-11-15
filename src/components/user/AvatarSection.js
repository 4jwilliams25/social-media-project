import React from "react";
import { Row, Jumbotron } from "reactstrap";
import { connect } from "react-redux";

const AvatarSection = props => {
  const user = props.users.userList[0]
    ? props.users.userList.filter(
        user => user.id == props.parentProps.match.params.id
      )[0]
    : [];

  return (
    <Row>
      <Jumbotron>
        <Row>
          <img alt="profilePic" src={user.photo_url} />
          <h1 className="display-3 ml-5">{user.name}</h1>
        </Row>
        <p className="lead">
          Chocolate re-allocation Specialist at {user.company}
        </p>
        <hr className="my-2" />
        <p>Believe in yourself, even when no one else will. -Sasquatch</p>
      </Jumbotron>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(AvatarSection);
