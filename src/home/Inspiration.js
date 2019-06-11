import Component from '../Component.js';
import FavoriteButton from '../shared/FavoriteButton.js';
import { auth, favoritesRef } from '../services/firebase.js';

class Inspiration extends Component {

    render() {
        const dom = this.renderDOM();
        const advice = this.props.advice;
        const pic = this.props.pic;

        const userFavoritesRef = favoritesRef.push()
            .child(auth.currentUser.uid); 

        const favoriteButton = new FavoriteButton({ 
            isFavorite: false,
            onFavorite: (makeFavorite) => {
                if(makeFavorite) {
                    userFavoritesRef.set({
                        advice: advice.advice,
                        pic: pic.url,
                        date: Date()
                    });
                } else {
                    userFavoritesRef.remove();
                }
            }
        });

        userFavoritesRef.on('value', snapshot => {
            const isFavorite = Boolean(snapshot.val());
            favoriteButton.update({ isFavorite });
        });

        dom.appendChild(favoriteButton.render());

        return dom;   
    }

    renderTemplate() {
        const advice = this.props.advice;
        const pic = this.props.pic;

        return /*html*/`
            <div class="advice-pic">
                <h1 class="advice">"${advice.advice}"</h1>
                <img src="${pic.url}"><br>    
            </div>
        `;
    }
}

export default Inspiration;