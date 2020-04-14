let APIURL = '';

switch (window.location.hostname) {
    //this is the local host name of the react app
    case 'localhost' || '127.0.0.1':
        //this is the local host name of my API
        APIURL = 'http://localhost:3001';
        break;
    case 'tat-petpals-client.herokuapp.com':
        APIURL = 'https://tat-petpals-server.herokuapp.com'
}

export default APIURL;