import Component from '../Component.js';

class HomeTodosItem extends Component {
    renderTemplate() {
        const todo = this.props.todo;
        return /*html*/`
                <section class="todays-todos">
                    <label class="home-todo-align" for="${todo.todo}">
                        <input id="checkbox" name="checkbox" value="${todo.completed}" type="checkbox">${todo.todo}
                    </label>
                </section
            `;
    }
}
export default HomeTodosItem;  