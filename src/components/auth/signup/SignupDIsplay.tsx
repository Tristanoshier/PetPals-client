import React, { useState } from 'react'
import { Form, FormGroup, Button, Label, Input, ButtonGroup, } from 'reactstrap';
import { notDeepEqual } from 'assert';

interface Props {
    username: string,
    password: string,
    passwordRequired: boolean,
    adoptionRecruiter: boolean,
    onChange: (event: any) => void,
    isLogin: boolean
}

export default class SignupDisplay extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    state = {
        username: this.props.username,
        password: this.props.password,
        passwordRequired: this.props.passwordRequired,
        adoptionRecruiter: this.props.adoptionRecruiter,
        isLogin: this.props.isLogin
    }
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <Label for="unsername" hidden>Username</Label>
                    <Input onChange={e => this.setState({ username: e.target.value })} name="username" id="username" placeholder="Username" />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="password" hidden>Password</Label>
                    <Input onChange={e => this.setState({ username: e.target.value })} type="password" name="password" id="password" placeholder="Password" />
                </FormGroup>
                <br />
                <ButtonGroup>
                    <Label>Are you an adoption recruiter?</Label>
                    <Button color="primary" onClick={() => this.setState({ adoptionRecruiter: true })}>Yes</Button>
                    <Button color="secondary" onClick={() => this.setState({ adoptionRecruiter: false })}>No</Button>
                </ButtonGroup>
                <Button onChange={this.props.onChange}>Submit</Button>
                <p className="auth-switch" onClick={() => this.setState({ isLogin: !this.state.isLogin })}>
                    {this.state.isLogin ? "Don't have an account? Sign up here." : "Already have an account? Login here."}
                </p>
            </Form>
        )
    }
}