import Component from '../Component.js';
import { auth, listRef } from '../services/firebase.js';

class TaskItem extends Component {
    render() {
        const dom = this.renderDOM();
        const removeButton = dom.querySelector('.delete-list');
        const listButton = dom.querySelector('.list-button');
        const modal = dom.querySelector('#modal');
        const list = this.props.list;
        const key = auth.currentUser.uid;

   
        const listRefs = listRef
            .child(key)
            .child(list.key);
 
        removeButton.addEventListener('click', () => {
            listRefs.remove();
        });

        listButton.addEventListener('click', () => {
            modal.style.display = 'block';
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
                    <button class="list-button">go to list</button>
                    <button class="delete-list">X</button>
                </section>
                <section>
                <div id="modal" class="modal">
                    <div class="modal-content">
                        <h1>hello</h1>
                    </div>
                </div>
                </section>
            </span>
            </li>
        `;
    }
}
export default TaskItem;