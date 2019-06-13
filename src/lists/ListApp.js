import Component from '../Component.js';
import Header from '../shared/Header.js';
import Footer from '../shared/Footer.js';
import TaskList from './TaskList.js';
import AddTaskList from './AddTaskList.js';
import { auth, listRef } from '../services/firebase.js';

class ListApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        const footerTag = dom.querySelector('footer');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const addTaskList = new AddTaskList();
        main.appendChild(addTaskList.render());

        const taskList = new TaskList({ lists: [] });
        main.appendChild(taskList.render());

        const footer = new Footer();
        footerTag.appendChild(footer.render());

        listRef
            .child(auth.currentUser.uid)
            .on('value', snapshot => {
                const value = snapshot.val();
                const lists = value ? Object.values(value) : [];
                taskList.update({ lists });
            });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
                <footer></footer>
            </div>
        `;
    }
}

export default ListApp;