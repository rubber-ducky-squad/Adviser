import Component from '../Component.js';

class AddToDo extends Component {
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