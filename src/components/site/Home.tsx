import React from "react";
import { Button } from "reactstrap";
import Navbar from "./Navbar";

type Props = {
  clickLogout: () => void;
  token: string;
};
export default class Home extends React.Component<Props> {
    render(){
        return (
            <div>
                <Navbar onClick={this.props.clickLogout} token={this.props.token}/>
            </div>
        )
    }
}

