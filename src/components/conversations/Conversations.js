import React from "react";
import { Col, Row } from "reactstrap";
import ConvList from "./ConvList";
import SingleConv from "./SingleConv";
import NewConvForm from "./NewConvForm";
import { connect } from "react-redux";

class Conversations extends React.Component {
  state = {
    viewedUser: ""
  };

  handleClick = id => {
    this.setState({
      viewedUser: id
    });
  };

  startNewConversation = () => {
    this.setState({
      viewedUser: "newConvo"
    });
  };

  conversationView = () => {
    if (this.state.viewedUser === "newConvo") {
      return <NewConvForm />;
    } else if (typeof this.state.viewedUser === "number") {
      return <SingleConv friendId={this.state.viewedUser} />;
    } else {
      return [];
    }
  };

  render() {
    const loggedInUser = JSON.parse(localStorage.loggedInUser);

    const friendList = this.props.messages.reduce((acc, msg) => {
      if (!acc.includes(msg.recipient_id) && !acc.includes(msg.sender_id)) {
        msg.recipient_id === loggedInUser.id
          ? acc.push(msg.sender_id)
          : acc.push(msg.recipient_id);
      }
      return acc;
    }, []);

    return (
      <div className="d-flex">
        <Row>
          <Col sm={6}>
            <ConvList
              friends={friendList}
              handleClick={this.handleClick}
              startNewConversation={this.startNewConversation}
            />
          </Col>
          <Col sm={6}>{this.conversationView()}</Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Conversations);
