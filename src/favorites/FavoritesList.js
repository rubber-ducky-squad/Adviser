import Component from '../Component.js';
import FavoritesItem from './FavoritesItem.js';

class FavoritesList extends Component {
    render() {
        const dom = this.renderDOM();

        const favorites = this.props.favorites;
        console.log(favorites);
        favorites.forEach(favorite => {
            const favoritesItem = new FavoritesItem({ favorites: favorite });
            dom.appendChild(favoritesItem.render());
        }); 

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <ul class="favorites-list"></ul>
        `;
    }
}
export default FavoritesList;