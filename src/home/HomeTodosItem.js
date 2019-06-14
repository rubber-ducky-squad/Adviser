import Component from '../Component.js';
import { auth, todoRef } from '../services/firebase.js';

class HomeTodosItem extends Component {
    render() {
        const dom = this.renderDOM();
        const todo = this.props.todo;
    
        const checkbox = dom.querySelector('#checkbox');

        checkbox.addEventListener('change', () => {
            todoRef.child(auth.currentUser.uid).child(todo.listKey).child(todo.key).update({
                completed: checkbox.checked
            });
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