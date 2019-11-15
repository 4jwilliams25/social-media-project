import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

const Friend = props => {
  return (
    <div>
      <Card>
        <Row>
          <Col>
            <CardImg
              top
              width="100%"
              src={props.friend.photo_url}
              alt="Card image cap"
              className="rounded-circle"
            />
          </Col>
          <Col>
            <CardBody>
              <CardTitle>{props.friend.name}</CardTitle>
              <Button size="sm">Send a Message</Button>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Friend;
