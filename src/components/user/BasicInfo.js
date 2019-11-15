import React from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";
import { connect } from "react-redux";

const BasicInfo = props => {
  const user = props.users.userList[0]
    ? props.users.userList.filter(
        user => user.id == props.parentProps.match.params.id
      )[0]
    : [];

  return (
    <Row>
      <Card>
        <CardBody>
          <CardTitle>Meet {user.name}:</CardTitle>
          <CardSubtitle>
            Because information security is for the weak...
          </CardSubtitle>
          <hr className="my-2" />
          <CardText>Phone: {user.phone}</CardText>
          <CardText>Email: {user.email}</CardText>
          <CardText>Company: {user.company}</CardText>
          <CardText>Address: {user.address}</CardText>
        </CardBody>
      </Card>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(BasicInfo);
