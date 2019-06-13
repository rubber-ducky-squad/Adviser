import '../utils/check-auth.js';
import { auth } from '../services/firebase.js';
import AboutUsApp from './AboutUsApp.js';

const root = document.getElementById('app');

auth.onAuthStateChanged((user) => {
    if(user) {
        const aboutUsApp = new AboutUsApp();
        root.appendChild(aboutUsApp.render());  
    }
});