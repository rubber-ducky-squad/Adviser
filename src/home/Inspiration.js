import Component from '../Component.js';

class Inspiration extends Component {

    renderTemplate() {
        const advice = this.props.advice;
        const pic = this.props.pic;

        return /*html*/`
            <div class="advice-pic">
                <h1 class="advice">"${advice.advice}"</h1>
                <img src="${pic.url}"><br>    
            </div>
        `;
    }
}

export default Inspiration;