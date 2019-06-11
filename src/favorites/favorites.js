import '../utils/check-auth.js';
import { auth } from '../services/firebase.js';
import FavoritesApp from './FavoritesApp.js';

const root = document.getElementById('app');

auth.onAuthStateChanged((user) => {
    if(user) {
        const favoritesApp = new FavoritesApp();
        root.appendChild(favoritesApp.render());  
    }
});
