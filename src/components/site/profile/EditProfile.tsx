import React from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';
import $ from 'jquery';


type Props = {

}

type State = {
    selectedFile : any
}

export default class EditProfile extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

//      const editNew = (e : any) => {
//         e.preventDefault()

//         const url = 'https://mc-fetch.herokuapp.com/profile/edit-profile';

//         fetch(url, {
//             method: 'PUT',
//             headers: {
//                 'authorization': localStorage.getItem('token'),
//                 'content-type': 'application/json'
//             }, body: JSON.stringify(reqBody)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (file) {
//                     uploadPhoto()
//                 }
//                 showFooter()
//             })
//             .catch(err => console.log(err))
//     }

//     const uploadPhoto = () => {
//         const url = 'https://mc-fetch.herokuapp.com/profile/update-profile-photo'
//         const postData = new FormData()
//         postData.append('image', file)
//         fetch(url, {
//             method: 'PUT',
//             headers: {
//                 'authorization': localStorage.getItem('token')
//             }, body: postData
//         })
//             .then(res => res.json())
//             .catch(err => console.log(err))
//     }

//     const showFooter = () => {
//         setFooter(!footer)
//         setTimeout(function () {
//             localStorage.removeItem('new-prof-pic')
//             setFooter(false)
//             window.history.back()
//         }, 3000)
//     }


    singleFileChangedHandler = (event: any) => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    };

    singleFileUploadHandler = (event: any) => {
        const data = new FormData();// If file selected
        if (this.state.selectedFile) {
            data.append('profileImage', this.state.selectedFile, this.state.selectedFile.name);
            console.log(data)
            
            axios.post('/api/profile/profile-img-upload', data, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    // 'Content-Type': `multipart/form-data; boundary=${data._boundary}`, //_boundary doesnt exist in data object
                }
            })
                .then((response) => {
                    if (200 === response.status) {
                        // If file size is larger than expected.
                        if (response.data.error) {
                            if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                                alert('Max size: 2MB');
                            } else {
                                console.log(response.data);// If not the given file type
                                alert(response.data.error);
                            }
                        } else {
                            // Success
                            let fileName = response.data;
                            console.log('fileName', fileName);
                            alert('File Uploaded');
                        }
                    }
                }).catch((error) => {
                    // If another error
                    alert('this is the error i am seeing');
                });
        } else {
            // if file not selected throw error
           alert('Please upload file');
        }
    };

    render() {
        console.log(this.state.selectedFile)
        return (
            <Container>
                <h1>Profile</h1>
                <div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
                    <div className="card-header">
                        <h3 style={{ color: '#555', marginLeft: '12px' }}>Single Image Upload</h3>
                        <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px ( Max 2MB )</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Please upload an image for your profile</p>
                        <input type="file" onChange={this.singleFileChangedHandler} />
                        <div className="mt-5">
                            <button className="btn btn-info" onClick={this.singleFileUploadHandler}>Upload!</button>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}