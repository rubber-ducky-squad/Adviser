import Component from '../Component.js';


class FavoritesItem extends Component {


    renderTemplate() {
        const favorite = this.props.favorite;
        
        return /*html*/`
            <li class="favorites-item">
            <h1 class="advice">"${favorite.advice}"</h1>
            <img src="${favorite.pic}" alt="random stock photo">
            </li>
        `;
    }
}
export default FavoritesItem;