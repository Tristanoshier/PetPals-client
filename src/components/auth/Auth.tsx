import React from 'react';
import { Container } from 'reactstrap';
import Login from './Login/Login';
type State = {
    isLogin: boolean
}
export default class Auth extends React.Component<{}, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            isLogin: false
        }
    }
    isLoginHandler() {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }
    render() {
        return (
            <Container>
                <Login isLogin={this.state.isLogin} isLoginHandler={this.isLoginHandler.bind(this)} />
            </Container>
        )
    }
}