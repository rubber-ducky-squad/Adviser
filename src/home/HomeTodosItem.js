import Component from '../Component.js';

class HomeTodosItem extends Component {
    renderTemplate() {
        const todo = this.props.todo;
        return /*html*/`
                <section class="todays-todos">
                    <label class="home-todo-align" for="${todo.todo}">
                        <p>• ${todo.todo}</p>
                    </label>
                </section
            `;
    }
}
export default HomeTodosItem;  