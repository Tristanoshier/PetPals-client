import React, { useState } from 'react'
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';

export default function LoginDisplay() {
    return (
        <Form inline>
            <FormGroup>
                <Label for="unsername" hidden>Username</Label>
                <Input type="text" name="username" id="username" placeholder="Username" />
            </FormGroup>
            <br />
            <FormGroup>
                <Label for="password" hidden>Password</Label>
                <Input type="password" name="password" id="password" placeholder="Password" />
            </FormGroup>
            <br />
            <Button>Submit</Button>
        </Form>
    )
}

interface Props {
    username: string,
    password: string,
    incorrectPassword: boolean,
    usernameNotExist: boolean,
    onChange: (event: any) => void
}

export default class Login extends React.Component<Props>{
    constructor(props: Props){
        super(props)
    }

    state = {
        username: this.props.username,
        password: this.props.password,
        incorrectPassword: this.props.incorrectPassword,
        usernameNotExist: this.props.usernameNotExist
    }

    render(){
        return (
            <Form inline>
                <FormGroup>
                    <Label for="username" hidden>Username</Label>
                    <Input onChange={e => this.setState({username: e.target.value})} name="username" placeholder="Username" />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="password" hidden>Password</Label>
                    <Input onChange={e => this.setState({password: e.target.value})} type="password" name="password" id="password" placeholder="Password" />
                </FormGroup>
                <br />
                <Button onChange={this.props.onChange}>Submit</Button>
            </Form>
        )
    }
}

