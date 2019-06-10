const config = {
    apiKey: 
    authDomain: 
    databaseURL: 
    projectId: 
    storageBucket: 
    messagingSenderId: 
    appId: 
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();