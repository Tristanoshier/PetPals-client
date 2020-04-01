import React from 'react';
import LoginDisplay from './LoginDisplay';
import { Container } from 'reactstrap';

interface Props {
    isLogin: boolean,
    updateToken: (newToken: string) => void
}
interface State {
    username: string,
    password: string,
    incorrectPassword: boolean,
    usernameNotExist: boolean
}
export default class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    state = {
        username: "",
        password: "",
        incorrectPassword: false,
        usernameNotExist: false,
        isLogin: this.props.isLogin
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3001/user/login`, {
            method: 'POST',
            body: JSON.stringify({ email: this.state.username, password: this.state.password }),
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
    render() {
        return (
            <Container>
                <h1>Login</h1>
                <LoginDisplay
                    username={this.state.username}
                    password={this.state.password}
                    incorrectPassword={this.state.incorrectPassword}
                    usernameNotExist={this.state.usernameNotExist}
                    onChange={this.handleSubmit}
                    isLogin={this.state.isLogin}
                />
            </Container>
        )
    }
}