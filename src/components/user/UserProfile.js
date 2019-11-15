import React from "react";
import { connect } from "react-redux";
import { Col } from "reactstrap";
import StatusesList from "./StatusesList";
import BasicInfo from "./BasicInfo";
import AvatarSection from "./AvatarSection";

class UserProfile extends React.Component {
  render() {
    return (
      <Col>
        <AvatarSection parentProps={this.props} />
        <BasicInfo parentProps={this.props} />
        <StatusesList parentProps={this.props} />
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    statuses: state.statuses.statusList,
    comments: state.statuses.comments
  };
};

export default connect(mapStateToProps)(UserProfile);
