import React from "react";

//Reactstrap
import { Form, FormGroup, Label, Input, ButtonGroup, Row, Container, Col } from "reactstrap";

//Material UI
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
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
    <Container className="auth-container">
      <Row>
        <Col className="login-container" md="5">
          <h1 className="jumbo-login">PetPals<FontAwesomeIcon icon={faDog} /></h1>
          <p className="about-signup">PetPals is a pet focused social media application. It was designed for people to take a break from the competition of social media. Now users can just watch pets all day while showing off their's. PetPals presents a welcoming and wholesome platform for people to admire pets and maybe adopt a pet of their own! Experience a different way of social media. </p>
          <p className="mobile-description-signup">-social media to share and view pets-</p>
          <Form className="login-form" onSubmit={props.onSubmit}>
            <FormGroup className="mobile-adoption-input">
            <Label className="adoption-specialist-label">Are you an Adoption Specialist?</Label>
              <Button className= "signup-yes-btn desktop-btn" onClick={() => props.onAdoptionChangeTrue()}>Yes</Button>
              <Button className= "signup-no-btn desktop-btn" onClick={() => props.onAdoptionChangeFalse()}>No</Button>
              <br />
              <Button className= "signup-yes-btn mobile-btn" onClick={() => props.onAdoptionChangeTrue()}>Yes</Button>
              <Button className= "signup-no-btn mobile-btn" onClick={() => props.onAdoptionChangeFalse()}>No</Button>
              </FormGroup>
              <FormGroup>
              <Label for="username" hidden>Username</Label>
              <StyledTextField
                className="mobile-width"
                onChange={e => props.onUsernameChange(e)}
                name="username"
                id="filled-basic"
                label="username"
                variant="filled"
              />
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
              <Button type="submit" className="signup-button">Signup</Button>
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

export default SignupDisplay;