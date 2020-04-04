import React from "react";
import PetCards from "./PetCards";
// import PetCreate from "./PetCreate";

export default class PetIndex extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      animal: "",
      bio: "",
      adoption: "",
      petPicUrl: ""
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3001/pet/find`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response => response.json())
      .then(json => {
        console.log(json);
      });
  }
}

export default class PetIndex extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div>
                
            </div>
        )
    }
}