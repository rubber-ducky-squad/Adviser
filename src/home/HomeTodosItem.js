import Component from '../Component.js';

class HomeTodosItem extends Component {
    renderTemplate() {
        const todo = this.props.todo;
        return /*html*/`
            <li>${todo.todo}</li>
        `;
    }
}
export default HomeTodosItem;