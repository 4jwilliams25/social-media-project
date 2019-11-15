import React from "react";
import { Card, Col, Row, CardImg, CardBody, CardText } from "reactstrap";
import { connect } from "react-redux";

const SingleCM = props => {
  return (
    <div>
      <Card>
        <Row>
          <Col sm={4}>
            <CardImg
              top
              width="100%"
              src={props.sender.photo_url}
              alt="Card image cap"
              className="rounded-circle"
            />
          </Col>
          <Col sm={8}>
            <CardBody>
              <CardText>{props.message.body}</CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    sender: state.users.userList.filter(
      user => user.id === props.message.sender_id
    )[0]
  };
};

export default connect(mapStateToProps)(SingleCM);
