import React from "react";
import APIURL from '../../../helpers/environment';
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
import ClearIcon from '@material-ui/icons/Clear';

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
      `${APIURL}/user/update/profile-pic/${this.props.profileInfo.username}`,
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
      `${APIURL}/user/update/${this.props.profileInfo.username}`,
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
        <Modal className="edit-post-modal" isOpen={true}>
          <ModalHeader className="edit-modal">
            Edit Profile<IconButton className="exit-btn-post" onClick={this.closeUpdateModal.bind(this)}><ClearIcon /></IconButton>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleProfileUpdate}>
              <FormGroup>
                <Label className="choose-file" htmlFor="file">Edit profile picture</Label>
                <Input type="file" onChange={this.singleFileChangedHandler} />
              </FormGroup>
              <FormGroup>
                <Label className= "caption" for="adoption recruiter">Are you an Adoption Specialist?</Label>
                <br />
                <Button className="yes-btn" onClick={() => this.setState({ editAdoptionRecruiter: true })}>
                  Yes
                </Button>
                <Button className="no-btn" onClick={() => this.setState({ editAdoptionRecruiter: false })}>
                  No
                </Button>
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
              <FormGroup>
                <TextField
                  value={this.state.editBio}
                  onChange={(e) => this.setState({ editBio: e.target.value })}
                  label="bio"
                  className="modal-text-field"
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  value={this.state.editContact}
                  onChange={(e) => this.setState({editContact: e.target.value })}
                  label="contact"
                  className="modal-text-field"
                  />
              </FormGroup>
              <br />
              <Button className="create-btn" type="submit">Make Changes</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
