import Component from '../Component.js';
import { auth, todoRef } from '../services/firebase.js';

class TodoItem extends Component {
    render() {
        const dom = this.renderDOM();
        const removeButton = dom.querySelector('button');
        const list = this.props.list;
        const todo = this.props.todo;
     
        removeButton.addEventListener('click', () => {
            todoRef.child(auth.currentUser.uid).child(list.key).child(todo.key).remove();
        });

        return dom;
    }

    renderTemplate() {
        const todo = this.props.todo;
        return /*html*/`
            <li>
                <label for="${todo.todo}">
                    <input name="checkbox" value="${todo.todo}" type="checkbox">${todo.todo}, complete by: ${todo.date}
                    <button>X</button>
                </label>
            </li>
        `;
    }
}
export default TodoItem;