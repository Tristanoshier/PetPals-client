import React from "react";
import { Button, notification } from "antd";

const url = "http://www.boredapi.com/api/activity";

type Props = {
  activity: string;
  type: string;
};

class BoredApi extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

  }

  openNotification = () => {
    notification.open({
      message: this.props.activity,
      description: this.props.type,
      onClick: () => {
        console.log('Data fetched! Nice!')
      },
    });
  };


  render() {
    return (
      <div>
        <Button onClick={() => this.openNotification()}>Get an activity</Button>    
      </div>
    );
  }
}

export default BoredApi;