const config = {
    apiKey: 'AIzaSyD9LNDXxScGqMJcFHvjLJhhbYW9fLTUneA',
    authDomain: 'adviser-app-e186b.firebaseapp.com',
    databaseURL: 'https://adviser-app-e186b.firebaseio.com',
    projectId: 'adviser-app-e186b',
    storageBucket: 'adviser-app-e186b.appspot.com',
    messagingSenderId: '742031613651',
    appId: '1:742031613651:web:94541369fd4be0f5'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesRef = db.ref('favorites');