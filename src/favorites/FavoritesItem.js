import Component from '../Component.js';
import FavoriteButton from '../shared/FavoriteButton.js';
import { auth, favoritesRef } from '../services/firebase.js';

class FavoritesItem extends Component {
    render() {
        const dom = this.renderDOM();
        const container = dom.querySelector('.favorite-container');
        const favorite = this.props.favorite;
        const key = auth.currentUser.uid;
        const userFavoritesRef = favoritesRef
            .child(key)
            .child(favorite.key);

        const favoriteButton = new FavoriteButton({
            onFavorite: () => {
                userFavoritesRef.remove();
            }
        });
        container.appendChild(favoriteButton.render());

        userFavoritesRef.on('value', snapshot => {
            const isFavorite = Boolean(snapshot.val());
            favoriteButton.update({ isFavorite });
        });

        return dom;
    }

    renderTemplate() {
        const favorite = this.props.favorite;
        
        return /*html*/`
            <li class="favorites-item">
            <div class="favorite-container"></div>
            <h1 class="advice">"${favorite.advice}"</h1>
            <img src="${favorite.pic}" alt="random stock photo">
            </li>
        `;
    }
}

export default FavoritesItem;