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