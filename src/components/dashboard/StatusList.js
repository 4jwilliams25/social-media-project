import React from "react";
import { connect } from "react-redux";
import Status from "./Status";

const StatusList = props => {
  let sortedStatuses = props.statuses.statusList.sort((a, b) => {
    let dateA = new Date(a.createdAt);
    let dateB = new Date(b.createdAt);
    return dateA > dateB ? -1 : dateB > dateA ? 1 : 0;
  });

  console.log("SORT", sortedStatuses);

  if (!props.statuses) {
    return <div>Loading...</div>;
  } else {
    let statusList = props.statuses.statusList.map(status => (
      <Status status={status} key={status.id} />
    ));

    return <div>{statusList}</div>;
  }
};

function mapStateToProps(state) {
  return {
    statuses: state.statuses
  };
}

export default connect(mapStateToProps)(StatusList);
