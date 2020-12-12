import { google } from 'googleapis';

const googleConfig = {
    clientId: '<GOOGLE_CLIENT_ID>', 
    clientSecret: '<GOOGLE_CLIENT-SECRET>',
    redirect: 'http://your-website.com/google-auth'
};

function createConnection() {
    return new google.auth.OAuth(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    );
}

const defualtScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
];

function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: defualtScope
    });
}

function  urlGoogle() {
    const auth = createConnection();
    const url = getConnectionUrl(auth);
    return url;
}