<<<<<<< HEAD:src/components/site/dashboard/post/PostIndex.tsx
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { render } from "@testing-library/react";
import { string } from "prop-types";
import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";
import PostCards from "./PostCards";
=======
import React from 'react'

>>>>>>> ab7322d23ed65cf11ae76fda690c98fb3d6e328d:src/components/site/dashboard/postFeed/PostFeedIndex.tsx
type Props = {
  token: string;
};
type State = {
<<<<<<< HEAD:src/components/site/dashboard/post/PostIndex.tsx
  postCollection: Object;
  description: string;
  postUrl: string;
  descriptionEdit: string;
  postUrlEdit: string;
};
export default class PostIndex extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      postCollection: [],
      description: "",
      postUrl: "",
      descriptionEdit: "",
      postUrlEdit: ""
    };
  }
  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:3001/post/create`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
      })
    })
      .then(res => res.json())
      .then(postData => {
        this.props.postData.postCollection;
      });
  };
  render() {
    return (
      <div>
        <PostCreate token={this.props.token} />
        <PostCards token={this.props.token} />
        <PostEdit token={this.props.token} />
      </div>
    );
  }
=======
    postCollection: string[],
    description: string,
    postUrl: string,
    descriptionEdit: string,
    postUrlEdit: string
}

export default class PostIndex extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            postCollection: [],
            description: "",
            postUrl: "",
            descriptionEdit: "",
            postUrlEdit: ""
        }
    }

    fetchPosts = () => {
        fetch(`http://localhost:3001/post/find/feed`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((postData) => {
                console.log(postData)
            })
    }

    componentWillMount() {
        this.fetchPosts()
    }

    render() {
        return (
            <div>
            </div>
        )
    }
>>>>>>> ab7322d23ed65cf11ae76fda690c98fb3d6e328d:src/components/site/dashboard/postFeed/PostFeedIndex.tsx
}
