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
                    <p>home</p>
                    <p>Favorites</p>
                </section>
            </div>
    `;
    }
}

export default Footer;