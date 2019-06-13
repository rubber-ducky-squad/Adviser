import Component from '../Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/ `
            <header>
                <h1 class="header">MODDO</h1>
                <h3 class="header">/ˈmädō/</h3>
            </header>
        `;
    }
}

export default Header;