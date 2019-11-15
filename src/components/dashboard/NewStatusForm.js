import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addStatus } from "../../store/statuses/actions";
import { connect } from "react-redux";

const loggedInUser = JSON.parse(localStorage.loggedInUser);

class NewStatusForm extends React.Component {
  state = {
    user_id: loggedInUser.id,
    content: ""
  };

  submitSuccess = "";

  handleEvent = e => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addStatus(this.state);
    this.setState({
      content: ""
    });
    this.submitSuccess = "Your post has been updated!";
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Status:
          </Label>
          <Col sm={8}>
            <Input
              onChange={this.handleEvent}
              type="textarea"
              name="text"
              id="exampleText"
              value={this.state.content}
            />
          </Col>
          <Col>
            <Button disabled={!this.state.content} color="primary" size="sm">
              Post
            </Button>
          </Col>
        </FormGroup>
        <h6 className="text-success">{this.submitSuccess}</h6>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    statuses: state.statuses
  };
}

export default connect(
  mapStateToProps,
  { addStatus }
)(NewStatusForm);
