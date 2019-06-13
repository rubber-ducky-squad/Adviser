import Component from '../Component.js';
import AboutUsList from './AboutUsList.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';

class AboutUsApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        const footerTag = dom.querySelector('footer');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const aboutUsList = new AboutUsList();
        main.appendChild(aboutUsList.render());

        const footer = new Footer();
        footerTag.appendChild(footer.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main></main>
            <footer></footer>
        </div>
        `;
    }
}

export default AboutUsApp;