import React from 'react';
import { Button, notification } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

type Props ={
    question: string,
    answer: string
}

export default class JeopardyDisplay extends React.Component<Props>{
    constructor(props: Props){
        super(props);
    }

    openNotification(){
        notification.open({
            message: this.props.question,
            description: this.props.answer,
            onClick: () => {
               console.log('here comes your question')
            }
        })
    }

    render(){
        return(
            <div>
                <Button type="primary" onClick={() => this.openNotification()}>Random Jeopardy Question</Button>
            </div>
        )
      
    }
    
  }



