import Component from '../Component.js';
import { auth, listRef } from '../services/firebase.js';
import AddTodo from './AddTodo.js';

class TaskItem extends Component {
    render() {
        const dom = this.renderDOM();
        const removeButton = dom.querySelector('.delete-list');
        const listButton = dom.querySelector('.list-button');
        const modalContent = dom.querySelector('.modal-content');
        const modal = dom.querySelector('#modal');
        const modalExit = dom.querySelector('.modal-exit');
        const list = this.props.list;
        const key = auth.currentUser.uid;

        const addTodo = new AddTodo();
        modalContent.appendChild(addTodo.render());

   
        const listRefs = listRef
            .child(key)
            .child(list.key);
 
        removeButton.addEventListener('click', () => {
            listRefs.remove();
        });

        listButton.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        modalExit.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        return dom;
    }

    renderTemplate() {
        const list = this.props.list;
        return /*html*/`
            <li class="task-item">
            <span>
                <p>${list.title}</p>
                <section>
                    <button class="list-button">go to list</button>
                    <button class="delete-list">X</button>
                </section>
                <section>
                <div id="modal" class="modal">
                    <div class="modal-content">
                        <h1>hello</h1>
                        <button class="modal-exit">X</button>
                    </div>
                </div>
                </section>
            </span>
            </li>
        `;
    }
}
export default TaskItem;