import Component from '../Component.js';

class Inspiration extends Component {
    renderTemplate() {
        const advice = this.props.advice;
        const pic = this.props.pic;
        return /*html*/`
            <div class="advice-pic">
                <h3>${advice.advice}</h3>
                <img src="${pic.url}">    
            </div>
        `;
    }
}

export default Inspiration;