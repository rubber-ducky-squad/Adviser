import Component from '../Component.js';
import TaskItem from './TaskItem.js';

class TaskList extends Component {
    render() {
        const dom = this.renderDOM();
        const lists = this.props.lists;

        lists.forEach(list => {
            const taskItem = new TaskItem({ list: list });
            dom.appendChild(taskItem.render());
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <ul class="task-list"></ul>
        `;
    }
}
export default TaskList;