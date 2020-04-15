import React from 'react'
import BoredApi from './boredapi'

const url = "http://www.boredapi.com/api/activity";

export default class BoredApiDisplay extends React.Component {
    constructor(props: any) {
        super(props)
    }
    state = {
        activity: "",
        type: "",
      }
    fetchData = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                activity: data.activity,
                type: data.type
            })
    
        })
      };

      componentDidMount() {
          this.fetchData()
          
      }

    render() {
        return(
            <div><BoredApi activity={this.state.activity} type={this.state.type}/></div>
        )
    }
}

