import React from "react";
import { Form, FormGroup, Button, Label, Input, ButtonGroup } from "reactstrap";

type Props = {
    passwordRequired: boolean,
    onSubmit: (event: any) => void,
    isLogin: boolean,
    isLoginHandler: (e: any) => void,
    onUsernameChange: (e: any) => void,
    onPasswordChange: (e: any) => void,
    onAdoptionChangeTrue: () => void,
    onAdoptionChangeFalse: () => void
}

function SignupDisplay(props: Props) {
        return (
            <Form onSubmit={props.onSubmit}>
                <FormGroup>
                    <Label for="username" hidden>Username</Label>
                    <Input onChange={e => props.onUsernameChange(e)} name="username" id="username" placeholder="Username" />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="password" hidden>Password</Label>
                    <Input onChange={e => props.onPasswordChange(e)} type="password" name="password" id="password" placeholder="Password" />
                </FormGroup>
                <br />
                <ButtonGroup>
                    <Label>Are you an adoption recruiter?</Label>
                    <Button color="primary" onClick={() => props.onAdoptionChangeTrue()}>Yes</Button>
                    <Button color="secondary" onClick={() => props.onAdoptionChangeFalse()}>No</Button>
                </ButtonGroup>
                <br />
                <Button type="submit">Signup</Button>
                <p className="auth-switch" onClick={props.isLoginHandler}>
                    {props.isLogin ? "Don't have an account? Sign up here." : "Already have an account? Login here."}
                </p>
            </Form>
        )
}

export default SignupDisplay;