import Component from '../Component.js';

class TaskItem extends Component {
    renderTemplate() {
        const list = this.props.list;
        return /*html*/`
            <li class="task-item">
            <span>
                <p>${list.title}</p>
                <section>
                    <button class="list-link"><a href="">go to list</a></button>
                    <button class="delete-list">X</button>
                </section>
            </span>
            </li>
        `;
    }
}
export default TaskItem;