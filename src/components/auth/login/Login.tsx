import React from 'react';

interface Props {
    isLogin: boolean,
    updateToken: (newToken: string) => void
}

export default class Login extends React.Component<Props> {
    render(){
        return(
            <div>
                <h1>Login</h1>
            </div>
        )
    }
}