import '../utils/check-auth.js';
import ListApp from './ListApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged((user) => {
    if(user) {
        const listApp = new ListApp();
        root.appendChild(listApp.render());  
    }
});
