import React from "react";
import { Row, Col } from "reactstrap";
import Moment from "react-moment";
import { connect } from "react-redux";
import Comments from "./comments/Comments";
import { Link } from "react-router-dom";

class Status extends React.Component {
  render() {
    const { user, status, comments } = this.props;
    if (user) {
      return (
        <Row className="m-2">
          <Col xs="2">
            <img
              className="rounded-circle"
              style={{ height: "50px" }}
              alt="profilePic"
              src={user.photo_url}
            />
          </Col>
          <Col xs="7">
            <Link to={`/UserProfile/${user.id}`}>
              <h6>{user.name}</h6>
            </Link>
            <p>{status.content}</p>
          </Col>
          <Col xs="3">
            <Moment format="MM/DD/YYYY HH:mm">{status.createdAt}</Moment>
            <Comments status={status} comments={comments} user={user} />
          </Col>
        </Row>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state, props) {
  return {
    user: props.status.user_id
      ? state.users.userList.filter(user => user.id === props.status.user_id)[0]
      : [],
    comments: state.statuses.comments
      ? state.statuses.comments.filter(
          comment => comment.status_id === props.status.id
        )
      : []
  };
}

export default connect(mapStateToProps)(Status);
