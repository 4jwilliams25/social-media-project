import React from "react";
import { Input, Button, Form } from "reactstrap";
import { addMessage } from "../../store/conversations/actions";
import { connect } from "react-redux";

const loggedInUser = JSON.parse(localStorage.loggedInUser);

class NewCMForm extends React.Component {
  state = {
    sender_id: loggedInUser.id,
    recipient_id: this.props.recipient,
    body: ""
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      body: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addMessage(this.state);
  };

  render() {
    return (
      <div className="mt-2">
        <Form onSubmit={this.handleSubmit}>
          <Input
            className="m-1"
            type="textarea"
            name="newMessage"
            id="newMessage"
            onChange={this.handleChange}
            value={this.state.body}
          />
          <Button disabled={!this.state.body} color="primary">
            Add your two cents...
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friendRequests: state.friendRequests.friendRequests,
    users: state.users.userList
  };
};

export default connect(
  mapStateToProps,
  { addMessage }
)(NewCMForm);
