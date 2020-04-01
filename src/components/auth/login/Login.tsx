import React from 'react';

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
        usernameNotExist: false
    }
    componentDidMount() {
        let handleSubmit = (event: any) => {
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
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
            </div>
        )
    }
}