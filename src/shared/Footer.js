import Component from '../Component.js';

class Footer extends Component {
    renderTemplate() {
        return /*html*/`
            <div>
                <section class="navigation">
                    <p>home</p>
                    <p>Favorites</p>
                </section>

                <div class="profile"></div>
            </div>
    `;
}
}

export default Footer;