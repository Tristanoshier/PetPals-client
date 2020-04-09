import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);


type Props = {
    incorrectPassword: boolean,
    usernameNotExist: boolean,
    isLogin: boolean,
    onSubmit: (event: any) => void,
    isLoginHandler: () => void,
    onUsernameChange: (e: any) => void,
    onPasswordChange: (e: any) => void
}
function LoginDisplay(props: Props) {

    const classes = useStyles();

    return (
        <Form onSubmit={props.onSubmit}>
            <FormGroup>
                <Label for="username" hidden>Username</Label>
                <Input onChange={e => props.onUsernameChange(e)} name="username" placeholder="Username" />
            </FormGroup>
            <br />
            <FormGroup>
                <Label for="password" hidden>Password</Label>
                <Input onChange={e => props.onPasswordChange(e)} type="password" name="password" id="password" placeholder="Password" />
            </FormGroup>
            <br />
            <Button type="submit" variant="outlined" className="login-buttons">Login</Button>
            <p className="auth-switch" onClick={props.isLoginHandler}>
                {props.isLogin ? "Don't have an account? Sign up here." : "Already have an account? Login here."}
            </p>
        </Form>
    )
}
export default LoginDisplay;

