import Component from '../Component.js';

class Inspiration extends Component {
    renderTemplate() {
        const advice = this.props.advice;
        return /*html*/`
            <div class="advice-pic">
                <h3>${advice.advice}</h3>
                <img src="">    
            </div>
        `;
    }
}

export default Inspiration;