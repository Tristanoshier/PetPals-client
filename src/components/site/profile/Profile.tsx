import React from "react";
import ProfileDisplay from "./ProfileDisplay";
import PostIndex from "./post/PostIndex";
import PetIndex from "./pet/PetIndex";

type Props = {
  token: string,
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
      <div>
        <h1>Profile</h1>
        <ProfileDisplay token={this.props.token} />

        {this.state.isToggle ? (
          <PostIndex token={this.props.token} />
        ) : (
          <PetIndex token={this.props.token} />
        )}
        <p className="auth-switch" onClick={this.isToggleHandler.bind(this)}>
          {this.state.isToggle
            ? "Post"
            : "Pets"}
        </p>
      </div>
    );
  }
}
