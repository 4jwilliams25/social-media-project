import React from "react";
import { ListGroup, Button } from "reactstrap";
import ConvItem from "./ConvItem";
import { connect } from "react-redux";

const ConvList = props => {
  const conversationList = props.friends.map((friend, i) => {
    let userMessages = props.messages.filter(
      message => message.recipient_id === friend || message.sender_id === friend
    );

    return (
      <ConvItem
        friend={friend}
        key={i}
        messages={userMessages}
        handleClick={props.handleClick}
      />
    );
  });

  const sortedConversations = conversationList.sort((a, b) => {
    let dateA = new Date(
      a.props.messages[a.props.messages.length - 1].created_at
    );
    let dateB = new Date(
      b.props.messages[b.props.messages.length - 1].created_at
    );
    return dateA > dateB ? -1 : dateB > dateA ? 1 : 0;
  });

  return (
    <ListGroup>
      <Button
        onClick={() => props.startNewConversation()}
        color="primary"
        className="m-3"
      >
        New Conversation
      </Button>
      {sortedConversations}
    </ListGroup>
  );
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(ConvList);
