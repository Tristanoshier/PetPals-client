import React from 'react';
import { Container } from 'reactstrap';
import Login from './login/Login';
import Signup from './signup/Signup';
type State = {
    isLogin: boolean
}
type Props = {
    updateToken: (newToken: string) => void
}
export default class Auth extends React.Component<Props, State> {
    constructor(props: any){
        super(props)
        this.state = {
            isLogin: true
        }
    }
    isLoginHandler() {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    render(){
        return (
            <Container>
                {this.state.isLogin ?
                    <Login isLogin={this.state.isLogin} isLoginHandler={this.isLoginHandler.bind(this)} updateToken={this.props.updateToken}/> :
                    <Signup isLogin={this.state.isLogin} isLoginHandler={this.isLoginHandler.bind(this)} updateToken={this.props.updateToken} />
                }
            </Container>
        )
    }
}