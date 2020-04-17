import React from 'react'
import { Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';

//Material UI
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const StyledTextField = withStyles({
  root: {
      color: 'white',
      backgroundColor: 'white',
      width: 400,
      borderRadius: 5
  },
  label: {
    textTransform: 'capitalize',
  },
})(TextField);



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
      <Container className="auth-container">
        <Row>
          <Col className="login-container" md="5">
              <h1 className="jumbo-login">PetPals<FontAwesomeIcon icon={faDog} /></h1>
              <p className="about-login">PetPals is a pet focused social media application. It was designed for people to take a break from the competition of social media. Now users can just watch pets all day while showing off their's. PetPals presents a welcoming and wholesome platform for people to admire pets and maybe adopt a pet of their own! Experience a different way of social media. </p>
              <p className="mobile-description-login">-social media to share and view pets-</p>
            <Form className="login-form" onSubmit={props.onSubmit}>
                <FormGroup>
                    <Label for="username" hidden>Username</Label>
                    <StyledTextField 
                    className="mobile-width"
                    onChange={e => props.onUsernameChange(e)} 
                    name="username" 
                    id="filled-basic" 
                    label="username" 
                    variant="filled" />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="password" hidden>Password</Label>
                    <StyledTextField 
                    className="mobile-width"
                    onChange={e => props.onPasswordChange(e)} 
                    type="password" 
                    name="password" 
                    id="filled-basic" 
                    label="password" 
                    variant="filled" />
                </FormGroup>
                <br />
                <div className="login-switch">
                  <Button type="submit" variant="outlined" className="login-button">Login</Button>
                  <br />
                  <br />
                  <p className="auth-switch" onClick={props.isLoginHandler}>
                      {props.isLogin ? "Don't have an account? Sign up here!" : "Already have an account? Login here!"}
                  </p>
                </div>
            </Form>
          </Col>
          <Col className="bg-image" md="7"></Col>
        </Row>
      </Container>
    )
}
export default LoginDisplay;

