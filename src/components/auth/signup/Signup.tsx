import React from 'react';

interface Props {
    isLogin: boolean,
    updateToken: (newToken: string) => void
}
export default class Signup extends React.Component<Props> {
    render(){
        return(
            <div>
                <h1>Signup</h1>
            </div>
        )
    }
}