import React from "react";
import { Form, FormGroup, Label, Input, ButtonGroup } from "reactstrap";
//Material UI
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
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


const StyledButton = withStyles({
    root: {
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

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

    const classes = useStyles();


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
                <StyledButton color="inherit" onClick={() => props.onAdoptionChangeTrue()} >Yes</StyledButton>
                <Button color="secondary" onClick={() => props.onAdoptionChangeFalse()} className="adoption-false">No</Button>
            </ButtonGroup>
            <br />
            <Button type="submit" className="signup-button">Signup</Button>
            <p className="auth-switch" onClick={props.isLoginHandler}>
                {props.isLogin ? "Don't have an account? Sign up here." : "Already have an account? Login here."}
            </p>
        </Form>
    )
}

export default SignupDisplay;