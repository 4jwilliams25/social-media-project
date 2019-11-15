import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class FriendSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      friendSearch: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      friendSearch: e.target.value
    });
  };

  render() {
    const notFriends = this.props.notFriendsYet[0]
      ? this.props.notFriendsYet.filter(user => {
          return user.name
            .toLowerCase()
            .includes(this.state.friendSearch.toLowerCase());
        })
      : "";

    const personSearch = () => {
      if (!notFriends.length) {
        return (
          <div>
            <p>
              It appears that whoever you are looking for is not cool enough to
              use our site. Maybe send them an email, so they have the
              opportunity to be as cool as you are...
            </p>
            <Button size="sm">Send Email Invite</Button>
          </div>
        );
      } else {
        return notFriends.map((user, i) => {
          return (
            <Row key={i} className="m-2">
              <Col xs="2">
                <img
                  style={{ height: "50px" }}
                  alt="profilePic"
                  src={user.photo_url}
                  className="rounded-circle"
                />
              </Col>
              <Col xs="7">
                <Link to={`/UserProfile/${user.id}`}>
                  <h6 className="text-center">{user.name}</h6>
                </Link>
              </Col>
              <Col xs="3">
                <Button size="sm">Send a Friend Request</Button>
              </Col>
            </Row>
          );
        });
      }
    };

    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Find Some Freaking Friends
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Friend Search</ModalHeader>{" "}
          <ModalBody>
            <Input
              name="friendSearch"
              type="text"
              value={this.state.friendSearch}
              onChange={this.handleChange}
            />
            <hr className="my-2" />
            {!this.state.friendSearch ? [] : personSearch()}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.userList
  };
};

export default connect(mapStateToProps)(FriendSearch);
