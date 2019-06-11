import Component from '../Component.js';
import { auth, listRef } from '../services/firebase.js';

class TaskItem extends Component {
    render() {
        const dom = this.renderDOM();
        const removeButton = dom.querySelector('.delete-list');
        const list = this.props.list;
        const key = auth.currentUser.uid;        

        const listRefs = listRef
            .child(key)
            .child(list.key);
 
        removeButton.addEventListener('click', () => {
            listRefs.remove();
        });

        return dom;
    }

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