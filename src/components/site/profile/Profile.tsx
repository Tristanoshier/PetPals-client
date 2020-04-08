import React from "react";
//Components
import ProfileDisplay from "./ProfileDisplay";
import PostIndex from "./post/PostIndex";
import PetIndex from "./pet/PetIndex";
//Material UI
import PetsIcon from "@material-ui/icons/Pets";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import IconButton from "@material-ui/core/IconButton/IconButton";
import AddIcon from '@material-ui/icons/Add';
//Reactstrap
import { Container } from 'reactstrap'

type Props = {
  token: string;
};

type State = {
  isToggle: boolean;
};

export default class Profile extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isToggle: true
    };
  }

  isToggleHandler() {
    this.setState({
      isToggle: !this.state.isToggle
    });
  }
  render() {
    return (
      <Container >
        <h1>Profile</h1>
        <ProfileDisplay token={this.props.token} />
        <p
          className="post-pet-switch"
          onClick={this.isToggleHandler.bind(this)}
        >
          {this.state.isToggle ? (
            <IconButton aria-label="pets">
              <PetsIcon />
            </IconButton>
          ) : (
            <IconButton aria-label="post">
              <ChatBubbleIcon />
            </IconButton>
          )}
        </p>

        {this.state.isToggle ? (
          <PostIndex token={this.props.token} />
        ) : (
          <PetIndex token={this.props.token} />
        )}
      </Container>
    );
  }
}