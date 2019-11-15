import React from "react";
import { Row, Col } from "reactstrap";
import Moment from "react-moment";
import Comments from "../dashboard/comments/Comments";
import { Link } from "react-router-dom";

const UserStatus = props => {
  const comments =
    props.comments && props.status.id
      ? props.comments.filter(comment => comment.status_id === props.status.id)
      : [];

  return (
    <Row className="m-2">
      <Col xs="2">
        <img alt="profilePic" src={props.user.photo_url} />
      </Col>
      <Col xs="7">
        <Link to={`/UserProfile/${props.user.id}`}>
          <h6>{props.user.name}</h6>
        </Link>
        <p>{props.status.content}</p>
      </Col>
      <Col xs="3">
        <Moment format="MM/DD/YYYY HH:mm">{props.status.createdAt}</Moment>
        <Comments status={props.status} comments={comments} user={props.user} />
      </Col>
    </Row>
  );
};

export default UserStatus;
