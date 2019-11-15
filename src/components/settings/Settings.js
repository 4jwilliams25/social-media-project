import React from "react";
import {
  Form,
  Card,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Button
} from "reactstrap";
import { connect } from "react-redux";

class Settings extends React.Component {
  render() {
    const loggedInUser = JSON.parse(localStorage.loggedInUser);
    return (
      <Form>
        <Card>
          <CardBody>
            <CardTitle>Avatar Info</CardTitle>
            <FormGroup>
              <Col sm={10}>
                <Label>Update name:</Label>
                <Input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder={loggedInUser.name}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={10}>
                <Label>Update your profile photo:</Label>
                <Input type="file" name="profilePhoto" id="profilePhoto" />
                <FormText color="muted">
                  Keep it clean. Or don't. We aren't your mother.
                </FormText>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={10}>
                <Label>Update your banner photo:</Label>
                <Input type="file" name="bannerPhoto" id="bannerPhoto" />
                <FormText color="muted">
                  But also remember the children...
                </FormText>
              </Col>
            </FormGroup>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Basic Info</CardTitle>
            <FormGroup>
              <Col sm={10}>
                <Label>Phone:</Label>
                <Input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder={loggedInUser.phone}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={10}>
                <Label>Email:</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={loggedInUser.email}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={10}>
                <Label>Company:</Label>
                <Input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder={loggedInUser.company}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={10}>
                <Label>Address:</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder={loggedInUser.address}
                />
              </Col>
              <div className="d-flex justify-content-center m-3">
                <Button>Submit</Button>
              </div>
            </FormGroup>
          </CardBody>
        </Card>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.users.loggedInUser
  };
};

export default connect(mapStateToProps)(Settings);
