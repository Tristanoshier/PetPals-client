import React from 'react';
import ProfileDisplay from './ProfileDisplay';

type Props = {

}

export default class Profile extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <ProfileDisplay />
            </div>
        )
    }
}