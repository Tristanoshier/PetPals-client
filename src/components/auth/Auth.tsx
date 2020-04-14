import React from "react";
import { Container } from "reactstrap";
import Login from "./login/Login";
import Signup from "./signup/Signup";
type State = {
  isLogin: boolean;
};
type Props = {
  updateToken: (newToken: string) => void;
};
export default class Auth extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  isLoginHandler() {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  }
  render() {
    return (
      <Container className="auth-container">
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        {this.state.isLogin ? (
          <Login
            isLogin={this.state.isLogin}
            isLoginHandler={this.isLoginHandler.bind(this)}
            updateToken={this.props.updateToken}
          />
        ) : (
          <Signup
            isLogin={this.state.isLogin}
            isLoginHandler={this.isLoginHandler.bind(this)}
            updateToken={this.props.updateToken}
          />
        )}
      </Container>
    );
  }
}
