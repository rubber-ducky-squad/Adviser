import Component from '../Component.js';

class TodoItem extends Component {
    renderTemplate() {
        const todo = this.props.todo;
        
        return /*html*/`
            <li>
                <h1>${todo.todo}</h1>
            </li>
        `;
    }
}
export default TodoItem;