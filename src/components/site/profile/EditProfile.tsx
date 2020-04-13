import React from "react";
//Reactstrap
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
  FormGroup,
  Button,
} from "reactstrap";
//Material UI
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton/IconButton";
import SaveIcon from "@material-ui/icons/Save";

type Props = {
  profileInfo: any;
  updateOff: () => void;
  token: string;
  fetchMyProfile: () => void;
};

type State = {
  editUsername: string;
  editAdoptionRecruiter: boolean;
  editBio: string;
  editContact: string;
  file: string;
};

export default class EditProfile extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editUsername: this.props.profileInfo.username,
      editAdoptionRecruiter: this.props.profileInfo.adoptionRecruiter,
      editBio: this.props.profileInfo.bio,
      editContact: this.props.profileInfo.contact,
      file: this.props.profileInfo.file,
    };
  }

  editProfilePhoto = () => {
    const editProfilePictureData = new FormData();
    editProfilePictureData.append("image", this.state.file);
    fetch(
      `http://localhost:3001/user/update/profile-pic/${this.props.profileInfo.username}`,
      {
        method: "PUT",
        body: editProfilePictureData,
        headers: new Headers({
          Authorization: this.props.token,
        }),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  handleProfileUpdate = (e: any) => {
    e.preventDefault();
    fetch(
      `http://localhost:3001/user/update/${this.props.profileInfo.username}`,
      {
        method: "PUT",
        body: JSON.stringify({
          username: this.state.editUsername,
          adoptionRecruiter: this.state.editAdoptionRecruiter,
          bio: this.state.editBio,
          contact: this.state.editContact,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.token,
        }),
      }
    )
      .then(() => {
        this.editProfilePhoto();
      })
      .then(() => {
        this.props.fetchMyProfile();
        this.props.updateOff();
        this.makeEditWork();
      });
  };

  makeEditWork = () => {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  closeUpdateModal = () => {
    this.props.updateOff();
  };

  singleFileChangedHandler = (e: any) => {
    this.setState({
      file: e.target.files[0],
    });
  };

  render() {
    return (
      <>
        <Modal isOpen={true}>
          <ModalHeader className="edit-modal">
            Edit Profile<Button onClick={this.closeUpdateModal}>X</Button>
          </ModalHeader>
          <ModalBody className="edit-modal">
            <Form onSubmit={this.handleProfileUpdate}>
              <FormGroup>
                <Label htmlFor="file">Edit profile picture</Label>
                <Input type="file" onChange={this.singleFileChangedHandler} />
              </FormGroup>
              <br />
              <FormGroup>
                <Label for="username"></Label>
                <TextField
                  value={this.state.editUsername}
                  onChange={(e) =>
                    this.setState({ editUsername: e.target.value })
                  }
                  label="Username"
                  className="modal-text-field"
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Label for="adoption recruiter">Adoption Recruiter:</Label>
                <Button
                  color="primary"
                  onClick={() => this.setState({ editAdoptionRecruiter: true })}
                >
                  Yes
                </Button>
                <Button
                  color="secondary"
                  onClick={() =>
                    this.setState({ editAdoptionRecruiter: false })
                  }
                >
                  No
                </Button>
              </FormGroup>
              <FormGroup>
                <Label for="bio"></Label>
                <TextField
                  value={this.state.editBio}
                  onChange={(e) => this.setState({ editBio: e.target.value })}
                  label="Bio"
                />
              </FormGroup>
              <FormGroup>
                <Label for="contact"></Label>
                <TextField
                  value={this.state.editContact}
                  onChange={(e) =>
                    this.setState({
                      editContact: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <br />
              <IconButton type="submit">
                <SaveIcon />
              </IconButton>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
