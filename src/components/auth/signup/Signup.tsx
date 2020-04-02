import React from 'react';
import SignupDisplay from './SignupDIsplay'
<<<<<<< HEAD
=======

>>>>>>> 6b2fa9b23fffa9bf86c01a1ed7c56712aebc35a1
type Props = {
    isLogin: boolean,
    updateToken: (newToken: string) => void,
    isLoginHandler: () => void
}
<<<<<<< HEAD
=======

>>>>>>> 6b2fa9b23fffa9bf86c01a1ed7c56712aebc35a1
type State = {
    username: string,
    password: string,
    passwordRequired: boolean,
    adoptionRecruiter: boolean,
}
export default class Signup extends React.Component<Props, State> {
<<<<<<< HEAD
    constructor(props: Props) {
=======
    constructor(props: Props){
>>>>>>> 6b2fa9b23fffa9bf86c01a1ed7c56712aebc35a1
        super(props);
        this.state = {
            username: "",
            password: "",
            passwordRequired: false,
            adoptionRecruiter: false,
<<<<<<< HEAD
        }
    }
=======
        } 
    }
   

>>>>>>> 6b2fa9b23fffa9bf86c01a1ed7c56712aebc35a1
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
                    return this.props.updateToken(data.sessionToken)
                })
        }
    }
<<<<<<< HEAD
=======

>>>>>>> 6b2fa9b23fffa9bf86c01a1ed7c56712aebc35a1
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
<<<<<<< HEAD
    onAdoptionChangeTrue() {
=======

    onAdoptionChangeTrue(){
>>>>>>> 6b2fa9b23fffa9bf86c01a1ed7c56712aebc35a1
        this.setState({
            adoptionRecruiter: true
        })
    }
<<<<<<< HEAD
    onAdoptionChangeFalse() {
=======

    onAdoptionChangeFalse(){
>>>>>>> 6b2fa9b23fffa9bf86c01a1ed7c56712aebc35a1
        this.setState({
            adoptionRecruiter: false
        })
    }
<<<<<<< HEAD
=======

>>>>>>> 6b2fa9b23fffa9bf86c01a1ed7c56712aebc35a1
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