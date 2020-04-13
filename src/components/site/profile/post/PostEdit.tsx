import React from "react";
//Reactstrap
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
//Material UI
import ClearIcon from "@material-ui/icons/Clear";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton/IconButton";
import TextField from "@material-ui/core/TextField";

type Props = {
  postUpdate: any;
  updateOff: () => void;
  token: string;
  fetchPosts: () => void;
};

type State = {
  editPostUrl: string;
  editDescription: string;
};

export default class PostEdit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editPostUrl: this.props.postUpdate.postUrl,
      editDescription: this.props.postUpdate.description,
    };
  }

  handlePostUpdate = () => {
    fetch(`http://localhost:3001/post/edit/${this.props.postUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        postUrl: this.state.editPostUrl,
        description: this.state.editDescription,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then(() => {
      this.props.fetchPosts();
      this.props.updateOff();
    });
  };

  closeUpdateModal = () => {
    this.props.updateOff();
  };

  render() {
    return (
      <>
        <Modal isOpen={true}>
          <ModalHeader>
            Edit Post
            <IconButton onClick={this.closeUpdateModal}>
              <ClearIcon />
            </IconButton>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handlePostUpdate}>
              <FormGroup>
                <TextField
                  className="modal-text-field"
                  value={this.state.editPostUrl}
                  onChange={(e) =>
                    this.setState({ editPostUrl: e.target.value })
                  }
                  label="PostURL"
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  className="modal-text-field"
                  value={this.state.editDescription}
                  onChange={(e) =>
                    this.setState({ editDescription: e.target.value })
                  }
                  label="Caption"
                />
              </FormGroup>
              <IconButton type="submit">
                <CreateIcon />
              </IconButton>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
