import React from 'react';
import { Container } from 'reactstrap';
import Login from './login/Login';
import Signup from './signup/Signup'

interface Props {
    updateToken: (newToken: string) => void
}

export default class Auth extends React.Component<Props> {
    constructor(props: Props){
        super(props);
    }

    state = {
        isLogin: true
    }
    
    render(){
        return (
            <Container>
                {this.state.isLogin ?
                <Login isLogin={this.state.isLogin} updateToken={this.props.updateToken} /> : 
                <Signup isLogin={this.state.isLogin} updateToken={this.props.updateToken} />
                }
            </Container>
        )
    }
}