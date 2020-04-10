import React from "react";
//Components
import ProfileDisplay from "./ProfileDisplay";
import PostIndex from "./post/PostIndex";
import PetIndex from "./pet/PetIndex";
//Material UI
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//Reactstrap
import { Container } from 'reactstrap';

type Props = {
  token: string;
};

type State = {
  isToggle: boolean
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
      <Container className="profile" >
        <ProfileDisplay token={this.props.token} />
        <Tabs
          value="1"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab onClick={() => this.isToggleHandler()} label={`Posts`} />
          <Tab onClick={() => this.isToggleHandler()} label="Pets" />
        </Tabs>

        {/* <IconButton aria-label="pets">
              <PetsIcon />
            </IconButton>

         <IconButton aria-label="post">
              <ChatBubbleIcon />
            </IconButton> */}
        {this.state.isToggle ? (
          <PostIndex token={this.props.token} />
        ) : (
            <PetIndex token={this.props.token} />
          )}
      </Container>
    );
  }
}