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

        const addTodo = new AddTodo({ list });
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
                <p><h2>${list.title}</h2></p>
                <section>
                    <button class="list-button">Open List</button>
                    <button class="delete-list">Delete</button>
                </section>
                </span>
                <section>
                <div id="modal" class="modal">
                    <div class="modal-content">
                        <h1>List Title</h1>
                        <button class="modal-exit">X</button>
                    </div>
                </div>
                </section>
            </li>
        `;
    }
}
export default TaskItem;