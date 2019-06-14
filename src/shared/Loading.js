import Component from '../Component.js';

class Loading extends Component {
    renderTemplate() {
        const loading = this.props.loaded;
        if(!loading) {
            return '<div></div>';
        }
        return /*html*/ `
            <div class="loading">
                <img src="../assets/loading.gif">
            </div>
        `;
    }
}

export default Loading;