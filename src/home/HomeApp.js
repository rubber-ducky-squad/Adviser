import Component from '../Component.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';
import Inspiration from './Inspiration.js';
import adviceApi from '../services/advice-api.js';
import picApi from '../services/picture-api.js';
import Loading from '../shared/Loading.js';
import HomeTodosList from './HomeTodosList.js';

class HomeApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        const footerTag = dom.querySelector('footer');
        const shuffleButton = dom.querySelector('button');
        const todoButton = dom.querySelector('.todos');
        const todoModal = dom.querySelector('#home-modal');
        const insideModal = dom.querySelector('.home-modal-content');

        const header = new Header();
        dom.insertBefore(header.render(), main);   

        const loading = new Loading({ loaded: false });
        main.appendChild(loading.render());

        const inspiration = new Inspiration({ advice: [], pic: [] });
        main.appendChild(inspiration.render());

        const homeTodosList = new HomeTodosList();
        insideModal.appendChild(homeTodosList.render());

        todoButton.addEventListener('click', () => {
            todoModal.style.display = 'block';
        });
        
        const footer = new Footer();
        footerTag.appendChild(footer.render());

        function loadInspirations() {
            loading.update({ loaded: true });
            
            adviceApi.getAdvice()
                .then(response => {
                    inspiration.update({ advice: response.slip });
                })
                .catch(err => {
                    console.log(err);
                });
            
            picApi.getPic()
                .then(pic => {
                    inspiration.update({ pic });
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    loading.update({ loaded: false });
                });
        }
        loadInspirations();

        shuffleButton.addEventListener('click', () => {
            loadInspirations();
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                <button class="shuffle">SHUFFLE</button>
                <button class="todos">todos for today</button>
                <section>
                <div id="home-modal" class="home-modal">
                    <div class="home-modal-content">
                        <button class="modal-exit">X</button>
                    </div>
                </main>
                <footer>
                </footer>
            </div>
        `;

    }
}

export default HomeApp;