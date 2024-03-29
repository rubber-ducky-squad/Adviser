import Component from '../Component.js';
import { auth, listRef, todoRef } from '../services/firebase.js';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';

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

        const todoList = new TodoList({ todos: [], list });
        modalContent.appendChild(todoList.render());

        const todoListRef = todoRef
            .child(auth.currentUser.uid)
            .child(list.key);

        todoListRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const todos = value ? Object.values(value) : [];
                todoList.update({ todos });
            });

        const listRefs = listRef
            .child(key)
            .child(list.key);
 
        removeButton.addEventListener('click', () => {
            todoListRef.remove();
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
                    <h2>${list.title}</h2>
                    <section>
                        <button class="list-button">Open List</button>
                        <button class="delete-list">Delete</button>
                    </section>
                </span>
                <section>
                    <div id="modal" class="modal">
                        <div class="modal-content">
                            <button class="modal-exit">X</button>
                        </div>
                    </div>
                </section>
            </li>
        `;
    }
}

export default TaskItem;