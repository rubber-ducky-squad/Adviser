import Component from '../Component.js';
import { auth, todoRef } from '../services/firebase.js';

class HomeTodosItem extends Component {
    render() {
        const dom = this.renderDOM();
        const checkbox = dom.querySelector('#checkbox');
        const deleteTodo = dom.querySelector('.todo-delete');
        const todo = this.props.todo;
    
        checkbox.addEventListener('change', () => {
            todoRef.child(auth.currentUser.uid).child(todo.listKey).child(todo.key).update({
                completed: checkbox.checked
            });
        });

        deleteTodo.addEventListener('click', () => {
            todoRef.child(auth.currentUser.uid).child(todo.listKey).child(todo.key).remove();
        });

        return dom;
    }

    renderTemplate() {
        const todo = this.props.todo;
        let checked = '';
        if(todo.completed) {
            checked = 'checked';
        }
        return /*html*/`
                <section class="todays-todos">
                    <label for="${todo.todo}">
                        <input ${checked} id="checkbox" name="checkbox" value="${todo.completed}" type="checkbox">${todo.todo}
                        <button class="todo-delete">X</button>
                    </label>
                </section
            `;
    }
}

export default HomeTodosItem;  