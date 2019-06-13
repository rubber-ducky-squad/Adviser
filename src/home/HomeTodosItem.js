import Component from '../Component.js';

class HomeTodosItem extends Component {
    renderTemplate() {
        const todo = this.props.todo;
        return /*html*/`
                <section>
                    <label for="${todo.todo}">
                        <input id="checkbox" name="checkbox" value="${todo.completed}" type="checkbox">${todo.todo}
                    </label>
                        <a href="./tasks.html">Go get them done!</a>
                </section
            `;
    }
}
export default HomeTodosItem;