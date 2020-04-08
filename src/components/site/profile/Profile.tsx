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
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//Reactstrap
import { Container } from 'reactstrap'; 

type Props = {
  token: string;
};

type State = {
  isToggle: boolean,
  // value: boolean
};

export default class Profile extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isToggle: true,
      // value: false
    };
  }

    // handleChange(){
    //   if(this.state.value){
    //     this.setState({
    //       value: !this.state.value
    //     })
    //     return(
    //       <PetIndex token={this.props.token} />
    //       )
    //   }else{
    //     this.setState({
    //       value: !this.state.value
    //     })
    //     return (
    //       <PostIndex token={this.props.token} />
    //     )
    //   }
    // }
    isToggleHandler() {
      this.setState({
        isToggle: !this.state.isToggle
      });
    }
    render() {
      return (
        <Container >
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
          {/* <Paper>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Pets" />
              <Tab label="Posts" />
            </Tabs>
          </Paper> */}
        </Container>
      );
    }
  }