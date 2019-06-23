import Component from '../Component.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';
import Inspiration from './Inspiration.js';
import adviceApi from '../services/advice-api.js';
import picApi from '../services/picture-api.js';
import Loading from '../shared/Loading.js';
import HomeTodosList from './HomeTodosList.js';
import { auth, todoRef } from '../services/firebase.js';
import dateFunction from '../utils/date-function.js';

class HomeApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        const footerTag = dom.querySelector('footer');
        const shuffleButton = dom.querySelector('button');
        const todoButton = dom.querySelector('.todos');
        const todoModal = dom.querySelector('#home-modal');
        const exitModal = dom.querySelector('.modal-exit');
        const insideModal = dom.querySelector('.home-modal-content');
        const alertModal = dom.querySelector('.alert-modal');
        const alertModalExit = dom.querySelector('.alert-modal-exit');

        const header = new Header();
        dom.insertBefore(header.render(), main);   

        const loading = new Loading({ loaded: false });
        main.appendChild(loading.render());

        const inspiration = new Inspiration({ advice: [], pic: [] });
        main.appendChild(inspiration.render());

        const homeTodosList = new HomeTodosList({ todos: [] });
        insideModal.appendChild(homeTodosList.render());

        const todoListRef = todoRef
            .child(auth.currentUser.uid);

        todoListRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const allLists = value ? Object.entries(value) : [];

                // this section here should be own function
                const allTodos = allLists.map(entry => {
                    const todosAndListKeys = Object.values(entry[1]);
                    todosAndListKeys.forEach(todosAndListKey => {
                        todosAndListKey.listKey = entry[0];
                    });
                    return todosAndListKeys;
                });
                
                let todos = [];
                allTodos.forEach(allTodo => {
                    todos = todos.concat(allTodo);
                });
                // end function
                
                const todaysTodos = todos.filter((todo) => {
                    return todo.date.includes(dateFunction());
                });
                
                homeTodosList.update({ todos: todaysTodos });
            });

        todoButton.addEventListener('click', () => {
            todoModal.style.display = 'block';
        });

        exitModal.addEventListener('click', () => {
            todoModal.style.display = 'none';
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

        let count = 0;

        shuffleButton.addEventListener('click', () => {
            loadInspirations();
            count++;
            if(count > 5) {
                alertModal.style.display = 'block';
                loading.update({ loaded: false });
                shuffleButton.disabled = true;
            }
        });

        alertModalExit.addEventListener('click', () => {
            alertModal.style.display = 'none';
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                    <button class="shuffle">Shuffle</button>
                    <button class="todos">Todos for Today</button>
                    <div id="home-modal" class="home-modal">
                        <div class="home-modal-content">
                            <button class="modal-exit">X</button>
                        </div>
                    </div>
                    <div id="alert-modal" class="alert-modal">
                        <div class="alert-modal-content">
                            <button class="alert-modal-exit">X</button>
                            <p class="no-todo-message">When life gives you a moddo and you do not 
                            like it, make moddo-aid, (aka, you pressed shuffle too many times, now move on)!</p>
                        </div>
                    </div>
                </main>
                <footer></footer>
            </div>
        `;
    }
}

export default HomeApp;