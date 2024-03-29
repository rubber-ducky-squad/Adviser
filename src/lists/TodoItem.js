import Component from '../Component.js';
import { auth, todoRef } from '../services/firebase.js';

class TodoItem extends Component {
    render() {
        const dom = this.renderDOM();
        const removeButton = dom.querySelector('button');
        const checkbox = dom.querySelector('#checkbox');
        const list = this.props.list;
        const todo = this.props.todo;
     
        removeButton.addEventListener('click', () => {
            todoRef.child(auth.currentUser.uid).child(list.key).child(todo.key).remove();
        });
        
        checkbox.addEventListener('change', () => {
            todoRef.child(auth.currentUser.uid).child(list.key).child(todo.key).update({
                completed: checkbox.checked
            });
        });

        return dom;
    }

    renderTemplate() {
        const todo = this.props.todo;
        const date = todo.date.split('-').reverse().join('-');
        let checked = '';
        if(todo.completed) {
            checked = 'checked';
        }

        if(todo.date === '') {
            return /*html*/`
            <li class="todo">
                <label for="${todo.todo}">
                    <input ${checked} id="checkbox" name="checkbox" value="${todo.completed}" type="checkbox">${todo.todo} ${date}
                    <button class="todo-delete">X</button>
                </label>
            </li>
        `;
        }
        return /*html*/`
            <li class="todo">
                <label for="${todo.todo}">
                    <input ${checked} id="checkbox" name="checkbox" value="${todo.completed}" type="checkbox">${todo.todo}, complete by: ${date}
                    <button class="todo-delete">X</button>
                </label>
            </li>
        `;
    }
}

export default TodoItem;