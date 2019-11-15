import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  Container
} from "reactstrap";
import { connect } from "react-redux";
import { userLogin } from "../../store/users/actions";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(userLogin(this.state, this.props.history));
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">NotYourSpace.com</h1>
          <p className="lead">Where if you don't like it keep scrolling!</p>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="text"
                name="email"
                id="exampleEmail"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button>Login</Button>
          </Form>
        </Container>
      </Jumbotron>
    );
  }
}

export default connect()(Login);
