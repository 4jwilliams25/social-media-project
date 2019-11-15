import React from "react";
import { Card, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addMessage } from "../../store/conversations/actions";
import { connect } from "react-redux";

const loggedInUser = JSON.parse(localStorage.loggedInUser);

class NewConvForm extends React.Component {
  state = {
    sender_id: loggedInUser.id,
    recipient_id: 0,
    body: ""
  };

  handleChange = (name, e) => {
    this.setState({
      ...this.state,
      [name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let recipId = this.props.users.filter(
      user => user.name === this.state.recipient_id
    )[0].id;
    this.setState(
      {
        ...this.state,
        recipient_id: recipId
      },
      () => this.props.addMessage(this.state)
    );
  };

  render() {
    const friendList =
      loggedInUser.id && this.props.friendRequests && this.props.users
        ? this.props.friendRequests
            .filter(
              req =>
                req.accepted === true &&
                (req.requestorId === loggedInUser.id ||
                  req.requesteeId === loggedInUser.id)
            )
            .map(req =>
              req.requestorId === loggedInUser.id
                ? req.requesteeId
                : req.requestorId
            )
            .map(id => {
              for (let i = 0; i < this.props.users.length; i++) {
                if (id === this.props.users[i].id) {
                  return this.props.users[i];
                }
              }
            })
        : [];

    const friendOptions = friendList.map((friend, i) => (
      <option key={i} id={friend.id}>
        {friend.name}
      </option>
    ));

    return (
      <div>
        <Card className="p-3">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="recipient">
                Who do you <i>think</i> wants to talk to you:
              </Label>
              <Input
                type="select"
                name="recipient"
                id="recipient"
                onChange={e => this.handleChange("recipient_id", e)}
                value={this.state.recipient_id}
              >
                <option></option>
                {friendOptions}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="message">Text Area</Label>
              <Input
                type="textarea"
                name="firstMessage"
                id="examfirstMessagepleText"
                onChange={e => this.handleChange("body", e)}
                value={this.state.body}
              />
            </FormGroup>
            <Button disabled={!this.state.recipient_id || !this.state.body}>
              Start Bugging This Person
            </Button>
          </Form>
        </Card>
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
)(NewConvForm);
