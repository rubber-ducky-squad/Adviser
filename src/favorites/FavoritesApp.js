import Component from '../Component.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';
import FavoritesList from './FavoritesList.js';
import { auth, favoritesRef } from '../services/firebase.js';

class FavoritesApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        const footerTag = dom.querySelector('footer');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const favoritesList = new FavoritesList({ favorites: [] });
        main.appendChild(favoritesList.render()); 
        
        const footer = new Footer();
        footerTag.appendChild(footer.render());

        favoritesRef
            .child(auth.currentUser.uid)
            .on('value', snapshot => {
                const value = snapshot.val();
                const favorites = value ? Object.values(value) : [];
                favoritesList.update({ favorites });
            });       

        return dom;
    }
    
    renderTemplate() {
        return /*html*/ `
            <div>
                <main></main>
                <footer></footer>
            </div>
        `;
    }
}

export default FavoritesApp;