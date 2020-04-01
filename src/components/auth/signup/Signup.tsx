import React from 'react';

interface Props {
    isLogin: boolean,
    updateToken: (newToken: string) => void
}


interface State {
    username: string,
    password: string,
    passwordRequired: boolean,
    adoptionRecruiter: boolean
}

export default class Signup extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    state = {
        username: "",
        password: "",
        passwordRequired: false,
        adoptionRecruiter: false
    }

    componentDidMount() {
        let handleSubmit = (event: any) => {
            event.preventDefault();
            if (this.state.password.length < 5) {
                this.setState({
                    passwordRequired: true
                })
            } else {
                fetch(`http://localhost:3000/user/signup`, {
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
    }
    render() {
        return (
            <div>
                <h1>Signup</h1>
            </div>
        )
    }
}