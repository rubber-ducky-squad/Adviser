import Component from '../Component.js';
import HomeTodoItem from './HomeTodosItem.js';

class HomeTodosList extends Component {
    render() {
        const dom = this.renderDOM();
        const todos = this.props.todos;
        
        todos.forEach(todo => {
            const homeTodoItem = new HomeTodoItem({ todo });
            dom.appendChild(homeTodoItem.render());
        });

        return dom;
    }

    renderTemplate() {
        const todos = this.props.todos;
        if(todos.length === 0) {
            return /*html*/`
                <ul>
                    <h2>You don't have any tasks due today,
                    let your daily moddo inspire you to make some!</h2>
                    <a href="./tasks.html">Go to your Tasks</a>
                </ul>
            `;
        }
        return /*html*/`
            <ul id="home-todos"></ul>
        `;
    }
}

export default HomeTodosList;