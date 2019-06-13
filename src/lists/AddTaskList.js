import Component from '../Component.js';
import { auth, listRef } from '../services/firebase.js';

class AddTaskList extends Component {
    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');
       
        form.addEventListener('submit', event => {
            event.preventDefault();
            const listsRef = listRef
                .child(auth.currentUser.uid)
                .push();
            
            const listItem = {
                key: listsRef.key,
                owner: auth.currentUser.uid,
                title: input.value
            };
                
            listsRef.set(listItem).then(() => {
                form.reset();
            });
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form id="task-form">
                <label>
                    Add a List
                    <input name="task" required>
                </label>
                <button class="add-list">Add</button>
            </form>
        `;
    }
}

export default AddTaskList;