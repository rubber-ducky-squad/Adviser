import Component from '../Component.js';
import { auth, todoRef } from '../services/firebase.js';

class AddToDo extends Component {
    render() {
        const form = this.renderDOM();
        const taskInput = form.querySelector('#task');
        const dateInput = form.querySelector('#date');
        const list = this.props.list;

        form.addEventListener('submit', event => {
            event.preventDefault();
            
            const todosRef = todoRef
                .child(auth.currentUser.uid)
                .child(list.key)
                .push();

            const todoItem = {
                key: todosRef.key,
                owner: auth.currentUser.uid,
                todo: taskInput.value,
                date: dateInput.value,
                completed: false
            };

            todosRef.set(todoItem).then(() => {
                form.reset();
            });

        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
        <form id="todo-form">
            <label>
                Add a Task
                <input id="task" name="task" required>
            </label>
            <label>
                Date to complete task
                <input id="date" name="date" type="date" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">
            </label>
        <button>Add</button>
    </form>
        `;
    }
}

export default AddToDo;