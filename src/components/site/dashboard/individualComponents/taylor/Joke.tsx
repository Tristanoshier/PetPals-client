import React from 'react';
import { Modal, Button } from 'antd';

type State = {
    type: string,
    setup: string,
    delivery: string,
    joke: string,
    visible: boolean
}

export default class Joke extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            type: "",
            setup: "",
            delivery: "",
            joke: "",
            visible: false
        }
    }

    componentDidMount() {
        this.fetchJoke();
    }
    fetchJoke() {
        fetch(`https://sv443.net/jokeapi/category/Programming`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(jokeData => {
                console.log(jokeData);
                this.setState({
                    type: jokeData.type,
                    setup: jokeData.setup,
                    delivery: jokeData.delivery,
                    joke: jokeData.joke
                })
            }).then(() => {
                console.log(this.state)
            })
    }


    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal.bind(this)}>
                    Random Programming Joke
                </Button>
                <Modal
                    title="Joke API"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>THIS API WAS HARD AND GAVE ME A HEADACHE FOR 3 DAYS. MAY THIS API AND TYPESCRIPT BURN IN THE FIERY PITS OF HELL!!!</p>
                    <p>{this.state.joke}</p>
                    <p>{this.state.setup}</p>
                    <p>{this.state.delivery}</p>
                </Modal>
            </div>
        )
    }
}