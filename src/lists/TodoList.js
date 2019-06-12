import Component from '../Component.js';
import TodoItem from '../lists/TodoItem.js';

class TodoList extends Component {
    render() {
        const dom = this.renderDOM();
        const todos = this.props.todos;
        
        todos.forEach(todo => {
            const todoItem = new TodoItem({ todo });
            dom.appendChild(todoItem.render());
        });
        
        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <ul id="todo-list"></ul>
        `;
    }
}
export default TodoList;