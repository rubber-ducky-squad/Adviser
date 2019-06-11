import Component from '../Component.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';
import FavoritesList from './FavoritesList.js';

class FavoritesApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        const footerTag = dom.querySelector('footer');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const favoritesList = new FavoritesList();
        main.appendChild(favoritesList.render()); 

        const footer = new Footer();
        footerTag.appendChild(footer.render());
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