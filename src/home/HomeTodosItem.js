import Component from '../Component.js';
import { auth, todoRef } from '../services/firebase.js';

class HomeTodosItem extends Component {
    render() {
        const dom = this.renderDOM();
        // Don't use id, not unique on the page.
        // It's the only input, so 'input' would work fine.
        const checkbox = dom.querySelector('#checkbox');
        const deleteTodo = dom.querySelector('.todo-delete');
        const todo = this.props.todo;
    
        // DRY - Don't repeat yourself
        const todoItemRef = todoRef
            .child(auth.currentUser.uid)
            .child(todo.listKey)
            .child(todo.key);
        
        checkbox.addEventListener('change', () => {
            todoItemRef.update({
                completed: checkbox.checked
            });
        });

        deleteTodo.addEventListener('click', () => {
            todoItemRef.remove();
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
                <label id="home-todo-align" for="${todo.todo}">
                    <input ${checked} id="checkbox" name="checkbox" value="${todo.completed}" type="checkbox">${todo.todo}
                    <button class="todo-delete">X</button>
                </label>
            </section>
        `;
    }
}

export default HomeTodosItem;  