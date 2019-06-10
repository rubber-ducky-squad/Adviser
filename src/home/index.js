import '../utils/check-auth.js';
import HomeApp from './HomeApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged((user) => {
    if(user) {
        const homeApp = new HomeApp();
        root.appendChild(homeApp.render());  
    }
});
