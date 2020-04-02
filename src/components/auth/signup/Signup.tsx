import React from 'react';
<<<<<<< HEAD
import SignupDisplay from './SignupDIsplay';
=======
import SignupDisplay from './SignupDIsplay'
>>>>>>> 9a4441bf0cc502f92e816f1be70db4bfc2c1afb4

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
            this.setState({
                passwordRequired: true
            })
        } else {
            fetch(`http://localhost:3001/user/signup`, {
                method: 'POST',
                body: JSON.stringify({ username: this.state.username, password: this.state.password }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then(response => response.json())
                .then(data => {
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
            <div>
                <h1>Signup</h1>
                <SignupDisplay
                    passwordRequired={this.state.passwordRequired}
                    onChange={this.handleSubmit}
                    isLogin={this.props.isLogin}
                    isLoginHandler={this.props.isLoginHandler}
                    onUsernameChange={this.onUsernameChange.bind(this)}
                    onPasswordChange={this.onPasswordChange.bind(this)}
                    onAdoptionChangeTrue={this.onAdoptionChangeTrue.bind(this)}
                    onAdoptionChangeFalse={this.onAdoptionChangeFalse.bind(this)}
                />
            </div>
        )
    }
}