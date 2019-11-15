import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";

class CommentItem extends React.Component {
  render() {
    const user =
      this.props.users && this.props.comment.user_id
        ? this.props.users.filter(
            user => user.id === this.props.comment.user_id
          )[0]
        : [];

    return (
      <div>
        <Card>
          <Col>
            <Row>
              <Col>
                <CardImg
                  top
                  style={{ height: "100px", width: "100px" }}
                  src={`${user.photo_url}`}
                  className="rounded-circle"
                />
              </Col>
              <Col>
                <CardTitle>{user.name}</CardTitle>
              </Col>
            </Row>
            <Row>
              <CardBody>
                <CardText>{this.props.comment.content}</CardText>
              </CardBody>
            </Row>
          </Col>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    status: state.statuses.statusList.filter(
      status => status.id === props.comment.status_id
    )[0],
    users: state.users.userList
  };
}

export default connect(mapStateToProps)(CommentItem);
