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

const ConvItem = props => {
  let lastMessage = props.messages[props.messages.length - 1];
  return (
    <div>
      <Card onClick={() => props.handleClick(props.friend)}>
        <Row>
          <Col sm={4}>
            <CardImg
              top
              width="100%"
              src={props.user.photo_url}
              alt="Card image cap"
              className="rounded-circle"
            />
          </Col>
          <Col sm={8}>
            <CardBody>
              <CardTitle>{props.user.name}</CardTitle>
              <CardText>{`${lastMessage.body.substring(0, 40)}...`}</CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    user: state.users.userList.filter(user => user.id === props.friend)[0]
  };
};

export default connect(mapStateToProps)(ConvItem);
