import React from "react";
import { Container, Row, Col } from "reactstrap";

type Props = {
  token: string
}

export default class ProfileDisplay extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  fetchMyProfile() {
    fetch('http://localhost:3001/user/find', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    }).then(res => res.json())
      .then((profile) => {
        // console.log(profile)
      }).catch(err => console.log(err))
  }

  componentWillMount() {
    this.fetchMyProfile()
  }

  render() {
    return (
      <Container>

      </Container>
    );
  }
}
