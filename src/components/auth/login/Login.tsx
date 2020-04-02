import React from 'react';
import LoginDisplay from './LoginDisplay';
import { Container } from 'reactstrap';
type Props = {
    isLogin: boolean,
    updateToken: (newToken: string) => void,
    isLoginHandler: () => void
}
type State = {
    username: string,
    password: string,
    incorrectPassword: boolean,
    usernameNotExist: boolean
}
export default class Login extends React.Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
            username: "",
            password: "",
            incorrectPassword: false,
            usernameNotExist: false,
        }
    }
    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3001/user/login`, {
            method: 'POST',
            body: JSON.stringify({ username: this.state.username, password: this.state.password }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.error === 'bad gateway') {
                    console.log("hit");
                    this.setState({
                        incorrectPassword: true
                    })
                }
                if (data.error === 'failed to authenticate') {
                    this.setState({
                        usernameNotExist: true
                    })
                }
                this.props.updateToken(data.sessionToken);
            })
    }
    onUsernameChange(e: any) {
        this.setState({
            username: e.target.value
        })
    }
    onPasswordChange(e: any) {
        this.setState({
            password: e.target.value
        })
    }
    render() {
        return (
            <Container>
                <h1>Login</h1>
                <LoginDisplay
                    incorrectPassword={this.state.incorrectPassword}
                    usernameNotExist={this.state.usernameNotExist}
                    onSubmit={this.handleSubmit.bind(this)}
                    isLogin={this.props.isLogin}
                    isLoginHandler={this.props.isLoginHandler}
                    onUsernameChange={this.onUsernameChange.bind(this)}
                    onPasswordChange={this.onPasswordChange.bind(this)}
                />
            </Container>
        )
    }
}