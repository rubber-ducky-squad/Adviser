import Component from '../Component.js';
import HomeTodoItem from './HomeTodosItem.js';

class HomeTodosList extends Component {
    render() {
        const dom = this.renderDOM();
        const list = dom.querySelector('ul');
        const todos = this.props.todos;
        
        todos.forEach(todo => {
            const homeTodoItem = new HomeTodoItem({ todo });
            list.appendChild(homeTodoItem.render());
        });

        return dom;
    }

    renderTemplate() {
        const todos = this.props.todos;

        // DRY === Don't Repeat Yourself.
        // You have same exact code, except for <h2>,
        // so make the conditionality reflect that:
        const noTodos = todos.length ? '' : /*html*/`
            <h2 class="no-tasks">
                You don't have any todos due today,
                let your daily moddo inspire you to make some!
            </h2>
        `;

        // Your <ul> should contain <li>'s, not other things.
        // Pull out into own part:
        return /*html*/`
            <section>
                <a class="task-link" href="./tasks.html">Go to your Todos</a>
                ${noTodos}
                <ul>
                </ul>
            </section>
        `;
    }
}

export default HomeTodosList;