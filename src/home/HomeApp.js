import Component from '../Component.js';
import Header from '../shared/Header.js';

class HomeApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);        
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                TEST
                </main>
            </div>
        `;


    }
}

export default HomeApp;