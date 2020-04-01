import React from 'react';
import { Form, Label, Input, FormGroup, Button } from 'reactstrap';

export default function LoginDisplay() {

    return (
        <Form inline>
            <FormGroup>
                <Label for="username" hidden>Username</Label>
                <Input type= "text" name="username" id="exampleUsername" placeholder="Username" />
            </FormGroup>
            <br />
            <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            <br />
            <Button>Submit</Button>
        </Form>
    )
}