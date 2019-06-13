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
        return /*html*/`
            <ul id="home-todos"></ul>
        `;
    }
}
export default HomeTodosList;