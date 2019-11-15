import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { addComment } from "../../../store/statuses/actions";

const loggedInUser = JSON.parse(localStorage.loggedInUser);

class NewCommentForm extends React.Component {
  state = {
    user_id: loggedInUser.id,
    content: ""
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state, this.props.status.id);
    this.setState({
      ...this.state,
      content: ""
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="m-2">
        <FormGroup>
          <Label for="newComment">Add a Comment</Label>
          <Input
            type="textarea"
            name="newComment"
            id="newComment"
            placeholder="Type your comment"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <Button
            disabled={!this.state.content}
            className="m-1"
            color="primary"
            onClick={this.toggle}
          >
            Add
          </Button>{" "}
        </FormGroup>
      </Form>
    );
  }
}

export default connect(
  null,
  { addComment }
)(NewCommentForm);
