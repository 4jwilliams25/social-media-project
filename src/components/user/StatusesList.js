import React from "react";
import { Row } from "reactstrap";
import { connect } from "react-redux";
import UserStatus from "./UserStatus";

const StatusesList = props => {
  const user = props.users.userList[0]
    ? props.users.userList.filter(
        user => user.id == props.parentProps.match.params.id
      )[0]
    : [];

  const userStatuses = props.statuses.filter(
    status => status.user_id === user.id
  );

  const statusList = userStatuses.map((status, i) => {
    return (
      <UserStatus
        status={status}
        comments={props.comments}
        key={i}
        user={user}
      />
    );
  });

  return (
    <Row>
      <div>{statusList}</div>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    statuses: state.statuses.statusList,
    comments: state.statuses.comments
  };
};

export default connect(mapStateToProps)(StatusesList);
