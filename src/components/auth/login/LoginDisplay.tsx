import React from 'react'
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';

interface Props {
    username: string,
    password: string,
    incorrectPassword: boolean,
    usernameNotExist: boolean,
    onChange: (event: any) => void,
    isLogin: boolean
}
export default class LoginDisplay extends React.Component<Props>{

    state = {
        username: this.props.username,
        password: this.props.password,
        incorrectPassword: this.props.incorrectPassword,
        usernameNotExist: this.props.usernameNotExist,
        isLogin: this.props.isLogin
    }
    
    render() {
        return (
            <Form onChange={this.props.onChange}>
                <FormGroup>
                    <Label for="username" hidden>Username</Label>
                    <Input onChange={e => this.setState({ username: e.target.value })} name="username" placeholder="Username" />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="password" hidden>Password</Label>
                    <Input onChange={e => this.setState({ password: e.target.value })} type="password" name="password" id="password" placeholder="Password" />
                </FormGroup>
                <br />
                <Button type="submit">Login</Button>
                {console.log(this.state.isLogin)}
                <p className="auth-switch" onClick={() => this.setState({isLogin: !this.state.isLogin})}>
                    {this.state.isLogin ? "Don't have an account? Sign up here." : "Already have an account? Login here."}
                </p>
            </Form>
        )
    }
}
