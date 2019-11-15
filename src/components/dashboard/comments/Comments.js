import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CommentItem from "./CommentItem";
import NewCommentForm from "./NewCommentForm";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    let listOfComments = this.props.comments.map((comment, i) => (
      <CommentItem comment={comment} key={i} />
    ));

    return (
      <div>
        <Button color="danger" size="sm" onClick={this.toggle}>
          Comments
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Comments</ModalHeader>
          <NewCommentForm
            status={this.props.status}
            comments={this.props.comments}
          />
          <ModalBody>
            {listOfComments.length > 0 ? (
              listOfComments
            ) : (
              <p>
                No one has commented on your status. It's almost like no one
                cares what you think...
              </p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Comments;
