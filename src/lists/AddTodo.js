import Component from '../Component.js';
// import { auth, todoRef } from '../services/firebase.js';

class AddToDo extends Component {
    // render() {
    //     const form = this.renderDOM();
    //     const input = form.querySelector('input');

    //     form.addEventListener('submit', event => {
    //         event.preventDefault();
    //         const todosRef = todoRef.child()
    //             .
    //     })

    //     return form;
    // }

    renderTemplate() {
        return /*html*/`
        <form id="todo-form">
            <label>
                Add a Task
                <input name="task" required>
            </label>
        <button>Add</button>
    </form>
        `;
    }
}
export default AddToDo;