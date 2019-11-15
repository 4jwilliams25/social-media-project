import React from "react";
import SingleCM from "./SingleCM";
import NewCMForm from "./NewCMForm";
import { connect } from "react-redux";

const SingleConv = props => {
  let messageList = props.messages
    .filter(
      message =>
        message.recipient_id === props.friendId ||
        message.sender_id === props.friendId
    )
    .map((message, i) => <SingleCM message={message} key={i} />);

  return (
    <div>
      {messageList}
      <NewCMForm recipient={props.friendId} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(SingleConv);
