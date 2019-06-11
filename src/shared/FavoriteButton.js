import Component from '../Component.js';

class FavoriteButton extends Component {
    render() {
        const favButton = this.renderDOM();

        favButton.addEventListener('click', () => {
            this.props.onFavorite(!this.props.isFavorite);
        });

        return favButton;
    }

    renderTemplate() {
        const isFavorite = this.props.isFavorite;
        const heart = isFavorite ? '💓' : '♡';
        return /*html*/ `
            <button class="favorite-button ${isFavorite ? 'favorite' : ''}">${heart}</button>
        `;
    }
}

export default FavoriteButton;