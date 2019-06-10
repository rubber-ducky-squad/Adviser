import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class Profile extends Component {

    render() {
        const dom = this.renderDOM();

        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            auth.signOut();
        });

        return dom;
    }

    renderTemplate() {
        // const user = this.props.user;
        const avatar = './assets/profile.png';

        return /*html*/`
            <div class="profile">
                <img src="${avatar}">
                <span>Mle</span>
                <button>Sign Out</button>
            </div>
        `;
    }
}

export default Profile;