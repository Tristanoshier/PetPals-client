import React from "react";
import { Button } from "reactstrap";
import Sitebar from "./Sitebar";

type Props = {
  clickLogout: () => void;
  token: string;
};
export default class Home extends React.Component<Props> {
    render(){
        return (
            <div>
                <Sitebar onClick={this.props.clickLogout} token={this.props.token}/>
            </div>
        )
    }
}

