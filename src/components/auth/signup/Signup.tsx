import React from 'react';
import SignupDisplay from './SignupDIsplay'
import { Container } from 'reactstrap';
type Props = {
    isLogin: boolean,
    updateToken: (newToken: string) => void,
    isLoginHandler: () => void
}
type State = {
    username: string,
    password: string,
    passwordRequired: boolean,
    adoptionRecruiter: boolean,
}
export default class Signup extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            passwordRequired: false,
            adoptionRecruiter: false,
        }
    }


    handleSubmit = (event: any) => {
        event.preventDefault();
        if (this.state.password.length < 5) {
            alert('password must be at least 5 characters')
        } else {
            fetch(`http://localhost:3001/user/signup`, {
                method: 'POST',
                body: JSON.stringify({ username: this.state.username, password: this.state.password, adoptionRecruiter: this.state.adoptionRecruiter }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data.sessionToken)
                    this.props.updateToken(data.sessionToken)
                })
        }

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

    onAdoptionChangeTrue() {
        this.setState({
            adoptionRecruiter: true
        })
    }

    onAdoptionChangeFalse() {
        this.setState({
            adoptionRecruiter: false
        })
    }
    render() {
        return (
            <Container className="signup-display">
                <h1>Signup</h1>
                <SignupDisplay
                    passwordRequired={this.state.passwordRequired}
                    onSubmit={this.handleSubmit.bind(this)}
                    isLogin={this.props.isLogin}
                    isLoginHandler={this.props.isLoginHandler}
                    onUsernameChange={this.onUsernameChange.bind(this)}
                    onPasswordChange={this.onPasswordChange.bind(this)}
                    onAdoptionChangeTrue={this.onAdoptionChangeTrue.bind(this)}
                    onAdoptionChangeFalse={this.onAdoptionChangeFalse.bind(this)}
                />
            </Container>
        )
    }
}