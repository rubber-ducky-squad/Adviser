import Component from '../Component.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';
import Inspiration from './Inspiration.js';

class HomeApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        const footerTag = dom.querySelector('footer');


        const header = new Header();
        dom.insertBefore(header.render(), main);   

        const inspiration = new Inspiration();
        main.appendChild(inspiration.render());
        
        const footer = new Footer();
        footerTag.appendChild(footer.render());
        
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
                <footer>
                </footer>
            </div>
        `;


    }
}

export default HomeApp;