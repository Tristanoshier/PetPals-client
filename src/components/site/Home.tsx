import React from 'react';

interface Props {
    clickLogout: () => void,
    token: string
}

export default class Home extends React.Component<Props> {
    render(){
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}