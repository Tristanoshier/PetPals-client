import React from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { render } from '@testing-library/react';

// type Props = {
//     description: string,
//     postUrl: string
// }

// export default class PostCreate extends React.Component<Props, State> {
//     constructor(props: Props) {
//         super(props)
//         this.state = {
//             description: "",
//             postUrl: ""
//         }
//     }
//     handleSubmit = (event: any) => {
//         event.preventDefault();
//         fetch(`http://localhost:3001/post/create`, {
//             method: 'POST',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': this.props.token
//             })
//         })
//             .then((res) => res.json())
//             .then((logData) => {
//                 console.log(logData);

//             })
//     }
// }

// onDescription(e: any) {
//     this.setSate({
//         description: e.target.value
//     })
// }

// onPostUrl(e: any) {
//     this.setSate({
//         postUrl: e.target.value
//     })
// }

// render() {
//     return (
//         <div>
//             <PostIndex
//                 passwordRequired={this.state.passwordRequired}
//                 onSubmit={this.handleSubmit.bind(this)}
//                 onUsernameChange={this.onUsernameChange.bind(this)}
//                 onPasswordChange={this.onPasswordChange.bind(this)}
//                 onAdoptionChangeTrue={this.onAdoptionChangeTrue.bind(this)}
//                 onAdoptionChangeFalse={this.onAdoptionChangeFalse.bind(this)}
//             />
//         </div>
//     )
// }
