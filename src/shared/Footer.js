import Component from '../Component.js';
import Profile from '../shared/Profile.js';
import { auth } from '../services/firebase.js';

class Footer extends Component {
    render() {
        const dom = this.renderDOM();
        const profile = new Profile();
        dom.appendChild(profile.render());

        auth.onAuthStateChanged(user => {
            profile.update({ user });
        });

        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
            <div>
                <section class="navigation">
                    <h2><a href="">Home</a> || <a href="">Favorites</a></h2>
                </section>
            </div>
    `;
    }
}

export default Footer;