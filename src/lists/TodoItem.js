import Component from '../Component.js';

class TodoItem extends Component {
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